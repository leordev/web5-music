import { useState } from 'react';
import { ChevronsUpDown } from 'lucide-react';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Collapsible,
  CollapsibleContent,
} from '@/components/ui';

import { Playlist } from '@/lib/web5/interfaces';
import { ConnectorType } from '@/lib/connectors/interfaces';
import { SyncMenu } from './sync-menu';
import { NewPlaylistMenu } from './new-playlist-menu';
import { MusicPlayer } from './music-player';
import { useConnectors } from '@/lib/connectors/connectors-provider';

interface PlaylistItemProps {
  playlist: Playlist;
  spotifyPlaylist?: Playlist;
  onImportClick: () => Promise<void>;
  onRemoveClick: () => Promise<void>;
  onSyncClick: (
    updatedPlaylist: Playlist,
    appToSync?: ConnectorType
  ) => Promise<void>;
}

export const PlaylistItem = (props: PlaylistItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { playlist } = props;

  // TODO: Ideally when other connected apps are implemented we should have a settings
  // where the user can select the default App to use for the Music player
  const { spotifyConnector: playerConnector } = useConnectors();

  const handlePlaylistToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card>
        <div className="flex justify-between items-center space-x-4 px-4">
          <PlaylistTogglerButton onClick={handlePlaylistToggle} />
          <div className="flex justify-start items-center flex-1">
            <PlaylistImage image={playlist.image} />
            <PlaylistHeader playlist={playlist} />
          </div>
          <PlaylistMenu {...props} />
        </div>
        <CardContent>
          <CollapsibleContent>
            <MusicPlayer web5Playlist={playlist} connector={playerConnector} />
          </CollapsibleContent>
        </CardContent>
      </Card>
    </Collapsible>
  );
};

const PlaylistMenu = ({
  playlist,
  spotifyPlaylist,
  onImportClick,
  onRemoveClick,
  onSyncClick,
}: PlaylistItemProps) => {
  return playlist.id ? (
    <div className="flex flex-col space-y-1">
      {playlist.externalAppsIds.spotify && (
        <SyncMenu
          playlist={playlist}
          onSyncClick={onSyncClick}
          connector="spotify"
          connectedAppPlaylist={spotifyPlaylist}
        />
      )}
      {/* TODO: Add future connectors sync menu buttons here */}

      <Button
        size="sm"
        variant="ghost"
        className="text-red-500"
        onClick={onRemoveClick}
      >
        Remove from Web5
      </Button>
    </div>
  ) : (
    <NewPlaylistMenu playlist={playlist} onImportClick={onImportClick} />
  );
};

const PlaylistTogglerButton = ({ onClick }: { onClick: () => void }) => (
  <Button variant="ghost" size="sm" className="w-9 p-0" onClick={onClick}>
    <ChevronsUpDown className="h-4 w-4" />
    <span className="sr-only">Toggle playlist songs</span>
  </Button>
);

const PlaylistImage = ({ image }: { image?: string }) =>
  image ? <img src={image} className="w-14 h-14" /> : <></>;

const PlaylistHeader = ({ playlist }: { playlist: Playlist }) => (
  <CardHeader>
    <CardTitle>{playlist.name}</CardTitle>
    <CardDescription>{playlist.songs.length} songs</CardDescription>
  </CardHeader>
);
