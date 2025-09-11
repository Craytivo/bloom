// tailwind-config.js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: '#1C1C2E',
        secondary: '#6E5D55',
        accent: {
          DEFAULT: '#FEC42D',
          hover: '#e5b71b'
        },
        heading: '#4B3221',
        card: '#7A5C45',
        background: '#FFFFFF',
        luxury: '#e4d9cc',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'], // elegant, luxury feel
        body: ['Inter', 'sans-serif']           // clean, modern readability
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.lucide-icon': {
          width: '2rem',      // 32px
          height: '2rem',     // 32px
          strokeWidth: '2',   // consistent stroke
          color: '#FEC42D',   // default accent color
        },
      })
    }
  ],
};
