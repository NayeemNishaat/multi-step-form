module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            container: {
                breakpoint: {
                    xl: "1440px"
                }
            }
        }
    },
    plugins: []
};
