module.exports = function (eleventyConfig) {
  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("src/assets/");
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
