export interface Playlist {
  id?: string;
  name: string;
  image?: string;
  externalAppsIds: ExternalAppsIds;
  songs: Song[];
}

export interface Song {
  name: string;
  durationMs: number;
  externalIds: ExternalIds;
  externalAppsIds: ExternalAppsIds;
  album: Album;
  artists: Artist[];
}

export interface Artist {
  name: string;
  image?: string;
  externalAppsIds: ExternalAppsIds;
}

export interface Album {
  name: string;
  releaseDate: string;
  releaseDatePrecision: 'year' | 'month' | 'day';
  externalIds?: ExternalIds;
  externalAppsIds: ExternalAppsIds;
}

export interface SongWithAudioSrc extends Song {
  audioSrc: string;
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
