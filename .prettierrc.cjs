module.exports = {
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: ["*.{js,jsx,ts,tsx,json,cjs,astro}"],
            options: {
                parser: "astro",
                jsxSingleQuote: true,
                singleQuote: true,
                tabWidth: 4,
            },
        },
    ],
};
