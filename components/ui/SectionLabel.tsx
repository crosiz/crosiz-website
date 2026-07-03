import React from 'react';
import { cn } from './Button';

interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SectionLabel({ className, children, ...props }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)] mb-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
