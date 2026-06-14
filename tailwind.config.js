/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
                secondary: "rgb(var(--color-secondary-rgb) / <alpha-value>)",
                dark: "rgb(var(--color-dark-rgb) / <alpha-value>)",
                "dark-lighter": "rgb(var(--color-dark-lighter-rgb) / <alpha-value>)",
                glass: "rgb(var(--color-glass-rgb) / <alpha-value>)",
                "glass-border": "rgb(var(--color-glass-border-rgb) / <alpha-value>)",
            },
            fontFamily: {
                heading: ['Space Grotesk', 'sans-serif'],
                sans: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, rgb(var(--color-primary-rgb) / 0.2) 0deg, rgb(var(--color-dark-rgb) / 0) 360deg)',
            }
        },
    },
    plugins: [],
}
