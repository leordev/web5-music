export interface Connector {
  getPlaylists: () => Promise<any[]>;
  disconnect: () => Promise<void>;
}
