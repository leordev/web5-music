import { Button } from '@/components/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Agent } from '@/lib/web5-provider';
import { useToast } from '@/components/ui/use-toast';

import { IdCardIcon, CopyIcon } from '@radix-ui/react-icons';

interface AgentLoggedInButtonProps {
  agent: Agent;
  disconnect: () => unknown;
}

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
          {agent.label}
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
