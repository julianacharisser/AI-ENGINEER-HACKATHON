'use client'

import Link from 'next/link'
import { ShieldCheck, Settings, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function SettingsPage() {
  return (
    <div className="page-shell">
      <div className="max-w-5xl mx-auto space-y-10">
        <Card className="glass-panel p-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-red-300">
              <Settings className="h-6 w-6" />
              <span className="uppercase tracking-[0.24em] text-sm text-red-300">Settings</span>
            </div>
            <h1 className="text-4xl font-black text-white">AG Preferences</h1>
            <p className="text-slate-300 leading-7">
              Customize your demo experience with key study options and interface settings. AG keeps the app lean while giving you the feel of a polished productivity tool.
            </p>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="glass-panel p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-red-400">Theme</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Dark Futuristic</h2>
              </div>
              <ShieldCheck className="h-6 w-6 text-red-400" />
            </div>
            <p className="mt-4 text-slate-300 leading-7">
              The app uses a high-contrast black and red palette with glassmorphism cards for a premium hacker demo look.
            </p>
            <div className="mt-6 space-y-3 text-sm text-gray-400">
              <p>• Accent animations enabled</p>
              <p>• Smooth page transitions</p>
              <p>• Easy extension for extra theme modes</p>
            </div>
          </Card>

          <Card className="glass-panel p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-red-400">Study Mode</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Angry Professor</h2>
              </div>
              <Sparkles className="h-6 w-6 text-red-400" />
            </div>
            <p className="mt-4 text-slate-300 leading-7">
              Pick between fast mock mode or a stricter study workflow. This simple page stands in for the full AG tutor configuration interface.
            </p>
            <div className="mt-6 text-sm text-gray-400 space-y-2">
              <p>• Level 1: strict teacher</p>
              <p>• Level 2: military coach</p>
              <p>• Level 3: brutally honest mentor</p>
            </div>
          </Card>
        </div>

        <Card className="glass-panel p-8">
          <h2 className="text-2xl font-semibold text-white">Quick Links</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link href="/dashboard">
              <Button className="w-full">Back to Dashboard</Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="w-full">Return Home</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
