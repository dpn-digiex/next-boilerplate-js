/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        customGray: '#ccc'
      },
      borderWidth: {},
      borderRadius: {},
      fontSize: {
        'xs-medium': [
          '12px',
          {
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '18px'
          }
        ]
        // ........more
      },
      boxShadow: {}
    }
  },
  plugins: []
}
