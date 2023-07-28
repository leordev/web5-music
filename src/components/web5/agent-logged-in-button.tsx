import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  useToast,
} from '@/components/ui';
import { Agent } from '@/lib/web5/web5-provider';

import { IdCardIcon, CopyIcon } from '@radix-ui/react-icons';

interface AgentLoggedInButtonProps {
  agent: Agent;
  disconnect: () => unknown;
}

/**
 * Displays a Web5 Agent logged in button which is a dropdown menu
 * which contains the information about the logged in agent, such
 * as the DID data and the option to logout/switch agents.
 */
export const AgentLoggedInButton = ({
  agent,
  disconnect,
}: AgentLoggedInButtonProps) => {
  const { toast } = useToast();

  const copyDid = () => {
    navigator.clipboard.writeText(agent.did);
    toast({ title: 'DID copied to clipboard!' });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <IdCardIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
          <span className="hidden md:block">{agent.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>DID Information</DropdownMenuLabel>
        <DropdownMenuItem onClick={copyDid} className="text-sm text-gray-400">
          {agent.did.substring(0, 24)}... <CopyIcon />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={disconnect}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
