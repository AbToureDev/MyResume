/** @type {import('tailwindcss').Config} */

const config= {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue': '#0F172A',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'slategray': '#e2e8f0',
      'white': '#fff',
      'green': '#4ade80',
      'emerald':'#34d399',
      'transparent':'rgba(157,221,200,0.24)',
      'transparent2':'rgba(157,221,200,0.07)'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
  ],
};
export default config;
