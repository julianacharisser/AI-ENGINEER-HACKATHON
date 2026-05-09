export const documents = [
  {
    id: 'doc-1',
    title: 'Calculus Past Papers 2025',
    type: 'pdf',
    uploadedAt: '2026-05-01T10:14:00.000Z',
    status: 'ready',
    pages: 28,
    source: 'Calculus_Paper_2025.pdf'
  },
  {
    id: 'doc-2',
    title: 'Thermodynamics Lecture Notes',
    type: 'docx',
    uploadedAt: '2026-04-29T15:22:00.000Z',
    status: 'ready',
    pages: 42,
    source: 'Thermo_Lecture.docx'
  },
  {
    id: 'doc-3',
    title: 'Mechanics Lecture Audio',
    type: 'audio',
    uploadedAt: '2026-05-03T09:05:00.000Z',
    status: 'processing',
    pages: 0,
    source: 'Mech_Lecture.mp3'
  }
]

export const topicPredictions = [
  {
    topic: 'Newtonian Mechanics',
    frequency: 14,
    confidence: 0.94,
    prediction: 'Explain the assumptions behind free-body diagrams for systems in equilibrium.',
    reason: 'Appears in 5 past papers and lecture notes emphasize equilibrium scenarios.'
  },
  {
    topic: 'Thermodynamic Cycles',
    frequency: 9,
    confidence: 0.87,
    prediction: 'Compare the efficiency of Carnot and Rankine cycles under practical constraints.',
    reason: 'Repeated cycle analysis in both notes and exams, linked to core learning outcomes.'
  },
  {
    topic: 'Differential Equations',
    frequency: 7,
    confidence: 0.78,
    prediction: 'Solve an initial-value problem for a first-order linear differential equation.',
    reason: 'Core concept with high occurrence in past exam question patterns.'
  }
]

export const flashcards = [
  {
    id: 'flash-1',
    front: 'What is the second law of thermodynamics in terms of entropy?',
    back: 'Entropy of an isolated system never decreases; heat cannot spontaneously flow from cold to hot without work.',
    difficulty: 'Medium',
    spacedRepetition: 'Due in 2 days'
  },
  {
    id: 'flash-2',
    front: 'State Newton’s second law and explain its role in dynamics.',
    back: 'Force equals mass times acceleration (F = ma); it connects net force to motion change.',
    difficulty: 'Easy',
    spacedRepetition: 'Mastered'
  },
  {
    id: 'flash-3',
    front: 'What defines a control volume in fluid mechanics?',
    back: 'A fixed region in space where mass and momentum balances are evaluated for flow analysis.',
    difficulty: 'Hard',
    spacedRepetition: 'Due today'
  }
]

export const quizQuestions = [
  {
    id: 'q1',
    type: 'mcq',
    question: 'Which quantity remains constant during an isothermal reversible process?',
    options: ['Entropy', 'Internal energy', 'Temperature', 'Enthalpy'],
    answer: 'Temperature'
  },
  {
    id: 'q2',
    type: 'short',
    question: 'Give one practical limitation of using the Carnot cycle as a real engine model.',
    answer: 'Carnot cycle requires reversible processes and zero friction, which are impossible in real machines.'
  },
  {
    id: 'q3',
    type: 'predicted',
    question: 'Describe how a free-body diagram helps determine net force on a suspended object.',
    answer: 'It isolates external forces, identifies vectors, and allows equilibrium or acceleration equations to be written.'
  }
]

export const tutorSources = [
  {
    sourceId: 's-1',
    file: 'Calculus_Past_Papers_2025.pdf',
    page: 12,
    quote: 'Free-body diagrams are best used to isolate forces before applying Newton’s second law.'
  },
  {
    sourceId: 's-2',
    file: 'Thermo_Lecture.docx',
    page: 8,
    quote: 'The Carnot cycle represents the maximum efficiency limit between two thermal reservoirs.'
  }
]

export const webResources = [
  {
    id: 'r1',
    label: 'Explosive Mechanics Breakdown',
    description: 'Short YouTube guide on equilibrium and force diagrams.',
    url: 'https://www.youtube.com/watch?v=example01',
    type: 'YouTube'
  },
  {
    id: 'r2',
    label: 'Thermodynamics Cycle Notes',
    description: 'Official engineering course notes covering Carnot, Rankine and Brayton cycles.',
    url: 'https://www.example.com/thermo-cycles',
    type: 'Article'
  },
  {
    id: 'r3',
    label: 'Differential Equations Review',
    description: 'Reference page with solved first-order linear ODE examples.',
    url: 'https://www.example.com/ode-review',
    type: 'Documentation'
  }
]

export const scheduleBlocks = [
  {
    day: 'Mon',
    block: 'Thermo review',
    duration: '90 min',
    color: 'border-red-500/30'
  },
  {
    day: 'Tue',
    block: 'Past paper practice',
    duration: '60 min',
    color: 'border-fuchsia-500/30'
  },
  {
    day: 'Wed',
    block: 'Flashcard session',
    duration: '45 min',
    color: 'border-slate-500/30'
  }
]

export const dashboardSummary = {
  weakTopics: ['Thermodynamic Cycles', 'Differential Equations', 'Control Volumes'],
  predictionConfidence: 89,
  completedSessions: 15,
  streakDays: 6
}
