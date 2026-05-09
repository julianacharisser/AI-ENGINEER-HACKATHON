import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]',
        variant === 'default' && 'bg-white/10 text-slate-100',
        variant === 'success' && 'bg-emerald-500/15 text-emerald-300',
        variant === 'warning' && 'bg-amber-500/15 text-amber-300',
        variant === 'danger' && 'bg-red-500/15 text-red-300',
        className
      )}
      {...props}
    />
  )
}
import { type HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={clsx('rounded-full bg-glow/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-glow', className)} {...props} />
  );
}
