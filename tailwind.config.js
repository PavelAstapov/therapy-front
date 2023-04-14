/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#2C2E80",
          secondary: "#212367",
          accent: "#212367",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          '.btn': {
            'height': '4rem',
            'padding-left': '2rem',
            'padding-right': '2rem',
            'color': '#fff',
            'text-transform': 'none',
            'font-size': '1rem',
            'line-height': '1.5rem',
            'transition': '0.2s ease-in-out',
            '@media (min-width: 1536px)': {
              'font-size': '18px',
            },
            'hover': {
              'box-shadow': '0px 0px 18px 0px rgba(34, 60, 80, 0.2)'
            }
          },
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-purple': '#2C2E80',
        'light-purple': '#4C4FCE',
      },
      maxWidth: {
        '1560': '1560px',
        '250px': '250px',
      },
      spacing: {
        '90%': '90%',
        '80%': '80%',
        '52px': '52px',
      },
      fontFamily: {
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
}
