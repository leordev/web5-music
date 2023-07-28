import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Web5 } from '@tbd54566975/web5';
import { wait } from '../timers';

type AgentType = 'in-app' | 'external';

export interface Agent {
  label: string;
  agentType: AgentType;
  did: string;
}

const CURRENT_AGENT_KEY = 'current-agent';

interface Web5ContextType {
  web5?: Web5;
  agent?: Agent;
  loading: boolean;
  error?: string;
  connect: (label: string, agentType?: AgentType) => void;
  disconnect: () => void;
}

export const Web5Context = createContext<Web5ContextType>(
  {} as Web5ContextType
);

export const Web5Provider = ({ children }: PropsWithChildren) => {
  const [agent, setAgent] = useState<Agent>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [web5, setWeb5] = useState<Web5 | undefined>();
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  // Load current stored session
  useEffect(() => {
    const loadCurrentAgent = async () => {
      const currentAgentRawString = localStorage.getItem(CURRENT_AGENT_KEY);
      if (currentAgentRawString) {
        const currentAgent = JSON.parse(currentAgentRawString) as Agent;
        if (currentAgent.agentType === 'in-app') {
          const { web5, did } = await Web5.connect();
          if (did !== currentAgent.did) {
            throw new Error(
              `In-App agent DID mismatch!\nNew: ${did}\nOld: ${currentAgent.did}`
            );
          }
          setWeb5(web5);
          setAgent(currentAgent);
        } else {
          console.error(currentAgent);
          throw new Error('Invalid Current Agent object');
        }
      }
      setInitialLoading(false);
    };

    loadCurrentAgent()
      .catch((error) => {
        const errorMessage = `Unable to load current specified agent type`;
        console.error(errorMessage, error);
        setError(errorMessage);
      })
      .finally(() => setInitialLoading(false));
  }, []);

  const handleInAppConnection = useCallback(async (label: string) => {
    const { web5, did } = await Web5.connect();
    const newAgent = { label, agentType: 'in-app' as AgentType, did };
    setWeb5(web5);
    setAgent(newAgent);
    localStorage.setItem(CURRENT_AGENT_KEY, JSON.stringify(newAgent));
  }, []);

  const connect = useCallback(
    async (label: string, agentType?: AgentType) => {
      setError(undefined);
      setLoading(true);

      try {
        if (agentType === 'external') {
          await wait(1500);
          setError('External Agents are not supported yet.');
        } else {
          await handleInAppConnection(label);
        }
      } catch (error) {
        const errorMessage = 'Error while connecting to web5';
        console.error(errorMessage, error);
        setError(errorMessage);
      }

      setLoading(false);
    },
    [handleInAppConnection]
  );

  const disconnect = () => {
    setAgent(undefined);
    setWeb5(undefined);
    localStorage.removeItem(CURRENT_AGENT_KEY);
  };

  const memoedValue = useMemo(
    () => ({
      web5,
      agent,
      loading,
      error,
      connect,
      disconnect,
    }),
    [agent, loading, error, web5, connect]
  );

  return (
    <Web5Context.Provider value={memoedValue}>
      {!initialLoading && children}
    </Web5Context.Provider>
  );
};

export const useWeb5 = () => useContext(Web5Context);

export const Web5AuthenticationGuard = ({ children }: PropsWithChildren) => {
  const { agent } = useWeb5();

  if (agent) {
    return <>{children}</>;
  } else {
    return (
      <p className="text-red-500 italic">
        You need to sign in with your Web5 agent to be able to see this content.
      </p>
    );
  }
};
