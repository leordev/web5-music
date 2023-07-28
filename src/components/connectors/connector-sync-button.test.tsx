import { render, screen } from '@testing-library/react';

import { ConnectorSyncButton } from './connector-sync-button';

describe('ConnectorSyncButton', () => {
  it('renders button with connector label properly', async () => {
    render(<ConnectorSyncButton status="synced" connector="tidal" />);

    const button = screen.getByText(/tidal/i);

    expect(button).toBeInTheDocument();
  });

  it('renders offline as disabled', async () => {
    render(<ConnectorSyncButton status="offline" connector="tidal" />);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});
