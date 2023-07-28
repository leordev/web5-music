import clsx from 'clsx';

import { getConnectedApps } from '@/lib/web5/helpers';
import { Playlist } from '@/lib/web5/interfaces';
import { CONNECTORS_AESTHETICS } from '@/components/connectors/constants';
import { Button } from '@/components/ui';

interface NewPlaylistMenuProps {
  playlist: Playlist;
  onImportClick: () => Promise<void>;
}

export const NewPlaylistMenu = ({
  playlist,
  onImportClick,
}: NewPlaylistMenuProps) => {
  const connector = getConnectedApps(playlist.externalAppsIds)[0];

  if (!connector) {
    return (
      <div className="text-red">New playlist with an Unknown Connector</div>
    );
  }

  const connectorProps = CONNECTORS_AESTHETICS[connector];

  return (
    <div className="flex flex-col">
      <div
        className={clsx(
          'text-sm mb-2 text-right font-semibold',
          connectorProps.connectorColor
        )}
      >
        Found on <connectorProps.icon className="inline-block" />{' '}
        {connectorProps.label}
      </div>
      <Button onClick={onImportClick}>Import to Web5</Button>
    </div>
  );
};
