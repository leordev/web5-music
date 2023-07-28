import { cn } from '@/lib/css-helpers';
import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  );
};
