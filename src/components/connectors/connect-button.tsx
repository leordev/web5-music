import clsx from 'clsx';
import {
  SiAmazon,
  SiItunes,
  SiPandora,
  SiSpotify,
  SiTidal,
  SiYoutube,
} from 'react-icons/si';
import { IconType } from 'react-icons';

import { Button } from '@/components/ui';
import { ConnectorType } from '@/lib/connectors/interfaces';

interface ConnectorIconProps {
  icon: IconType;
  connectedIconColor: string;
  label: string;
}

const CONNECTORS: { [Key in ConnectorType]: ConnectorIconProps } = {
  spotify: {
    icon: SiSpotify,
    connectedIconColor: 'text-green-500',
    label: 'Spotify',
  },
  youtube: {
    icon: SiYoutube,
    connectedIconColor: 'text-red-500',
    label: 'Youtube',
  },
  tidal: {
    icon: SiTidal,
    connectedIconColor: 'text-gray-950 dark:text-white',
    label: 'Tidal',
  },
  pandora: {
    icon: SiPandora,
    connectedIconColor: 'text-pink-600',
    label: 'Pandora',
  },
  amazonMusic: {
    icon: SiAmazon,
    connectedIconColor: 'text-indigo-500',
    label: 'Amazon Music',
  },
  appleItunes: {
    icon: SiItunes,
    connectedIconColor: 'text-gray-700 dark:text-white',
    label: 'Apple iTunes',
  },
};

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
  const connector = CONNECTORS[type];

  return (
    <div className="flex flex-col items-center">
      <connector.icon
        className={clsx(
          'w-40 h-40 mb-4 text-center',
          isConnected
            ? connector.connectedIconColor
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
