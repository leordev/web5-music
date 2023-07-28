import { Playlist, SongWithAudioSrc } from '../web5/interfaces';

export type ConnectorType =
  | 'spotify'
  | 'youtube'
  | 'tidal'
  | 'pandora'
  | 'amazonMusic'
  | 'appleItunes';

export interface Connector {
  getPlaylists: () => Promise<Playlist[]>;
  getPlaylistSongsWithAudio: (
    playlist: Playlist
  ) => Promise<SongWithAudioSrc[]>;
  searchSongs: (searchText: string) => Promise<SongWithAudioSrc[]>;
  updatePlaylist: (playlist: Playlist) => Promise<void>;
  disconnect: () => Promise<void>;
}
