import { render } from '@testing-library/react';
import { Web5Provider, useWeb5 } from './web5-provider';

const DisplayAgent = () => {
  const { agent } = useWeb5();
  return <p data-testid="agent">{agent?.label || 'not-connected'}</p>;
};

const Button = () => {
  const { agent, connect, disconnect } = useWeb5();
  return (
    <button
      data-testid="connect-button"
      type="button"
      onClick={() => (agent ? disconnect() : connect('test-agent', 'in-app'))}
    >
      Toggle Web5 Connect
    </button>
  );
};

const App = () => {
  return (
    <Web5Provider>
      <DisplayAgent />
      <Button />
    </Web5Provider>
  );
};

describe('Web5Provider', () => {
  it('defaults to not being connected', async () => {
    const { findByTestId } = render(<App />);
    const agent = await findByTestId(/agent/);
    expect(agent.textContent).toBe('not-connected');
  });

  // TODO: figure out a mocking for Web5
  //   it('connects to agent', async () => {
  //     const { getByTestId } = render(<App />);

  //     fireEvent.click(getByTestId('connect-button'));

  //     await waitFor(() => {
  //       const agent = getByTestId('agent');
  //       expect(agent.textContent).toBe('test-agent');
  //     });
  //   });
});
