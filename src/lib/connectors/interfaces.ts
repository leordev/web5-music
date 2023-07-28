import { Playlist, SongWithAudioSrc } from '../web5/interfaces';

/**
 * List of (to be) Supported external Apps to sync the user Songs and Playlists
 */
export type ConnectorType =
  | 'spotify'
  | 'youtube'
  | 'tidal'
  | 'pandora'
  | 'amazonMusic'
  | 'appleItunes';

/**
 * The connector represents the interface required to access the user songs and playlists
 * information in an external app such as Tidal, Spotify, Youtube etc.
 */
export interface Connector {
  /**
   * Returns a list of playlists of the current user in this external connected app
   */
  getPlaylists: () => Promise<Playlist[]>;

  /**
   * Returns a list of songs with the audio source url for the given playlist
   */
  getPlaylistSongsWithAudio: (
    playlist: Playlist
  ) => Promise<SongWithAudioSrc[]>;

  /**
   * Search for songs for by artist and/or title
   * (To be implemented in future versions where the user can manage their
   * playlists inside the Web5 Music app)
   */
  searchSongs: (searchText: string) => Promise<SongWithAudioSrc[]>;

  /**
   * Update the external app playlist based on the changes made by the user
   * within the Web5 Music app.
   * (To be implemented in future versions where the user can manage their
   * playlists inside the Web5 Music app)
   */
  updatePlaylist: (playlist: Playlist) => Promise<void>;

  /**
   * Cleanup any user session information about the current app connector.
   */
  disconnect: () => Promise<void>;
}
