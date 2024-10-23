module.exports = {
    purge: [
      './**/*.html',
      './assets/js/*.js'
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
          electric_purple: '#6032E3',
          robin_gray: '#E3EBF0'
            },
        height: {
          '75vh':'75vh',
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