const tailwindcss = require("tailwindcss");
const tailwindcssConfig = require("./tailwind.config.js");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano")({ preset: "default" });
// only needed if you want to purge

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./src/**/*.html"],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    tailwindcss,
    tailwindcssConfig,
    autoprefixer,
    // only needed if you want to purge
    ...(process.env.NODE_ENV === "production" ? [purgecss, cssnano] : []),
  ],
};