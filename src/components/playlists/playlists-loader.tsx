import { Skeleton } from '@/components/ui';

export const PlaylistsLoader = () => {
  return (
    <div className="space-y-10 my-4" data-testid="playlists-loader">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[450px]" />
        <Skeleton className="h-4 w-[450px]" />
        <Skeleton className="h-4 w-[380px]" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[450px]" />
        <Skeleton className="h-4 w-[450px]" />
        <Skeleton className="h-4 w-[380px]" />
      </div>
    </div>
  );
};
