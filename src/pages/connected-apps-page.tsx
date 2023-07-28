import { TypographyH2, TypographyP } from '@/components/ui';
import { ConnectButton } from '@/components/connectors/connect-button';
import { Web5AuthenticationGuard } from '@/lib/web5-provider';
import { useConnectors } from '@/lib/connectors/connectors-provider';

export const ConnectedAppsPage = () => {
  const { spotifyConnect, spotifyDisconnect, spotifyConnector } = useConnectors();

  console.info(spotifyConnector);

  return (
    <>
      <TypographyH2>Connected Apps</TypographyH2>
      <TypographyP>Here is a list of apps that you can connect to import and synchronize your songs.</TypographyP>
      <Web5AuthenticationGuard>
        <div className="grid grid-cols-3 gap-8 justify-between min-w-max my-8">
          <div className="flex flex-col items-center">
            <ConnectButton
              type="spotify"
              isConnected={Boolean(spotifyConnector)}
              onConnectClick={spotifyConnect}
              onDisconnectClick={spotifyDisconnect}
            />
          </div>
          <div className="flex flex-col items-center">
            <ConnectButton type="youtube" comingSoon />
          </div>
          <div className="flex flex-col items-center">
            <ConnectButton type="tidal" comingSoon />
          </div>
          <div className="flex flex-col items-center">
            <ConnectButton type="amazon-music" comingSoon />
          </div>
          <div className="flex flex-col items-center">
            <ConnectButton type="apple-itunes" comingSoon />
          </div>
          <div className="flex flex-col items-center">
            <ConnectButton type="pandora" comingSoon />
          </div>
        </div>
      </Web5AuthenticationGuard>
    </>
  );
};
