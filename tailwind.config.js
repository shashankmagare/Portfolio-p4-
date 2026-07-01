/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05070f',      // Deep cyber void background
          card: 'rgba(10, 15, 30, 0.7)', // Semi-transparent glass card
          text: '#e2e8f0',    // Bright readable text
          green: '#10b981',   // Emerald (operational/success)
          "green-neon": '#00ff66',
          cyan: '#06b6d4',    // Cyan (secure/info)
          "cyan-neon": '#00f0ff',
          purple: '#8b5cf6',  // Violet (automation/devops)
          "purple-neon": '#bd93f9',
          amber: '#f59e0b',   // Warning state
          red: '#ef4444',     // Critical state
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Courier New', 'monospace'],
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(6, 182, 212, 0.4)',
        'neon-green': '0 0 15px rgba(16, 185, 129, 0.4)',
        'neon-purple': '0 0 15px rgba(139, 92, 246, 0.4)',
        'glass-glow': 'inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 4px 30px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'caret': 'blink 1s step-end infinite',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        'scanlines': 'scanline 10s linear infinite',
      },
      keyframes: {
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 2px rgba(6, 182, 212, 0.3))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.7))' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}
