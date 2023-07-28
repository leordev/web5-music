import { useWeb5 } from '@/lib/web5-provider';

import { AgentLoggedInButton } from './agent-logged-in-button';
import { AgentSigninButton } from './agent-signin-button';

export const AgentButton = () => {
  const { agent, disconnect } = useWeb5();

  return agent ? (
    <AgentLoggedInButton agent={agent} disconnect={disconnect} />
  ) : (
    <AgentSigninButton />
  );
};
