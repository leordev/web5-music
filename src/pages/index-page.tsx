import { Counter } from '@/components/misc/counter';

export const IndexPage = () => {
  return (
    <>
      <h1>Playlists</h1>
      <div>Menu to add new playlist</div>
      <div>Display the playlists</div>
      <div className="m-10">
        <Counter />
      </div>
    </>
  );
};
