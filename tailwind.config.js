// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  // ...
  variants: {
    extend: {
      animation: ['motion-safe'],
    }
  },
}

// tailwind.config.js
module.exports = {
  // ...
  variants: {
    extend: {
      animation: ['motion-reduce'],
    }
  },
}

  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        animation: {
         'spin-slow': 'spin 3s linear infinite',
        }
      }
    }
  }