import { describe, it, expect } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { routes } from './App';

describe('Renders main page correctly', async () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render the index page correctly', async () => {
    const router = createMemoryRouter(routes);
    await render(<RouterProvider router={router}></RouterProvider>);

    const h1 = await screen.findByText('Web5 Music');
    expect(h1).toBeInTheDocument();

    const p = await screen.findByText(
      /You need to sign in with your Web5 agent/i
    );
    expect(p).toBeInTheDocument();
  });

  it('Should navigate across pages properly', async () => {
    const router = createMemoryRouter(routes);
    await render(<RouterProvider router={router}></RouterProvider>);

    const user = userEvent.setup();

    await user.click(await screen.findByText(/about/i));
    expect(
      await screen.findByText(/Web5 empowers you to maintain your data/i)
    ).toBeInTheDocument();

    await user.click(await screen.findByText(/connected apps/i));
    expect(
      await screen.findByText(/list of apps that you can connect/i)
    ).toBeInTheDocument();
  });

  it('Handles an unknown url', async () => {
    const badRoute = '/some/bad/route';
    const router = createMemoryRouter(routes, { initialEntries: [badRoute] });
    await render(<RouterProvider router={router}></RouterProvider>);

    const text = await screen.findByText(/not found/i);

    expect(text).toBeInTheDocument();
  });
});
