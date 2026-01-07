/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00ffa3", // Neon Green
                secondary: "#ffffff",
                dark: "#050505", // Almost pure black
                "dark-lighter": "#0a0a0a",
                "glass": "rgba(255, 255, 255, 0.03)",
                "glass-border": "rgba(255, 255, 255, 0.05)",
            },
            fontFamily: {
                heading: ['Space Grotesk', 'sans-serif'],
                sans: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #00ffa333 0deg, #00000000 360deg)',
            }
        },
    },
    plugins: [],
}
