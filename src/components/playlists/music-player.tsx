import { Connector } from '@/lib/connectors/interfaces';
import { Playlist, Song, SongWithAudioSrc } from '@/lib/web5/interfaces';
import { useEffect, useState } from 'react';

interface MusicPlayerProps {
  web5Playlist: Playlist;
  connector?: Connector;
}

export const MusicPlayer = ({ web5Playlist, connector }: MusicPlayerProps) => {
  const [playlistSongs, setPlaylistSongs] = useState<SongWithAudioSrc[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadPlaylistAudios = async () => {
      if (!connector) {
        setPlaylistSongs([]);
        return;
      }

      setIsLoading(true);
      const audios = await connector.getPlaylistSongsWithAudio(web5Playlist);
      setPlaylistSongs(audios);
      setIsLoading(false);
    };

    loadPlaylistAudios();
  }, [connector, web5Playlist]);

  const findSongInPlayerPlaylist = (song: Song) => {
    return playlistSongs.find((s) =>
      s.externalIds.isrc
        ? // Compare using the International Standard Recording Code Standard if present
          s.externalIds.isrc === song.externalIds.isrc
        : // Otherwise compare with opaque names
          s.name === song.name &&
          s.album.name === song.album.name &&
          s.artists.map((a) => a.name).join(',') ===
            song.artists.map((a) => a.name).join(',')
    );
  };
  const hasConnector = Boolean(connector);

  return (
    <ul className="space-y-4">
      {web5Playlist.songs.map((song, index) => {
        const playerSong = findSongInPlayerPlaylist(song);
        return (
          <li
            key={`song-idx-${index}`}
            className="hover:bg-gray-100 dark:hover:bg-gray-900 p-4 rounded-sm"
          >
            <div className="md:flex justify-between items-center gap-4">
              <div className="text-2xl font-semibold w-8">{index + 1}</div>
              <div className="flex-1">
                <p>{song.name}</p>
                <p className="text-sm text-muted-foreground">
                  {song.artists.map((a) => a.name).join(', ')}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                {!hasConnector || isLoading ? (
                  ''
                ) : playerSong ? (
                  <PlayerControls song={playerSong} />
                ) : (
                  'Unsynced'
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

interface PlayerControlsProps {
  song: SongWithAudioSrc;
}
const PlayerControls = ({ song }: PlayerControlsProps) => {
  return <audio src={song.audioSrc} controls />;
};
