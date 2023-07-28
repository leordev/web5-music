import { Web5 } from '@tbd54566975/web5';
import { Playlist } from './interfaces';

const PLAYLISTS_SCHEMA = 'http://some-schema-registry.org/playlists';

/**
 * Web5 Playlists Store - Wrapper around the Web5 DWN Records, think of
 * it as a Data Repository. By having this abstraction we can ensure more
 * safety and DevX to avoid confusion when CRUDing the data.
 */
export class Web5PlaylistsStore {
  constructor(public web5: Web5) {}

  getPlaylists = async (): Promise<Playlist[]> => {
    const { records } = await this.web5.dwn.records.query({
      message: {
        filter: {
          schema: PLAYLISTS_SCHEMA,
        },
      },
    });

    if (!records) {
      throw new Error('Fail to load Web5 playlists records');
    }

    const playlists = [];

    for (const record of records) {
      const data = await record.data.json();
      const playlist = { ...data, id: record.id };
      playlists.push(playlist);
    }

    return playlists;
  };

  createPlaylist = async (playlist: Playlist) => {
    // Create the record in the DWN
    const { record } = await this.web5.dwn.records.create({
      data: playlist,
      message: {
        schema: PLAYLISTS_SCHEMA,
        dataFormat: 'application/json',
      },
    });

    if (!record) {
      throw new Error('Fail to create web5 playlist record');
    }

    await record.data.json();

    return { ...playlist, id: record.id };
  };

  updatePlaylist = async (playlist: Playlist) => {
    if (!playlist.id) {
      throw new Error('Invalid DWN Record id to be updated');
    }

    // Get record from the DWN
    const { record } = await this.web5.dwn.records.read({
      message: {
        recordId: playlist.id,
      },
    });

    // Update the record in the DWN
    await record.update({ data: playlist });
  };

  removePlaylist = async (id: string) => {
    await this.web5.dwn.records.delete({
      message: {
        recordId: id,
      },
    });
  };
}
