'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Brain, Zap, BookOpen, Target, MessageSquare, BarChart3 } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative border border-red-500/30 bg-black/50 backdrop-blur-lg rounded-xl p-6 hover:border-red-500/60 transition-colors duration-300">
      <Icon className="w-8 h-8 text-red-400 mb-3" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
)

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-red-600/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="border border-red-500/50 rounded-full px-4 py-2 bg-red-500/5 backdrop-blur-md">
                <span className="text-red-400 text-sm font-semibold">✨ Welcome to AG</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                Study Like a Master.
              </span>
              <br />
              <span className="text-white">Learn from Your <span className="text-red-500">Mistakes</span>.</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Meet AG — your personal <strong>Angry Professor</strong> AI tutor. Upload notes, predict exam questions, master topics, and crush your exams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-red-500/50"
                >
                  Start Learning <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="#features">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-red-500/50 text-white font-bold rounded-lg hover:border-red-500 hover:bg-red-500/5 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8">
              {[
                { label: '10x', desc: 'Faster learning' },
                { label: '95%', desc: 'Topic coverage' },
                { label: '24/7', desc: 'AI tutor access' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-red-400">{stat.label}</div>
                  <div className="text-xs md:text-sm text-gray-500">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI Assistant Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="border border-red-500/30 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-lg hover:border-red-500/60 transition-colors duration-300">
              <div className="px-6 py-4 border-b border-red-500/20 bg-gradient-to-r from-red-500/10 to-transparent">
                <p className="text-red-400 font-semibold text-sm">AG — Your Angry Professor</p>
              </div>
              <div className="p-6 min-h-32 flex flex-col justify-center">
                <p className="text-gray-300 text-lg mb-4 italic">
                  "You uploaded 47 pages and you're asking me why you got a C? That's the problem — you didn't actually <strong>understand</strong> the material. Let me help you fix that."
                </p>
                <p className="text-red-400/70 text-sm">→ Switching to source-grounded tutor mode...</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Supercharge Your Study
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              AI-powered tools designed to analyze your exam patterns, predict likely questions, and keep you accountable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={BookOpen}
              title="Smart Uploads"
              description="Upload PDFs, notes, lecture audio, and past papers. AG analyzes everything instantly."
              delay={0}
            />
            <FeatureCard
              icon={Target}
              title="Exam Predictor"
              description="Identify likely exam topics with confidence scoring and predicted questions."
              delay={0.1}
            />
            <FeatureCard
              icon={Brain}
              title="Angry Professor AI"
              description="Get strict, sarcastic, yet motivating guidance tailored to YOUR learning gaps."
              delay={0.2}
            />
            <FeatureCard
              icon={BarChart3}
              title="Flashcard Generation"
              description="Auto-generate spaced repetition flashcards with difficulty ratings and progress tracking."
              delay={0.3}
            />
            <FeatureCard
              icon={Zap}
              title="Quiz Generator"
              description="Create unlimited MCQs, short-answer quizzes, and practice exams with instant feedback."
              delay={0.4}
            />
            <FeatureCard
              icon={MessageSquare}
              title="Zero-Hallucination RAG"
              description="AG cites sources from YOUR materials. Never makes up facts. Always verifiable."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-red-500/30 rounded-2xl bg-gradient-to-b from-red-500/10 to-transparent p-12 text-center backdrop-blur-lg"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Transform Your Study?</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Join thousands of students who are studying smarter with AG's AI-powered system.
            </p>
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg shadow-red-500/50"
              >
                Launch Dashboard
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
