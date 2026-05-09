'use client'

import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const statusMessages = [
  'Stop scrolling. Study.',
  'Focus on the hardest topic now.',
  'AG says: turn your notes into practice.',
  'You have 3 predicted questions waiting.'
]

export function FloatingAGIcon() {
  const [open, setOpen] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const message = useMemo(() => statusMessages[messageIndex], [messageIndex])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % statusMessages.length)
    }, 9000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <div className="rounded-3xl border border-white/10 bg-black/80 p-4 text-right shadow-glow backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.24em] text-red-300">AG warning</p>
        <p className="mt-1 max-w-xs text-sm leading-6 text-slate-200">{message}</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        onClick={() => setOpen((value) => !value)}
        className="flex h-16 w-16 items-center justify-center rounded-full border border-red-500/40 bg-red-500/15 text-white shadow-glow backdrop-blur-xl"
      >
        <span className="text-2xl">😡</span>
      </motion.button>

      {open ? (
        <Card className="w-[320px] p-5">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-red-300">Angry Professor</p>
              <h3 className="mt-1 text-lg font-semibold text-white">Quick Study Coach</h3>
            </div>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>Ask AG for a quick question or jump to the next topic.</p>
            <ul className="space-y-2">
              <li>• “What is the top exam topic?”</li>
              <li>• “Teach me a hard concept fast.”</li>
              <li>• “Give me a 5-min review plan.”</li>
            </ul>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button className="flex-1" onClick={() => window.location.assign('/exam-predictor')}>
              Go to Predictor
            </Button>
            <Button variant="ghost" className="flex-1" onClick={() => window.location.assign('/tutor')}>
              Open Tutor
            </Button>
          </div>
        </Card>
      ) : null}
    </div>
  )
}
