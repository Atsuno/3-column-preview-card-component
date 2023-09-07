import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        primaly: 'hsl(31, 77%, 52%)',
        secondly: 'hsl(184, 100%, 22%)',
        thirdly: 'hsl(179, 100%, 13%)',
        paragraphs: 'hsla(0, 0%, 100%, 0.75)',
        rear: 'hsl(0, 0%, 95%)',
        link: 'hsl(228, 45%, 44%)',
      },
    },
  },
  plugins: [],
}
export default config
