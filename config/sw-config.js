module.exports = {
  cache: {
    cacheId: "palindrome",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "palindrome",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
