module.exports = ( config ) => {
  // Pass throughs
  config.addPassthroughCopy('./src/assets/css/'); 
  return { 
    dir: {
      input: "src",
      output: "dist"
    }
  }
};
