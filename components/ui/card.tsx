import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('glass-panel rounded-3xl border border-white/10 p-6 shadow-panel', className)} {...props} />
  )
}
