import { Album, Artist, Playlist, SongWithAudioSrc } from '../web5/interfaces';
import { Connector } from './interfaces';

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const AUTH_ENDPOINT = import.meta.env.VITE_SPOTIFY_AUTH_ENDPOINT;
const RESPONSE_TYPE = import.meta.env.VITE_SPOTIFY_RESPONSE_TYPE;

const SPOTIFY_CONNECTOR_TOKEN_KEY = 'spotify-connector-token';
const SPOTIFY_API_BASE_URL = 'https://api.spotify.com';

class SpotifyConnector implements Connector {
  constructor(public authToken: string) {}

  disconnect = async () => {
    window.localStorage.removeItem(SPOTIFY_CONNECTOR_TOKEN_KEY);

    // TODO: super ugly to refresh the entire page, we should handle Spotify refresh tokens if possible
    window.location.href = '/connected-apps';
  };

  getPlaylists = async () => {
    // TODO: handle playlists pagination
    const rawPlaylists = await this.apiFetch(`/v1/me/playlists`);

    const playlists = await Promise.all(
      rawPlaylists.items.map(({ id }: any) => this.loadPlaylistData(id))
    );

    const playlistsWithoutAudioSrc = playlists.map(
      this.removeAudioSrcFromPlaylistSongs
    );

    return playlistsWithoutAudioSrc;
  };

  searchSongs = async (searchKey: string) => {
    const params = new URLSearchParams({
      q: searchKey,
      type: 'track',
    });

    const data = await this.apiFetch(`/v1/search?${params}`);

    console.info({ data });

    return [];
  };

  updatePlaylist = async (playlist: Playlist) => {
    const id = playlist.externalAppsIds.spotify;

    if (id) {
      // update
    } else {
      // create new playlist
    }
  };

  getPlaylistSongsWithAudio = async (
    playlist: Playlist
  ): Promise<SongWithAudioSrc[]> => {
    const spotifyId = playlist.externalAppsIds.spotify;
    if (!spotifyId) {
      throw new Error(
        'Unable to locate Spotify id on External Apps Ids to load the Songs'
      );
    }

    const playlistWithAudioSrc = await this.loadPlaylistData(spotifyId);
    return playlistWithAudioSrc.songs;
  };

  loadPlaylistData = async (playlistId: string) => {
    const fullPlaylist = await this.apiFetch(`/v1/playlists/${playlistId}`);

    const name = fullPlaylist.name;
    const image = fullPlaylist.images?.[0]?.url;

    const { tracks } = fullPlaylist;

    // TODO: handle tracks pagination
    const songs = tracks.items.map(this.parseTrack);

    const playlist = {
      name,
      image,
      externalAppsIds: { spotify: playlistId },
      songs,
    };

    return playlist;
  };

  parseTrack = (playlistItem: any): SongWithAudioSrc => {
    const { track } = playlistItem;

    const name = track.name;
    const durationMs = track.duration_ms;
    const externalIds = track.external_ids;
    const songSpotifyId = track.id;

    const album = this.parseAlbum(track.album);
    const artists = track.artists.map(this.parseArtist);

    const song: SongWithAudioSrc = {
      name,
      durationMs,
      externalIds,
      externalAppsIds: { spotify: songSpotifyId },
      album,
      artists,
      audioSrc: track.preview_url,
    };

    return song;
  };

  parseAlbum = (album: any): Album => {
    const name = album.name;
    const externalIds = album.external_ids;
    const releaseDate = album.release_date;
    const releaseDatePrecision = album.release_date_precision;
    const externalAppsIds = { spotify: album.id };

    return {
      name,
      releaseDate,
      releaseDatePrecision,
      externalIds,
      externalAppsIds,
    };
  };

  parseArtist = (artist: any): Artist => {
    const name = artist.name;
    const image = artist.images?.[0]?.url;
    const externalAppsIds = { spotify: artist.id };

    return {
      name,
      image,
      externalAppsIds,
    };
  };

  removeAudioSrcFromPlaylistSongs = (
    playlist: Omit<Playlist, 'songs'> & { songs: SongWithAudioSrc[] }
  ) => {
    // Destructs audioSrc from song object
    const songs = playlist.songs.map(({ audioSrc, ...song }) => song);

    return { ...playlist, songs };
  };

  apiFetch = async (endpoint: string, requestOptions?: RequestInit) => {
    const url = SPOTIFY_API_BASE_URL + endpoint;

    const authHeaders = { Authorization: `Bearer ${this.authToken}` };
    const options = requestOptions || {};
    options.headers = { ...options.headers, ...authHeaders };

    const res = await fetch(url, options);
    if (res.status === 401) {
      // TODO: handle with a refresh token if possible
      this.disconnect();
    } else {
      return res.json();
    }
  };
}

export const authSpotify = () => {
  document.location.href =
    `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}` +
    `&redirect_uri=${REDIRECT_URI}` +
    `&response_type=${RESPONSE_TYPE}` +
    `&scope=${encodeURIComponent('playlist-read-private')}`;
};

export const loadSpotifyConnector = async () => {
  const { location } = window;
  console.info('load spotify connector ', { location });

  let token = '';

  // Handle OAuth callback initialization
  if (location.pathname === '/connected-apps/spotify' && location.hash) {
    const urlParams = new URLSearchParams(location.hash.substring(1));
    const accessToken = urlParams.get('access_token');
    if (accessToken) {
      token = accessToken;
      window.localStorage.setItem(SPOTIFY_CONNECTOR_TOKEN_KEY, token);
      window.location.hash = '';
    }
  } else {
    // Handle stored token on page refresh
    token = window.localStorage.getItem(SPOTIFY_CONNECTOR_TOKEN_KEY) || '';
  }

  if (token) {
    return new SpotifyConnector(token);
  }
};
