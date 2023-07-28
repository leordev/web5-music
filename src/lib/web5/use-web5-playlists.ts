import { useWeb5 } from './web5-provider';
import { Web5PlaylistsStore } from './web5-playlists-store';
import { useEffect, useState } from 'react';

export const useWeb5Playlists = () => {
  const { web5 } = useWeb5();
  const [playlistsStore, setPlaylistsStore] = useState<Web5PlaylistsStore>();

  useEffect(() => {
    console.info('updating web5playlists store...', web5);
    const store = web5 ? new Web5PlaylistsStore(web5) : undefined;
    setPlaylistsStore(store);
  }, [web5]);

  return { playlistsStore };
};
