import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { ConnectButton } from './connect-button';

describe('ConnectButton', () => {
  it('should render a Connect button when disconnected', async () => {
    const user = userEvent.setup();
    const onConnectClick = vi.fn();

    render(<ConnectButton type="tidal" onConnectClick={onConnectClick} />);

    const button = screen.getByText(/connect to/i);
    await user.click(button);

    expect(onConnectClick).toBeCalledTimes(1);
  });

  it('should render a Disconnect button when connected', async () => {
    const user = userEvent.setup();
    const onDisconnectClick = vi.fn();

    render(
      <ConnectButton
        type="tidal"
        isConnected
        onDisconnectClick={onDisconnectClick}
      />
    );

    const button = screen.getByText(/disconnect tidal/i);
    await user.click(button);

    expect(onDisconnectClick).toBeCalledTimes(1);
  });
});
