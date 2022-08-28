module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
        gridTemplateColumns: {
          '16': 'repeat(16, minmax(0, 1fr))',
          'footer': '200px minmax(900px, 1fr) 100px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}