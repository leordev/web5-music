import {
  SiAmazon,
  SiItunes,
  SiPandora,
  SiSpotify,
  SiTidal,
  SiYoutube,
} from 'react-icons/si';
import { IconType } from 'react-icons';

import { ConnectorType } from '@/lib/connectors/interfaces';

export interface ConnectorAestheticsProps {
  icon: IconType;
  connectorColor: string;
  label: string;
}

export const CONNECTORS_AESTHETICS: {
  [Key in ConnectorType]: ConnectorAestheticsProps;
} = {
  spotify: {
    icon: SiSpotify,
    connectorColor: 'text-green-500',
    label: 'Spotify',
  },
  youtube: {
    icon: SiYoutube,
    connectorColor: 'text-red-500',
    label: 'Youtube',
  },
  tidal: {
    icon: SiTidal,
    connectorColor: 'text-gray-950 dark:text-white',
    label: 'Tidal',
  },
  pandora: {
    icon: SiPandora,
    connectorColor: 'text-pink-600',
    label: 'Pandora',
  },
  amazonMusic: {
    icon: SiAmazon,
    connectorColor: 'text-indigo-500',
    label: 'Amazon Music',
  },
  appleItunes: {
    icon: SiItunes,
    connectorColor: 'text-gray-700 dark:text-white',
    label: 'Apple iTunes',
  },
};
