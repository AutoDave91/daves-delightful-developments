/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ddd: {
                    navy: "#264653",
                    teal: "#2A9D8F",
                    yellow: "#F4A261",
                    orange: "#E76F51",
                    cream: "#FAF3E0",
                },
            },
        },
    },
    plugins: [],
};
