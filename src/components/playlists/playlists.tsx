import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useWeb5Playlists } from '@/lib/web5/use-web5-playlists';
import { useConnectors } from '@/lib/connectors/connectors-provider';
import { TypographyP, useToast } from '@/components/ui';
import { Playlist } from '@/lib/web5/interfaces';
import { ConnectorType } from '@/lib/connectors/interfaces';
import { PlaylistCard } from './playlist-card';
import { PlaylistsLoader } from './playlists-loader';

/**
 * Playlists: main component of the app. It loads the stored playlists
 * in Web5 and also the existing playlists from the connected apps (Spotify,
 * Tidal, Youtube etc.) and lists them using @type {PlaylistCard}
 */
export const Playlists = () => {
  const { spotifyConnector } = useConnectors();
  const { playlistsStore } = useWeb5Playlists();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  // Connected Apps playlists
  const [spotifyPlaylists, setSpotifyPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    const initializePlaylists = async () => {
      if (!playlistsStore) return;

      setIsLoading(true);

      try {
        const playlistsData = await playlistsStore.getPlaylists();

        // Load Spotify playlists
        let spotifyPlaylists: Playlist[] = [];
        if (spotifyConnector) {
          spotifyPlaylists = await spotifyConnector.getPlaylists();
          for (const sp of spotifyPlaylists) {
            // Lookup for the current web5 playlist to see if it was saved before
            const web5Playlist = playlistsData.find(
              (p) => p.externalAppsIds.spotify === sp.externalAppsIds.spotify
            );

            if (web5Playlist) {
              sp.id = web5Playlist.id;
            } else {
              playlistsData.push(sp);
            }
          }
        }

        playlistsData.sort((a, b) => a.name.localeCompare(b.name));
        setPlaylists(playlistsData);
        setSpotifyPlaylists(spotifyPlaylists);
      } catch (error) {
        const errorMessage = 'Fail to load playlists data';
        console.error(errorMessage, error);
        toast({
          title: errorMessage,
          description:
            'You probably need access to the beta test list of the Spotify Developer App',
        });
      }

      setIsLoading(false);
    };

    initializePlaylists();
  }, [spotifyConnector, playlistsStore, toast]);

  const onImportClick = async (playlistIndex: number) => {
    const playlist = playlists[playlistIndex];

    if (!playlist || !playlistsStore) {
      toast({ title: 'Unknown error while importing playlist' });
      return;
    }

    try {
      const createdPlaylist = await playlistsStore.createPlaylist(playlist);

      const updatedPlaylists = [...playlists];
      updatedPlaylists[playlistIndex] = createdPlaylist;
      setPlaylists(updatedPlaylists);
    } catch (error) {
      const errorMessage = 'Fail to create web5 records. Please try again.';
      console.error(errorMessage, error);
      toast({ title: errorMessage });
    }
  };

  const onSyncClick = async (
    playlistIndex: number,
    updatedPlaylist: Playlist,
    appToSync?: ConnectorType
  ) => {
    if (appToSync) {
      toast({ title: 'Synchronization to Connected App not supported yet.' });
      return;
    }

    const playlist = playlists[playlistIndex];
    if (!playlist?.id || !playlistsStore) {
      toast({ title: 'Unable to update Playlist without an ID' });
      return;
    }

    try {
      await playlistsStore.updatePlaylist(updatedPlaylist);

      const updatedPlaylists = [...playlists];
      updatedPlaylists[playlistIndex] = updatedPlaylist;
      setPlaylists(updatedPlaylists);
    } catch (error) {
      const errorMessage = 'Fail to update web5 records. Please try again.';
      console.error(errorMessage, error);
      toast({ title: errorMessage });
    }
  };

  const onRemoveClick = async (playlistIndex: number) => {
    const playlist = playlists[playlistIndex];

    if (!playlist?.id || !playlistsStore) {
      toast({ title: 'Unable to remove Playlist without an ID' });
      return;
    }

    try {
      await playlistsStore.removePlaylist(playlist.id);
      const updatedPlaylists = [...playlists];
      updatedPlaylists[playlistIndex].id = undefined;
      setPlaylists(updatedPlaylists);
    } catch (error) {
      const errorMessage = 'Fail to remove web5 records. Please try again.';
      console.error(errorMessage, error);
      toast({ title: errorMessage });
    }
  };

  return isLoading ? (
    <PlaylistsLoader />
  ) : playlists.length > 0 ? (
    <div className="mt-4 space-y-4">
      {playlists.map((playlist, index) => (
        <PlaylistCard
          key={`playlist-idx-${index}`}
          playlist={playlist}
          onImportClick={() => onImportClick(index)}
          onRemoveClick={() => onRemoveClick(index)}
          onSyncClick={(updatedPlaylist, appToSync) =>
            onSyncClick(index, updatedPlaylist, appToSync)
          }
          spotifyPlaylist={spotifyPlaylists.find(
            (p) =>
              p.externalAppsIds.spotify === playlist.externalAppsIds.spotify
          )}
        />
      ))}
    </div>
  ) : spotifyConnector ? (
    <TypographyP>
      You don&apos;t have any playlists in your DWN nor in your connected
      apps.😞
    </TypographyP>
  ) : (
    <TypographyP>
      You are not connected to any apps. Please go to the{' '}
      <Link to="/connected-apps" className="font-semibold underline">
        Connected Apps
      </Link>{' '}
      page to connect to an app and be able to sync your playlists!
    </TypographyP>
  );
};
