import { useState } from 'react';

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { useWeb5 } from '@/lib/web5/web5-provider';
import { LogInIcon } from 'lucide-react';

/**
 * The Web5 signin button pops up a dialog that allow the user
 * to select between login with the in-app agent or using an
 * external web5 agent app (to be implemented).
 */
export const AgentSigninButton = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <LogInIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
            <span className="hidden md:block">Sign in</span>
          </Button>
        </DialogTrigger>
        <AgentSigninDialogContent />
      </Dialog>
    </>
  );
};

const AgentSigninDialogContent = () => {
  const { connect, error } = useWeb5();
  const [isLoadingWallet, setIsLoadingWallet] = useState(false);
  const [isLoadingInAppAgent, setIsLoadingInAppAgent] = useState(false);

  const handleInAppSignin = async () => {
    setIsLoadingInAppAgent(true);
    try {
      await connect('In-App');
    } finally {
      setIsLoadingInAppAgent(false);
    }
  };

  const handleExternalAgentSignin = async () => {
    setIsLoadingWallet(true);
    try {
      await connect('Wallet-TBD', 'external');
    } finally {
      setIsLoadingWallet(false);
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Signin with your Web5 Agent</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col space-y-4 justify-center items-center">
        <Button onClick={handleExternalAgentSignin} isLoading={isLoadingWallet}>
          Connect with My Wallet
        </Button>
        <Button
          onClick={handleInAppSignin}
          isLoading={isLoadingInAppAgent}
          variant="secondary"
        >
          Use Browser In-App Agent
        </Button>
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </DialogContent>
  );
};
