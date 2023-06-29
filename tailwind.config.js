const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./_site/**/*.html'],
    safelist: ['bg-stone-800'],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    '"Courier Prime Sans Serif"',
                    ...defaultTheme.fontFamily.sans,
                ],
                serif: [
                    '"Courier Prime Serif"',
                    ...defaultTheme.fontFamily.serif,
                ],
                mono: ['"Courier Prime Code"', ...defaultTheme.fontFamily.mono],
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}
