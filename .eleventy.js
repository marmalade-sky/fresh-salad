module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/');

  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addGlobalData("svgSrc", "/assets/svg/");
  eleventyConfig.addGlobalData("imgSrc", "/assets/img/");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}