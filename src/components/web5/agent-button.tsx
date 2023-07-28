import { useWeb5 } from '@/lib/web5/web5-provider';

import { AgentLoggedInButton } from './agent-logged-in-button';
import { AgentSigninButton } from './agent-signin-button';

/**
 * Displays the Web5 agent signin or signout button, depending on the current session.
 */
export const AgentButton = () => {
  const { agent, disconnect } = useWeb5();

  return agent ? (
    <AgentLoggedInButton agent={agent} disconnect={disconnect} />
  ) : (
    <AgentSigninButton />
  );
};
