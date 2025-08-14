import { type Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#8cc43f',
                secondary: '#4e605f',
            },
            keyframes: {
                'marquee-lr': {
                    '0%': { transform: 'translateX(-60vw)' },
                    '100%': { transform: 'translateX(60vw)' },
                },
            },
            animation: {
                'marquee-lr': 'marquee-lr 20s linear infinite',
            },
        },
    },
} satisfies Config; 