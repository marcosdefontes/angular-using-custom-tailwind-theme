/** @type {import('tailwindcss').Config} */
const theme = require("ds-govbr-tailwind/theme");
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    ...theme,
    plugins: [],
};