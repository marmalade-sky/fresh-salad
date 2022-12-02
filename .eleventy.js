const svgSprite = require("eleventy-plugin-svg-sprite");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/');

  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addGlobalData("svgSrc", "/assets/svg/");
  eleventyConfig.addGlobalData("imgSrc", "/assets/img/");

  eleventyConfig.addPlugin(svgSprite, {
    path: "./src/assets/svg"
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}