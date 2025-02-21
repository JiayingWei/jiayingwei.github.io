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
          lightest_purple: '#D1C4FF',
          light_purple: '#C7BAF2',
          dark_purple: '#483877',
          light_blue: '#C6DEE4',
          robin_gray: '#E3EBF0'
            },
        height: {
          '75vh':'75vh',
          },
        screens: {
          '2xl': '1536px'
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