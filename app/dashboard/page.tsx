'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, UploadCloud, BookOpen, ShieldCheck, Sparkles, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const topics = [
  { title: 'Quantum Mechanics', frequency: 12, confidence: '89%', prediction: 'Explain wave-particle duality.', reason: 'Appeared in 4 past exams.' },
  { title: 'Database Normalization', frequency: 9, confidence: '82%', prediction: 'Describe 3NF with examples.', reason: 'High recurrence in lecture notes.' },
  { title: 'API Security', frequency: 7, confidence: '76%', prediction: 'List best practices for JWT protection.', reason: 'Linked to exam objectives.' }
]

const stats = [
  { label: 'Uploaded docs', value: '18', icon: UploadCloud },
  { label: 'Predicted topics', value: '37', icon: BookOpen },
  { label: 'Flashcards ready', value: '24', icon: Sparkles },
  { label: 'Study streak', value: '5 days', icon: ShieldCheck }
]

export default function DashboardPage() {
  return (
    <div className="page-shell">
      <div className="max-w-6xl mx-auto space-y-10">
        <section className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
          <Card className="glass-panel p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-red-400">AG Dashboard</p>
                <h1 className="mt-3 text-4xl font-black text-white">Study Command Center</h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                  Upload your notes, review predicted exam topics, and let AG push you through the next session. This a focused study hub with all core tools in one place.
                </p>
              </div>
              <Button className="h-12 px-5" onClick={() => window.location.assign('/')}>Home</Button>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3 text-red-400">
                    <stat.icon className="h-5 w-5" />
                    <p className="text-xs uppercase tracking-[0.24em] text-gray-400">{stat.label}</p>
                  </div>
                  <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-panel p-8">
            <div className="flex items-center gap-3 text-red-300 text-sm uppercase tracking-[0.24em]">
              <Cpu className="h-5 w-5" />
              <span>Study Pulse</span>
            </div>
            <p className="mt-4 text-slate-300 leading-7">
              The simplified AG demo keeps your workflow lean. Use the upload area to add your study material, then review the top topics AG predicts for your next exam.
            </p>
            <div className="mt-8 grid gap-4">
              <Button className="w-full" onClick={() => window.location.assign('#topics')}>Review Predictions</Button>
              <Link href="/dashboard#upload">
                <Button variant="ghost" className="w-full">Go to Uploads section</Button>
              </Link>
            </div>
          </Card>
        </section>

        <section id="upload" className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="glass-panel p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-red-400">Upload Center</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Study Materials</h2>
              </div>
              <UploadCloud className="h-6 w-6 text-red-400" />
            </div>
            <p className="mt-4 text-slate-300 leading-7">
              Drag-and-drop your PDFs, DOCX files, images, or lecture audio. AG will keep it ready for predictions, flashcards, and tutor answers.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['PDF', 'DOCX', 'Images', 'Audio'].map((type) => (
                <div key={type} className="rounded-3xl border border-white/10 bg-black/40 p-4 text-sm text-slate-300">
                  <p className="font-semibold text-white">{type}</p>
                  <p className="mt-2 text-xs text-gray-400">Processed in minutes for source-grounded answers.</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-panel p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-red-400">Quick Actions</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Fast Start</h2>
              </div>
              <Sparkles className="h-6 w-6 text-red-400" />
            </div>
            <div className="mt-8 space-y-3 text-slate-300">
              <p>• Upload more notes to increase prediction confidence.</p>
              <p>• Let AG generate flashcards from your strongest topics.</p>
              <p>• Use the chat to test knowledge with source-aware responses.</p>
            </div>
            <Button className="mt-8 w-full py-3" onClick={() => window.location.assign('#topics')}>
              View Predictions
            </Button>
          </Card>
        </section>

        <section id="topics" className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-red-400">Exam Predictor</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Likely Exam Topics</h2>
            </div>
            <Button variant="ghost" onClick={() => window.location.assign('#upload')}>Back to Uploads</Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {topics.map((topic) => (
              <Card key={topic.title} className="glass-panel p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                  <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-300">{topic.confidence}</span>
                </div>
                <p className="mt-4 text-slate-300 text-sm leading-6">{topic.prediction}</p>
                <p className="mt-4 text-xs text-gray-500">{topic.reason}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="glass-panel p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-red-400">AG Tutor</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Strict Tutor Mode</h3>
            <p className="mt-4 text-slate-300 leading-7">
              AG keeps your study honest. Ask a question and AG will answer using your uploaded course material or tell you it can't if the source is missing.
            </p>
          </Card>
          <Card className="glass-panel p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-red-400">Flashcards</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Active Recall</h3>
            <p className="mt-4 text-slate-300 leading-7">
              AG auto-generates flashcards with difficulty hints and spaced repetition suggestions so you can study smarter with every review.
            </p>
          </Card>
        </section>
      </div>
    </div>
  )
}
