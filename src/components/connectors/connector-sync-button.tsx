import React from 'react';
import { Button, ButtonProps, StatusCircle } from '../ui';
import { ConnectorType } from '@/lib/connectors/interfaces';
import { CONNECTORS_AESTHETICS } from './constants';

export type ConnectorSyncStatus = 'offline' | 'synced' | 'unsynced';

interface ConnectorSyncButtonProps {
  status: ConnectorSyncStatus;
  connector: ConnectorType;
}
export const ConnectorSyncButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & ConnectorSyncButtonProps
>(({ status, connector, ...props }: ConnectorSyncButtonProps, ref) => {
  const connectorProps = CONNECTORS_AESTHETICS[connector];
  return (
    <Button
      size="sm"
      variant={'outline'}
      className="flex justify-between items-center"
      ref={ref}
      {...props}
      disabled={status === 'offline'}
    >
      <div>
        <connectorProps.icon className="mr-2 w-4 h-4 inline-block" />
        {connectorProps.label}
      </div>
      <StatusCircle
        size="sm"
        status={
          status === 'offline'
            ? 'danger'
            : status === 'synced'
            ? 'success'
            : 'warn'
        }
      />
    </Button>
  );
});
ConnectorSyncButton.displayName = 'ConnectorSyncButton';
