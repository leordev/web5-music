import { Link, useLocation } from 'react-router-dom';

import { ThemeToggler } from '@/components/misc/theme-toggler';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { AgentButton } from '../web5/agent-button';

const LINKS = [
  {
    label: 'Playlists',
    href: '/',
  },
  {
    label: 'Connected Apps',
    href: '/connected-apps',
  },
  {
    label: 'About',
    href: '/about',
  },
];

export const Header = () => {
  const location = useLocation();

  return (
    <header className="p-10">
      <nav className="z-50 text-sm">
        <ul className="flex items-center">
          <li>
            <Link to="/" className="flex items-center">
              <span className="sr-only">Web5 Music Home</span>
              <img src="/vite.svg" className="h-10 w-auto mr-4" />
              <h1 className="text-3xl font-bold text-indigo-500">Web5 Music</h1>
            </Link>
          </li>
          <li className="ml-12 hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {LINKS.map((link) => (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink
                      href={link.href}
                      className={navigationMenuTriggerStyle()}
                      active={link.href === location.pathname}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li className="ml-auto md:block">
            <AgentButton />
          </li>
          <li className="ml-6 hidden md:block">
            <ThemeToggler />
          </li>
          {/* TODO: Mobile responsiveness?
        <li className="ml-5 -mr-1 md:hidden">
          <MobileNavigation />
        </li> */}
        </ul>
      </nav>
    </header>
  );
};
