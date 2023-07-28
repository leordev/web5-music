import { Connector } from './interfaces';

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const AUTH_ENDPOINT = import.meta.env.VITE_SPOTIFY_AUTH_ENDPOINT;
const RESPONSE_TYPE = import.meta.env.VITE_SPOTIFY_RESPONSE_TYPE;

const SPOTIFY_CONNECTOR_TOKEN_KEY = 'spotify-connector-token';

class SpotifyConnector implements Connector {
  constructor(public authToken: string) {}

  getPlaylists = async () => {
    console.info('calling playlists', this);
    return [];
  };

  disconnect = async () => {
    window.localStorage.removeItem(SPOTIFY_CONNECTOR_TOKEN_KEY);
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
