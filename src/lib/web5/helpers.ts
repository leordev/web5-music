import { ConnectorType } from '../connectors/interfaces';
import { ExternalAppsIds } from './interfaces';

export const getConnectedApps = (
  externalAppsIds: ExternalAppsIds
): ConnectorType[] => {
  const connectedApps: ConnectorType[] = [];

  if (externalAppsIds.spotify) {
    connectedApps.push('spotify');
  }

  if (externalAppsIds.tidal) {
    connectedApps.push('tidal');
  }

  if (externalAppsIds.youtube) {
    connectedApps.push('youtube');
  }

  if (externalAppsIds.pandora) {
    connectedApps.push('pandora');
  }

  if (externalAppsIds.appleItunes) {
    connectedApps.push('appleItunes');
  }

  if (externalAppsIds.amazonMusic) {
    connectedApps.push('amazonMusic');
  }

  return connectedApps;
};
