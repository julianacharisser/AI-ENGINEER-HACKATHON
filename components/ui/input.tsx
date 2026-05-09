import { cn } from '@/lib/utils'
import type { InputHTMLAttributes, DetailedHTMLProps } from 'react'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20',
        className
      )}
      {...props}
    />
  )
}
