import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        'phone': '375px',
        'tablet': '780px',
        'desktop': '1200px',
      },
      backgroundImage: {
        'mobile-board-pattern': "url('/suggestions/mobile/background-header.png')",
        'tablet-board-pattern': "url('/suggestions/tablet/background-header.png')",
        'desktop-board-pattern': "url('/suggestions/desktop/background-header.png')"
      },
      colors: {
        'primary-purple': '#AD1FEA',
        'primary-light-purple': '#C75AF6',
        'primary-blue': '#4661E6',
        'dark-blue': '#4661E6',
        'light-blue':'#7C91F9',
        'blueish-grey': '#F2F4FF',
        'light-grey': '#F7F8FD',
        'night-sky-blue': '#3A4374',
        'night-sky-blue-light': '#656EA3',
        'error':'#D73737',
        'error-light':'#E98888',
        'grayish-blue': '#647196',
        orange: '#F49F85',
        'sky-blue': '#62BCFA'
      },
      borderRadius: {
        primary: '10px'
      },
        boxShadow: {
        'sortBybox': 'box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.35)',
      }
    }
  },
  plugins: []
};
export default config
