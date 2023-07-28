import { Playlist, PlaylistHydrated, SongHydrated } from '../web5/interfaces';

export type ConnectorType =
  | 'spotify'
  | 'youtube'
  | 'tidal'
  | 'pandora'
  | 'amazonMusic'
  | 'appleItunes';

export interface Connector {
  getPlaylists: () => Promise<PlaylistHydrated[]>;
  searchSongs: (searchText: string) => Promise<SongHydrated[]>;
  updatePlaylist: (playlist: Playlist) => Promise<void>;
  disconnect: () => Promise<void>;
}
