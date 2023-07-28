import { describe, it, expect } from 'vitest';

import { getConnectedApps } from './helpers';

describe('Get Connected Apps', async () => {
  it('Should retrieve all connected apps', () => {
    const externalAppsIds = {
      spotify: 'id1',
      tidal: 'id2',
      youtube: 'id3',
      pandora: 'id4',
      appleItunes: 'id5',
      amazonMusic: 'id6',
    };

    const connectedApps = getConnectedApps(externalAppsIds);

    expect(connectedApps).toContain('spotify');
    expect(connectedApps).toContain('tidal');
    expect(connectedApps).toContain('youtube');
    expect(connectedApps).toContain('pandora');
    expect(connectedApps).toContain('appleItunes');
    expect(connectedApps).toContain('amazonMusic');
  });

  it('Should retrieve only a single connected app', () => {
    const externalAppsIds = {
      tidal: 'idx',
    };

    const connectedApps = getConnectedApps(externalAppsIds);

    expect(connectedApps).toStrictEqual(['tidal']);
  });

  it('Should retrieve only a few connected apps', () => {
    const externalAppsIds = {
      tidal: 'idx',
      amazonMusic: 'idx',
    };

    const connectedApps = getConnectedApps(externalAppsIds);

    expect(connectedApps).toStrictEqual(['tidal', 'amazonMusic']);
  });

  it('Can retrieve an empty array for no apps ids', () => {
    const connectedApps = getConnectedApps({});

    expect(connectedApps).toStrictEqual([]);
  });
});
