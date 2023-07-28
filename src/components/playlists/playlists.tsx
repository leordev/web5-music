import { useWeb5Playlists } from '@/lib/web5/use-web5-playlists';
import { useConnectors } from '@/lib/connectors/connectors-provider';
import { TypographyP, useToast } from '../ui';
import { useEffect, useState } from 'react';
import { PlaylistHydrated } from '@/lib/web5/interfaces';
import { PlaylistItem } from './playlist-item';

export const Playlists = () => {
  const { spotifyConnector } = useConnectors();
  const { playlistsStore } = useWeb5Playlists();
  const { toast } = useToast();

  const [playlists, setPlaylists] = useState<PlaylistHydrated[]>([]);
  const [unsyncedPlaylists, setUnsyncedPlaylists] = useState<
    PlaylistHydrated[]
  >([]);

  useEffect(() => {
    const initializePlaylists = async () => {
      if (!playlistsStore) return;

      const playlistsData = await playlistsStore.getPlaylists();

      const unsyncedPlaylists = [];

      // Load Spotify playlists and grab the unsync ones
      if (spotifyConnector) {
        const spotifyPlaylists = await spotifyConnector.getPlaylists();
        for (const sp of spotifyPlaylists) {
          // Lookup for the current web5 playlist to see if it was saved before
          const web5Playlist = playlistsData.find(
            (p) => p.externalAppsIds.spotify === sp.externalAppsIds.spotify
          );

          // Unknown playlists are just appended without a web5 id to give us an opportunity to import it
          if (!web5Playlist) {
            playlistsData.push(sp);
          } else if (
            // If the playlist loaded from the external app is different than the Web5 one it's unsynced
            JSON.stringify(web5Playlist.songs) !== JSON.stringify(sp.songs)
          ) {
            unsyncedPlaylists.push({ ...sp, id: web5Playlist.id });
          }
        }
      }

      playlistsData.sort((a, b) => a.name.localeCompare(b.name));
      setPlaylists(playlistsData);
      setUnsyncedPlaylists(unsyncedPlaylists);
    };

    initializePlaylists();
  }, [spotifyConnector, playlistsStore]);

  const onImportClick = async (playlistIndex: number) => {
    const playlist = playlists[playlistIndex];

    if (!playlist || !playlistsStore) {
      toast({ title: 'Unknown error while importing playlist' });
      return;
    }

    const createdPlaylist = await playlistsStore.createPlaylist(playlist);

    const updatedPlaylists = [...playlists];
    updatedPlaylists[playlistIndex] = createdPlaylist;
    setPlaylists(updatedPlaylists);
  };

  const onSyncClick = async (playlistIndex: number) => {
    const playlist = playlists[playlistIndex];

    if (!playlist?.id || !playlistsStore) {
      toast({ title: 'Unable to update Playlist without an ID' });
      return;
    }

    const unsyncedPlaylist = unsyncedPlaylists.find(
      (unsyncedItem) => unsyncedItem.id === playlist.id
    );
    if (!unsyncedPlaylist) {
      toast({ title: 'Unable to sync Playlist' });
      return;
    }

    await playlistsStore.updatePlaylist(unsyncedPlaylist);

    const updatedPlaylists = [...playlists];
    updatedPlaylists[playlistIndex] = unsyncedPlaylist;
    setPlaylists(updatedPlaylists);

    const updatedUnsyncedPlaylists = unsyncedPlaylists.filter(
      (up) => up.id !== playlist.id
    );
    setUnsyncedPlaylists(updatedUnsyncedPlaylists);
  };

  const onRemoveClick = async (playlistIndex: number) => {
    const playlist = playlists[playlistIndex];

    if (!playlist?.id || !playlistsStore) {
      toast({ title: 'Unable to remove Playlist without an ID' });
      return;
    }

    await playlistsStore.removePlaylist(playlist.id);
    const updatedPlaylists = [...playlists];
    updatedPlaylists[playlistIndex].id = undefined;
    setPlaylists(updatedPlaylists);
  };

  return spotifyConnector || playlistsStore ? (
    <ul>
      {playlists.map((playlist, index) => (
        <PlaylistItem
          key={`playlist-idx-${index}`}
          playlist={playlist}
          onImportClick={() => onImportClick(index)}
          onRemoveClick={() => onRemoveClick(index)}
          onSyncClick={() => onSyncClick(index)}
          isSynced={Boolean(
            !unsyncedPlaylists.find(
              (unsynced) =>
                unsynced.externalAppsIds.spotify ===
                playlist.externalAppsIds.spotify
            )
          )}
        />
      ))}
    </ul>
  ) : (
    <TypographyP>
      You are not connected to any apps and you don&apos;t have any playlists in
      your DWN. Please go to the <a>Connected Apps</a> page to connect to an app
      and be able to search songs and sync your playlists!
    </TypographyP>
  );
};
