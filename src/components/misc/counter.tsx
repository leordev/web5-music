import { useState } from 'react';

import { Button } from '@/components/ui';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const doCount = () => {
    setCount((count) => count + 1);
  };

  return <Button onClick={doCount}>count is {count}</Button>;
};
