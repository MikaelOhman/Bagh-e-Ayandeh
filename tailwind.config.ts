import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'earth-green': 'rgb(var(--color-earth-green) / <alpha-value>)',
        'earth-teal': 'rgb(var(--color-earth-teal) / <alpha-value>)',
        'earth-cyan': 'rgb(var(--color-earth-cyan) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
