import { Counter } from '@/components/misc/counter';
import { Playlists } from '@/components/playlists/playlists';
import { TypographyH2 } from '@/components/ui';
import { Web5AuthenticationGuard } from '@/lib/web5/web5-provider';

export const IndexPage = () => {
  return (
    <>
      <TypographyH2>Playlists</TypographyH2>
      <Web5AuthenticationGuard>
        <Playlists />
      </Web5AuthenticationGuard>
      <div className="m-10">
        <Counter />
      </div>
    </>
  );
};
