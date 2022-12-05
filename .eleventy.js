const svgSprite = require("eleventy-plugin-svg-sprite");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addPassthroughCopy('./src/js/');

  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/js/");

  eleventyConfig.addGlobalData("svgSrc", "/assets/svg/");
  eleventyConfig.addGlobalData("imgSrc", "/assets/img/");

  eleventyConfig.addPlugin(svgSprite, {
    path: "./src/assets/svg/icons"
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}