import { TypographyH2, TypographyP } from '@/components/ui';
import { ConnectButton } from '@/components/connectors/connect-button';
import { Web5AuthenticationGuard } from '@/lib/web5/web5-provider';
import { useConnectors } from '@/lib/connectors/connectors-provider';

export const ConnectedAppsPage = () => {
  const { spotifyConnect, spotifyDisconnect, spotifyConnector } =
    useConnectors();

  return (
    <>
      <TypographyH2>Connected Apps</TypographyH2>
      <TypographyP>
        Here is a list of apps that you can connect to import and synchronize
        your songs.
      </TypographyP>
      <Web5AuthenticationGuard>
        <div className="grid w-full md:ml-0 md:grid-cols-3 gap-8 my-8">
          <ConnectButton
            type="spotify"
            isConnected={Boolean(spotifyConnector)}
            onConnectClick={spotifyConnect}
            onDisconnectClick={spotifyDisconnect}
          />
          <ConnectButton type="youtube" comingSoon />
          <ConnectButton type="tidal" comingSoon />
          <ConnectButton type="amazonMusic" comingSoon />
          <ConnectButton type="appleItunes" comingSoon />
          <ConnectButton type="pandora" comingSoon />
        </div>
      </Web5AuthenticationGuard>
    </>
  );
};
