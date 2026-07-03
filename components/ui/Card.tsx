import React from 'react';
import { cn } from './Button';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[8px] border border-[var(--border)] bg-[var(--bg-card)] p-7',
        'transition-all duration-300 ease-[var(--ease)]',
        'hover:-translate-y-1 hover:border-[var(--border-hover)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
