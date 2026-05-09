import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './lib/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#070707',
        surface2: '#111214',
        border: '#27272a',
        accent: '#ff4554',
        accentSoft: '#ff455456',
        glow: '#ff4554'
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 69, 84, 0.18)',
        panel: '0 0 40px rgba(255, 69, 84, 0.12)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(255,69,84,0.18), transparent 30%), radial-gradient(circle at 20% 80%, rgba(255,69,84,0.12), transparent 22%)',
        grid: 'radial-gradient(circle at top left, rgba(255,46,65,0.14), transparent 18%), radial-gradient(circle at bottom right, rgba(255,46,65,0.08), transparent 15%)'
      }
    }
  },
  plugins: []
}

export default config
