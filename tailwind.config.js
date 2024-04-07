/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      spacing: {
        0.5: '0.125rem', // 2px
        1: '0.25rem', // 4px
        1.5: '0.375rem', // 6px
        2: '0.5rem', // 8px
        2.5: '0.625rem', // 10px
        3: '0.75rem', // 12px
        3.5: '0.875rem', // 14px
        4: '1rem', // 16px
        4.5: '1.125rem', // 18px
        5: '1.25rem', // 20px
        5.5: '1.375rem', // 22px
        6: '1.5rem', // 24px
        6.5: '1.625rem', // 26px
        7: '1.75rem', // 28px
        7.5: '1.875rem', // 30px
        8: '2rem', // 32px
        8.5: '2.125rem', // 34px
        9: '2.25rem', // 36px
        9.5: '2.375rem', // 38px
        10: '2.5rem', // 40px
        10.5: '2.625rem', // 42px
        11: '2.75rem', // 44px
        11.5: '2.875rem', // 46px
        12: '3rem', // 48px
        12.5: '3.125rem', // 50px
        13: '3.25rem', // 52px
        13.5: '3.375rem', // 54px
        14: '3.5rem', // 56px
        14.5: '3.625rem', // 58px
        15: '3.75rem', // 60px,

        25: '6.25rem' // 100px
      },
      colors: {
        bgBlack: '#101010',
        bgGray: '#323232',
        grayLight: '#545454'
      },
      borderWidth: {},
      borderRadius: {},
      fontSize: {
        xs: [
          '13px',
          {
            fontStyle: 'normal',
            fontWeight: 300
          }
        ],
        sm: [
          '14px',
          {
            fontStyle: 'normal',
            fontWeight: 400
          }
        ],
        md: [
          '15px',
          {
            fontStyle: 'normal',
            fontWeight: 500
          }
        ],
        lg: [
          '20px',
          {
            fontStyle: 'normal',
            fontWeight: 500
          }
        ]
      },
      boxShadow: {},
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1200px',
          xl: '1200px'
        }
      }
    }
  },
  plugins: []
}
