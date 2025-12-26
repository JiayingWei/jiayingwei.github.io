module.exports = {
  mode: "jit",
    purge: [
      './**/*.{html,md,js}',
    ],
    darkMode: false,
    theme: {
      fontFamily: {
        'sans': ['Manrope','ui-sans-serif', 'system-ui'],
        'serif': ['PTMono','ui-serif', 'system-ui'],
      },
      extend:{
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          electric_purple: '#2E03A8',
          baby_blue: '#E3EBF0',
          lavender: '#E6DFFF',
          grad_purple:'#C7BAF2',
          grad_blue: '#C6DEE4',
          passion_purple:'#483877'
            },
        height: {
          '75vh':'75vh',
          },
        screens: {
          '2xl': '1536px'
        },
        opacity: {
          '10':'0.1'
        }
        },
    },
    variants: {
      extend:{
      },
    },
    plugins: [
      // require('@tailwindcss/typography'),
    ],
  }