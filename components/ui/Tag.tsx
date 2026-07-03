import React from 'react';
import { cn } from './Button';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[3px] border border-[var(--border)] bg-[var(--bg-3)] px-[0.625rem] py-[0.25rem]',
        'font-mono text-xs uppercase tracking-[0.08em] text-[var(--text-2)]',
        'transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
