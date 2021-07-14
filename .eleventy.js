module.exports = ( config ) => {
  // Pass throughs
  config.addPassthroughCopy('./src/assets/css/'); 
  return { 
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "dist"
    }
  }
};
