module.exports = {
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: ["*.{js,jsx,ts,tsx,json,cjs,astro,css}"],
            options: {
                parser: "astro",
                jsxSingleQuote: false,
                singleQuote: false,
                tabWidth: 4,
            },
        },
    ],
};
