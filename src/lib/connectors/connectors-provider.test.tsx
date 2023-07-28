import { render, fireEvent } from '@testing-library/react';
import { ConnectorsProvider, useConnectors } from './connectors-provider';
import {
  SPOTIFY_CONNECTOR_TOKEN_KEY,
  SpotifyConnector,
} from './spotify-connector';
import { vi } from 'vitest';
import { mockWindowLocation } from '@/tests/tests-helpers';

const DisplayConnector = () => {
  const { spotifyConnector } = useConnectors();

  return (
    <p data-testid="spotify-connector">
      {(spotifyConnector as SpotifyConnector)?.authToken || ''}
    </p>
  );
};

const Button = () => {
  const { spotifyConnect, spotifyDisconnect, spotifyConnector } =
    useConnectors();
  return (
    <button
      data-testid="connect-button"
      type="button"
      onClick={() =>
        spotifyConnector ? spotifyDisconnect() : spotifyConnect()
      }
    >
      Toggle Web5 Connect
    </button>
  );
};

const App = () => {
  return (
    <ConnectorsProvider>
      <DisplayConnector />
      <Button />
    </ConnectorsProvider>
  );
};

describe('ConnectorsProvider for Spotify', () => {
  it('defaults to not having the spotify connector connected', async () => {
    const { findByTestId } = render(<App />);
    const agent = await findByTestId(/spotify-connector/);
    expect(agent.textContent).toBe('');
  });

  it('connects to spotify', async () => {
    const { mockWindowLocationHref } = mockWindowLocation();

    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId('connect-button'));

    // Auth spotify is called which will change document location
    expect(mockWindowLocationHref).toHaveBeenCalledWith(
      expect.stringContaining(import.meta.env.VITE_SPOTIFY_AUTH_ENDPOINT)
    );
  });

  it('persists token and stay connected when spotify oauth callback address is called', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

    const fakeAccessCode = 'someFakeCode';
    Object.defineProperty(window, 'location', {
      get() {
        return {
          pathname: '/connected-apps/spotify',
          hash: `#access_token=${fakeAccessCode}`,
        };
      },
    });

    const { findByTestId } = render(<App />);

    const agent = await findByTestId(/spotify-connector/);
    expect(agent.textContent).toBe(fakeAccessCode);
    expect(setItemSpy).toHaveBeenCalledWith(
      SPOTIFY_CONNECTOR_TOKEN_KEY,
      fakeAccessCode
    );
  });
});
