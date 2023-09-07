import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      fontglobal : ['Lexend_Deca, Big_Shoulders_Display']
    },
    colors: {
      primaly: 'hsl(31, 77%, 52%)',
      secondly: 'hsl(184, 100%, 22%)',
      thirdly: 'hsl(179, 100%, 13%)',
      paragraphs: 'hsla(0, 0%, 100%, 0.75)',
      rear: 'hsl(0, 0%, 95%)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
