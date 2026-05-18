/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        pre: {
                            backgroundColor: '#1e293b',
                            color: '#e2e8f0',
                        },
                        code: {
                            backgroundColor: '#edf2f7',
                            color: '#c44536',
                            borderRadius: '0.25rem',
                            padding: '0.125rem 0.25rem',
                        },
                        'code::before': { content: '""' },
                        'code::after': { content: '""' },
                    },
                },
            },
        },
    },

}