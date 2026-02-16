export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Navy (#182954) - Primary foundation color
        navy: {
          DEFAULT: '#182954',
          50: 'rgba(24, 41, 84, 0.05)',
          100: 'rgba(24, 41, 84, 0.1)',
          200: 'rgba(24, 41, 84, 0.2)',
          300: 'rgba(24, 41, 84, 0.3)',
          400: 'rgba(24, 41, 84, 0.4)',
          600: 'rgba(24, 41, 84, 0.6)',
          800: 'rgba(24, 41, 84, 0.8)',
          900: 'rgba(24, 41, 84, 0.9)',
        },
        // Red (#BB1F2C) - Accent/highlight color
        red: {
          DEFAULT: '#BB1F2C',
          50: 'rgba(187, 31, 44, 0.05)',
          100: 'rgba(187, 31, 44, 0.1)',
          200: 'rgba(187, 31, 44, 0.2)',
          300: 'rgba(187, 31, 44, 0.3)',
          400: 'rgba(187, 31, 44, 0.4)',
          600: 'rgba(187, 31, 44, 0.6)',
          700: 'rgba(187, 31, 44, 0.75)',
          800: 'rgba(187, 31, 44, 0.8)',
          850: 'rgba(187, 31, 44, 0.85)',
          900: 'rgba(187, 31, 44, 0.9)',
        },
        // Grays for minimal design
        gray: {
          50: '#F8F9FA',
          100: '#E1E4E8',
          200: '#D1D5DB',
          300: '#9CA3AF',
          400: '#6B7280',
          600: '#4B5563',
        }
      },
      letterSpacing: {
        'ultra-tight': '-0.04em',
        'tight': '-0.03em',
        'slightly-tight': '-0.01em',
      },
      gap: {
        '25': '100px', // For 100px section gaps
      },
      boxShadow: {
        // Glassmorphic shadows
        'glass': 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 8px 32px rgba(24, 41, 84, 0.08)',
        'glass-strong': 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 12px 40px rgba(24, 41, 84, 0.12)',
        'glass-red': 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 16px rgba(187, 31, 44, 0.3)',
        'glass-red-hover': 'inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 8px 24px rgba(187, 31, 44, 0.4)',
        // Minimal soft shadows
        'soft-sm': '0 2px 8px rgba(24, 41, 84, 0.06)',
        'soft': '0 4px 16px rgba(24, 41, 84, 0.08)',
        'soft-lg': '0 8px 32px rgba(24, 41, 84, 0.12)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.15' },
          '50%': { transform: 'translateY(-10px) scale(1.05)', opacity: '0.2' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    }
  },
  plugins: []
};
