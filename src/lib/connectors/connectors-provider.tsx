import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { authSpotify, loadSpotifyConnector } from './spotify-connector';
import { Connector } from './interfaces';

interface ConnectorsContextType {
  spotifyConnector?: Connector;
  spotifyConnect: () => Promise<void>;
  spotifyDisconnect: () => Promise<void>;

  // Future connectors integrations go here ...
}

export const ConnectorsContext = createContext<ConnectorsContextType>(
  {} as ConnectorsContextType
);

export const ConnectorsProvider = ({ children }: PropsWithChildren) => {
  const [spotifyConnector, setSpotifyConnector] = useState<Connector>();
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  // Load current stored connectors
  useEffect(() => {
    const loadCurrentConnectors = async () => {
      // Initialize Spotify Connector
      const spotifyConnector = await loadSpotifyConnector();
      if (spotifyConnector) {
        setSpotifyConnector(spotifyConnector);
      }

      // Initialize future connectors here ...

      setInitialLoading(false);
    };

    loadCurrentConnectors();
  }, []);

  const spotifyConnect = async () => authSpotify();

  const spotifyDisconnect = useCallback(async () => {
    if (spotifyConnector) {
      spotifyConnector.disconnect();
    }
    setSpotifyConnector(undefined);
  }, [spotifyConnector]);

  const memoedValue = useMemo(
    () => ({ spotifyConnect, spotifyDisconnect, spotifyConnector }),
    [spotifyConnector, spotifyDisconnect]
  );

  return (
    <ConnectorsContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </ConnectorsContext.Provider>
  );
};

export const useConnectors = () => useContext(ConnectorsContext);
