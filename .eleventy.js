const yaml = require("js-yaml");

module.exports = ( config ) => {
  config.addDataExtension("yaml", contents => yaml.load(contents));
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
