export interface Playlist {
  id?: string;
  name: string;
  image?: string;
//   songsIds: string[];
  externalAppsIds: ExternalAppsIds;
}

export interface Song {
  id?: string;
  name: string;
  durationMs: number;
//   artistsIds: string[];
//   albumId: string;
  externalIds: ExternalIds;
  externalAppsIds: ExternalAppsIds;
}

export interface Artist {
  id?: string;
  name: string;
  image?: string;
  externalAppsIds: ExternalAppsIds;
}

export interface Album {
  id?: string;
  name: string;
  releaseDate: string;
  releaseDatePrecision: 'year' | 'month' | 'day';
  externalIds: ExternalIds;
  externalAppsIds: ExternalAppsIds;
}

export interface PlaylistHydrated extends Playlist {
  songs: SongHydrated[];
}

export interface SongHydrated extends Song {
  album: Album;
  artists: Artist[];
}

// Known External Ids
export interface ExternalIds {
  // International Standard Recording Code
  isrc?: string;

  // International Article Number
  ean?: string;

  // Universal Product Code
  upc?: string;
}

// Ids from Supported Connected Apps
export interface ExternalAppsIds {
  spotify?: string;
  youtube?: string;
  tidal?: string;
  pandora?: string;
  amazonMusic?: string;
  appleItunes?: string;
}
