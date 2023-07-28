import { useWeb5Playlists } from '@/lib/web5/use-web5-playlists';
import { useConnectors } from '@/lib/connectors/connectors-provider';
import { TypographyP, useToast } from '@/components/ui';
import { useEffect, useState } from 'react';
import { PlaylistHydrated } from '@/lib/web5/interfaces';
import { PlaylistItem } from './playlist-item';
import { PlaylistsLoader } from './playlists-loader';
import { ConnectorType } from '@/lib/connectors/interfaces';

export const Playlists = () => {
  const { spotifyConnector } = useConnectors();
  const { playlistsStore } = useWeb5Playlists();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [playlists, setPlaylists] = useState<PlaylistHydrated[]>([]);

  // Connected Apps playlists
  const [spotifyPlaylists, setSpotifyPlaylists] = useState<PlaylistHydrated[]>(
    []
  );

  useEffect(() => {
    const initializePlaylists = async () => {
      if (!playlistsStore) return;

      setIsLoading(true);

      const playlistsData = await playlistsStore.getPlaylists();

      // Load Spotify playlists
      let spotifyPlaylists: PlaylistHydrated[] = [];
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
      // setUnsyncedPlaylists(unsyncedPlaylists);
      setIsLoading(false);
    };

    initializePlaylists();
  }, [spotifyConnector, playlistsStore]);

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
    updatedPlaylist: PlaylistHydrated,
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
  ) : spotifyConnector || playlistsStore ? (
    <div className="mt-4 space-y-4">
      {playlists.map((playlist, index) => (
        <PlaylistItem
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
      {playlists.length === 0 && (
        <div>Playlists were not found in your connected apps.</div>
      )}
    </div>
  ) : (
    <TypographyP>
      You are not connected to any apps and you don&apos;t have any playlists in
      your DWN. Please go to the <a>Connected Apps</a> page to connect to an app
      and be able to search songs and sync your playlists!
    </TypographyP>
  );
};
