module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    // currently Sapper dev server chokes on this
    // applyComplexClasses: true,
  },
  theme: {
    extend: {
      height: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
