import { TypographyH2, TypographyP } from '@/components/ui';

export const AboutPage = () => {
  return (
    <>
      <TypographyH2>About</TypographyH2>
      <TypographyP>
        You should own your data, not companies. Web5 empowers you to maintain
        your data in your DWNs (Decentralized Web Nodes).
      </TypographyP>
      <TypographyP>
        With <span className="text-indigo-500">Web5 Music</span> you can import
        your playlists from the apps that you already use in your daily basis.
      </TypographyP>
      <TypographyP>
        Your musics and playlists data will be written to your DWN and you can
        synchronize it to other music apps. This way if you don&apos;t want to keep
        your subscription, or even worse, you are banned from that platform, you
        can still carry over your songs to other platform because{' '}
        <span className="text-red-500 font-semibold">YOU OWN YOUR DATA</span>.
      </TypographyP>
    </>
  );
};
