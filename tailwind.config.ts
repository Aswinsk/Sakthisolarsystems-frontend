export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "var(--color-primary)" },
        secondary: { DEFAULT: "var(--color-secondary)" },
        accent: {
          cyan: "#06b6d4",
          purple: "#a855f7",
          blue: "#3b82f6",
          electric: "#0ea5e9"
        },
        surface: {
          dark: "#111827",
          darker: "#0f172a",
          glass: "rgba(255, 255, 255, 0.1)"
        },
        glow: {
          primary: "rgba(245, 158, 11, 0.5)",
          secondary: "rgba(11, 124, 102, 0.5)",
          cyan: "rgba(6, 182, 212, 0.5)",
          purple: "rgba(168, 85, 247, 0.5)"
        }
      },
      boxShadow: {
        'soft-sm': '0 8px 20px rgba(0, 0, 0, 0.06)',
        'soft': '0 16px 40px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 24px 60px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 20px var(--glow-primary)',
        'glow-lg': '0 0 40px var(--glow-primary)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
        'neon': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
      },
      backdropBlur: {
        xs: '2px'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px var(--glow-primary)' },
          '50%': { boxShadow: '0 0 40px var(--glow-primary), 0 0 60px var(--glow-primary)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-down': {
          '0%': { transform: 'translateY(-60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem'
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem'
      }
    }
  },
  plugins: []
};
