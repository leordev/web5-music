import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { Playlists } from './playlists';
import { EXPECTED_WEB5_PARSED_PLAYLISTS_DATA } from '@/tests/spotify.fixtures';
import * as useWeb5Playlists from '@/lib/web5/use-web5-playlists';

describe('Playlists', () => {
  it('should render the disconnected message', async () => {
    render(<Playlists />);

    const message = screen.getByText(/you are not connected to any apps/i);

    expect(message).toBeInTheDocument();
  });

  it('should render the playlist items', async () => {
    vi.spyOn(useWeb5Playlists, 'useWeb5Playlists').mockImplementation(
      () =>
        ({
          playlistsStore: {
            getPlaylists: async () => EXPECTED_WEB5_PARSED_PLAYLISTS_DATA,
          },
        } as any)
    );

    render(<Playlists />);

    const items = await screen.findAllByTestId('playlist-item');

    expect(items).toHaveLength(2);
  });
});
