import { PlaylistHydrated } from '@/lib/web5/interfaces';
import { Button } from '../ui';

interface PlaylistItemProps {
  playlist: PlaylistHydrated;
  isSynced?: boolean;
  onImportClick: () => Promise<void>;
  onRemoveClick: () => Promise<void>;
  onSyncClick: () => Promise<void>;
}

export const PlaylistItem = ({
  playlist,
  isSynced,
  onImportClick,
  onRemoveClick,
  onSyncClick,
}: PlaylistItemProps) => {
  return (
    <li className="my-4">
      <div className="flex justify-between">
        <div>
          {playlist.name} - Songs: {playlist.songs.length}
        </div>
        <div>
          {!playlist.id ? (
            <Button onClick={onImportClick}>Import to Web5</Button>
          ) : (
            <div>
              <Button variant={'secondary'} onClick={onRemoveClick}>
                Remove from Web5
              </Button>
              {!isSynced && <Button onClick={onSyncClick}>Sync to Web5</Button>}
            </div>
          )}
        </div>
        {playlist.id && (
          <div>
            {playlist.externalAppsIds.spotify ? (
              <div>{isSynced ? 'Synced' : 'Not Synced'}</div>
            ) : (
              'Import to Spotify'
            )}
          </div>
        )}
      </div>
      <div>
        <ul>
          <li>Songs items</li>
        </ul>
      </div>
    </li>
  );
};
