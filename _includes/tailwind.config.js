module.exports = {
    purge: [
      './**/*.html',
      './assets/js/*.js'
    ],
    darkMode: false,
    theme: {
      fontFamily: {
        'sans': ['Jost','ui-sans-serif', 'system-ui'],
      },
      extend:{
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
            },
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