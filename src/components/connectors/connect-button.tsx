import clsx from 'clsx';

import { Button } from '@/components/ui';
import { ConnectorType } from '@/lib/connectors/interfaces';
import { CONNECTORS_AESTHETICS } from './constants';

interface ConnectButtonProps {
  type: ConnectorType;
  isConnected?: boolean;
  comingSoon?: boolean;
  onConnectClick?: () => void;
  onDisconnectClick?: () => void;
}

export const ConnectButton = ({
  type,
  isConnected,
  comingSoon,
  onConnectClick,
  onDisconnectClick,
}: ConnectButtonProps) => {
  const connector = CONNECTORS_AESTHETICS[type];

  return (
    <div className="flex flex-col items-center">
      <connector.icon
        className={clsx(
          'w-40 h-40 mb-4 text-center',
          isConnected
            ? connector.connectorColor
            : 'text-gray-200 dark:text-gray-900'
        )}
      />
      {isConnected ? (
        <Button variant="secondary" onClick={onDisconnectClick}>
          Disconnect {connector.label}
        </Button>
      ) : (
        <Button onClick={onConnectClick} disabled={comingSoon}>
          {comingSoon
            ? `${connector.label} is coming soon...`
            : `Connect to ${connector.label}`}
        </Button>
      )}
    </div>
  );
};
