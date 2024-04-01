import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/bg-image.png)',
      },

      colors: {
        primary: '#A729F5',
        darkNavy: '#313E51',
        navy: '#3B4D66',
        grayNavy: '#626C7F',
        lightBluish: '#ABC1E1',
      },
    },
  },
  plugins: [],
}
export default config
