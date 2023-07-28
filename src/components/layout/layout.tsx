import { Outlet } from 'react-router-dom';

import { ThemeProvider } from '@/components/theme-provider';
import { Container } from '@/components/ui/container';
import { Header } from './header';
import { Footer } from './footer';

export const Layout = () => (
  <div className="h-full scroll-smooth antialiased">
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </ThemeProvider>
  </div>
);
