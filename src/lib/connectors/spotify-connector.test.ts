import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';

import {
  SPOTIFY_CONNECTOR_TOKEN_KEY,
  SpotifyConnector,
} from './spotify-connector';
import {
  EXPECTED_WEB5_PARSED_PLAYLISTS_DATA,
  RESPONSE_CURRENT_USER_PLAYLISTS,
  RESPONSE_PLAYLIST_COOLBEANS,
  RESPONSE_PLAYLIST_POPMIX,
} from '../../tests/spotify.fixtures';
import { mockWindowLocation } from '@/tests/tests-helpers';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const fakeAuthToken = 'abcd1234';

describe('SpotifyConnector', () => {
  it('constructs with the passed authToken', () => {
    const connector = new SpotifyConnector(fakeAuthToken);
    expect(connector.authToken).toBe(fakeAuthToken);
  });

  it('disconnects cleanup the storage', () => {
    mockWindowLocation();
    const removeItemSpy = vi.spyOn(Storage.prototype, 'removeItem');

    const connector = new SpotifyConnector(fakeAuthToken);
    connector.disconnect();

    expect(removeItemSpy).toHaveBeenCalledWith(SPOTIFY_CONNECTOR_TOKEN_KEY);
  });

  it('gets the playlists and parses all the data to the expected format', async () => {
    fetchMocker.mockResponses(
      [JSON.stringify(RESPONSE_CURRENT_USER_PLAYLISTS), { status: 200 }],
      [JSON.stringify(RESPONSE_PLAYLIST_POPMIX), { status: 200 }],
      [JSON.stringify(RESPONSE_PLAYLIST_COOLBEANS), { status: 200 }]
    );

    const connector = new SpotifyConnector(fakeAuthToken);
    const playlists = await connector.getPlaylists();

    expect(playlists).toStrictEqual(EXPECTED_WEB5_PARSED_PLAYLISTS_DATA);
  });
});
