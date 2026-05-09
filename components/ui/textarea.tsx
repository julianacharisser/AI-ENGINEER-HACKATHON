import { cn } from '@/lib/utils'
import type { TextareaHTMLAttributes, DetailedHTMLProps } from 'react'

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20',
        className
      )}
      {...props}
    />
  )
}
