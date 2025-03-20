
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        space: {
          'blue': '#000000',
          'dark-blue': '#0a0a0a',
          'light-blue': '#1a1a1a',
          'purple': '#4e5b94',
          'pink': '#ff2d2d',
          'cyan': '#4bd5ee',
          'white': '#ffe81f',
          'gray': '#8d8d8d',
          'light-gray': '#c8c8c8',
          'lightest-gray': '#e6e6e6',
          'saber-blue': '#4bd5ee',
          'saber-red': '#ff2d2d',
          'saber-green': '#4cd964',
          'empire': '#bb0a1e',
          'rebel': '#ff7b00'
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        'lightsaber-ignite': {
          '0%': { width: '0%', opacity: '0.7' },
          '100%': { width: '100%', opacity: '1' }
        },
        'text-crawl': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '10%': { transform: 'translateY(70%)', opacity: '1' },
          '90%': { transform: 'translateY(-70%)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' }
        },
        'hyperspace-jump': {
          '0%': { transform: 'scale(1)', opacity: '0' },
          '10%': { transform: 'scale(1.2)', opacity: '0.3' },
          '50%': { transform: 'scale(1.5)', opacity: '0.8' },
          '90%': { transform: 'scale(2.5)', opacity: '0.3' },
          '100%': { transform: 'scale(3)', opacity: '0' }
        },
        'saber-glow': {
          '0%, 100%': { boxShadow: '0 0 5px 2px currentColor' },
          '50%': { boxShadow: '0 0 15px 5px currentColor' }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'star-twinkle': 'star-twinkle 3s ease-in-out infinite',
        'lightsaber-ignite': 'lightsaber-ignite 0.6s ease-out forwards',
        'text-crawl': 'text-crawl 60s linear',
        'hyperspace-jump': 'hyperspace-jump 2s ease-in-out',
        'saber-glow': 'saber-glow 1.5s ease-in-out infinite'
			},
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['SF Pro Display', 'Inter', 'ui-sans-serif', 'system-ui']
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)'
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #000000, #0a0a0a, #1a1a1a)',
        'space-radial': 'radial-gradient(circle at center, #1a1a1a, #0a0a0a, #000000)',
        'aurora': 'linear-gradient(to right, rgba(75, 213, 238, 0.1), rgba(255, 45, 45, 0.1), rgba(78, 91, 148, 0.1))',
        'star-wars': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7))',
        'lightsaber-blue': 'linear-gradient(90deg, #4bd5ee, #ffffff)',
        'lightsaber-red': 'linear-gradient(90deg, #ff2d2d, #ffffff)',
        'hyperspace': 'radial-gradient(ellipse at center, #ffffff 0%, rgba(255, 255, 255, 0) 70%)'
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
