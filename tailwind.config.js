/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        'brand-blue': {
          100: '#ECEBFF',
          200: '#C8C3FE',
          300: '#A49AFE',
          400: '#8071FD',
          500: '#6854FC', // Base color
          600: '#533DF6',
          700: '#3D2ED0',
          800: '#291F99'
        },
        
        'brand-black': '#0A142F',
      },
      fontFamily: {
          custom: ['Inter', 'sans-serif'], // 'custom' is the key you’ll use in classes
        },
      screens: {
          'xs': '320px',
        },
        boxShadow: {
          'custom-blue': '0 4px 6px rgba(59, 130, 246, 0.5)', // Blue shadow
          'custom-red': '0 4px 6px rgba(220, 38, 38, 0.5)', // Red shadow
        },
    },
  },
  plugins: [],
};
