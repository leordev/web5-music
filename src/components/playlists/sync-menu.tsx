import { DownloadIcon, UploadIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { PlaylistHydrated } from '@/lib/web5/interfaces';
import { ConnectorType } from '@/lib/connectors/interfaces';
import { ConnectorSyncButton } from '@/components/connectors/connector-sync-button';

interface SyncMenuProps {
  playlist: PlaylistHydrated;
  onSyncClick: (
    updatedPlaylist: PlaylistHydrated,
    appToSync?: ConnectorType
  ) => Promise<void>;
  connector: ConnectorType;
  connectedAppPlaylist?: PlaylistHydrated;
}

export const SyncMenu = ({
  playlist,
  onSyncClick,
  connector,
  connectedAppPlaylist,
}: SyncMenuProps) => {
  const isOnline = Boolean(connectedAppPlaylist);
  const isSynced =
    isOnline &&
    JSON.stringify(playlist.songs) ===
      JSON.stringify(connectedAppPlaylist!.songs);
  const status = isSynced ? 'synced' : isOnline ? 'unsynced' : 'offline';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ConnectorSyncButton connector={connector} status={status} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {status === 'synced' ? (
          <SyncedDisplayMenu />
        ) : (
          status === 'unsynced' && (
            <SyncingActionsMenu
              onSyncClick={onSyncClick}
              connector={connector}
              connectedAppPlaylist={connectedAppPlaylist!}
            />
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const SyncedDisplayMenu = () => (
  <DropdownMenuItem onClick={() => undefined} className="text-muted-foreground">
    Playlist is synced with Web5
  </DropdownMenuItem>
);

interface SyncingActionsMenuProps {
  onSyncClick: (
    updatedPlaylist: PlaylistHydrated,
    appToSync?: ConnectorType
  ) => Promise<void>;
  connector: ConnectorType;
  connectedAppPlaylist: PlaylistHydrated;
}
const SyncingActionsMenu = ({
  onSyncClick,
  connectedAppPlaylist,
  connector,
}: SyncingActionsMenuProps) => (
  <>
    <DropdownMenuItem onClick={() => onSyncClick(connectedAppPlaylist)}>
      <DownloadIcon className="mr-2 w-4 h-4" /> Sync from App to Web5
    </DropdownMenuItem>
    <DropdownMenuItem
      onClick={() => onSyncClick(connectedAppPlaylist, connector)}
    >
      <UploadIcon className="mr-2 w-4 h-4" />
      Sync from Web5 to App
    </DropdownMenuItem>
  </>
);
