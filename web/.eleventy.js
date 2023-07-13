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

  // shortcode for current year
  eleventyConfig.addShortcode("getYear", function () {
    const year = new Date().getFullYear();
    return `${year}`;
  });

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("src/assets/");
  // Return your Object options:
  return {
    templateFormats: ["njk", "html"],

    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "public",
    },
  };
};
