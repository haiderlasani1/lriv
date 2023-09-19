import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': {
                    100: '#b889fa',
                    200: '#ac76f9',
                    300: '#a062f8',
                    400: '#944ff7',
                    500: '#883bf6',
                    600: '#7a35dd',
                    700: '#6d2fc5',
                    800: '#5f29ac',
                    900: '#522394',
                },
                'secondary': {
                    100: '#f88abc',
                    200: '#f777b1',
                    300: '#f663a6',
                    400: '#f5509b',
                    500: '#f43c90',
                    600: '#dc3682',
                    700: '#c33073',
                    800: '#ab2a65',
                    900: '#922456',
                },
            },
        },
    },

    plugins: [forms],
};
