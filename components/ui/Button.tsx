import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  size?: 'default' | 'small';
  children: React.ReactNode;
}

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function Button({ variant = 'primary', size = 'default', className, children, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-[4px] font-medium transition-colors duration-300';
  
  const variants = {
    primary: 'bg-[var(--accent)] text-[var(--text-inv)] hover:bg-[var(--accent-2)]',
    ghost: 'border border-[var(--border-hover)] text-[var(--text-1)] hover:border-[var(--accent)] hover:text-[var(--accent)]',
  };

  const sizes = {
    default: 'px-7 py-3.5',
    small: 'px-4 py-2 text-xs',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
