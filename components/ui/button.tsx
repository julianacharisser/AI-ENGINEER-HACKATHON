import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'danger'
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-glow/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
        variant === 'primary' && 'bg-accent text-white shadow-glow hover:bg-red-500',
        variant === 'ghost' && 'bg-white/5 text-slate-100 hover:bg-white/10',
        variant === 'danger' && 'bg-red-600/90 text-white hover:bg-red-500',
        className
      )}
      {...props}
    />
  )
}
