/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#020617',
                surface: '#0f172a',
                gold: {
                    300: '#fde047',
                    400: '#facc15',
                    500: '#eab308',
                    600: '#ca8a04',
                },
                // slate: {
                //     800: '#1e293b',
                //     900: '#0f172a',
                // },
                // Keeping legacy names mapped to new colors for compatibility during migration
                primary: {
                    DEFAULT: '#eab308', // Gold
                    light: '#fde047',
                    dark: '#ca8a04',
                },
                secondary: {
                    DEFAULT: '#0f172a', // Navy Surface
                    light: '#1e293b',
                    dark: '#020617',
                },
            },
            fontFamily: {
                heading: ['Playfair Display', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'float': 'float 6s ease-in-out infinite',
            },
            boxShadow: {
                'glow': '0 0 40px rgba(234, 179, 8, 0.2)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            },
        },
    },
    plugins: [],
}
