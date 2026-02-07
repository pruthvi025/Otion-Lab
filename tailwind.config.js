/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                /* STRICT COLOR SYSTEM - DO NOT MODIFY */
                background: '#050508',
                foreground: '#FFFFFF',

                /* Card System */
                card: {
                    DEFAULT: '#0a0a12',
                    foreground: '#FFFFFF',
                },

                /* Elevated surfaces */
                elevated: '#10101a',

                /* Primary - Gold */
                primary: {
                    DEFAULT: '#D4AF37',
                    foreground: '#050508',
                },
                gold: {
                    DEFAULT: '#D4AF37',
                    glow: 'rgba(212, 175, 55, 0.3)',
                    subtle: 'rgba(212, 175, 55, 0.15)',
                },

                /* Secondary - Blue (sparse use) */
                secondary: {
                    DEFAULT: '#3B82F6',
                    foreground: '#FFFFFF',
                },
                blue: {
                    DEFAULT: '#3B82F6',
                    glow: 'rgba(59, 130, 246, 0.3)',
                },

                /* Border */
                border: 'rgba(212, 175, 55, 0.15)',

                /* Muted */
                muted: {
                    DEFAULT: '#10101a',
                    foreground: 'rgba(255, 255, 255, 0.6)',
                },
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-cta': 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
            },
            boxShadow: {
                'gold': '0 4px 20px rgba(212, 175, 55, 0.2)',
                'gold-lg': '0 8px 30px rgba(212, 175, 55, 0.25)',
            },
        },
    },
    plugins: [],
}
