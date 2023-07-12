module.exports = function (eleventyConfig) {
  // shortcode for debugging data
  eleventyConfig.addShortcode(
    "debug",
    (value) =>
      `<pre style="padding: 100px 0; font-size: 14px; font-family: monospace;">${JSON.stringify(
        value,
        null,
        2
      )}</pre>`
  );

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("src/assets/");
  // Return your Object options:
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "public",
    },
  };
};
