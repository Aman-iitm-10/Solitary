/** @type {import('tailwindcss').Config} */


module.exports = {
    content: [
        './index.html', './src/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {

            backgroundImage: {
                'custom-gradient': 'linear-gradient(#000000, #0F0527)',
            },
            width:{
                '68':'19rem',
              },
            screens: {
                xs: '420px',
            },
            fontFamily: {
                'dm-sans': ['DM Sans', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                satoshi: ['Satoshi', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                'cover-overlay-1': 'rgba(87, 79, 82, 1)',
                'cover-overlay-2': 'rgba(85, 34, 204, 1)',
                'home-bg': 'rgba(43, 39, 39, 1)',
                'custom-purple': '#6D28D9',
            },
        },
    },
    plugins: [],
};

