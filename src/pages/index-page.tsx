import { Counter } from '@/components/misc/counter';
import { TypographyH2, TypographyP } from '@/components/ui';
import { useConnectors } from '@/lib/connectors/connectors-provider';
import { Web5AuthenticationGuard } from '@/lib/web5-provider';

export const IndexPage = () => {
  const { spotifyConnector } = useConnectors();

  return (
    <>
      <TypographyH2>Playlists</TypographyH2>
      <TypographyP>
        Here is all your imported and synced playlists from your connected apps.
      </TypographyP>
      <Web5AuthenticationGuard>
        {spotifyConnector ? (
          <TypographyP>Playlists go here!</TypographyP>
        ) : (
          <TypographyP>
            You are not connected to any apps and you don&apos;t have any
            playlists in your DWN. Please go to the <a>Connected Apps</a> page
            to connect to an app and be able to sync your playlists!
          </TypographyP>
        )}
      </Web5AuthenticationGuard>
      <div className="m-10">
        <Counter />
      </div>
    </>
  );
};
