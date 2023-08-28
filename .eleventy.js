require('dotenv').config();

const htmlMinTransform = require('./src/transforms/html-min-transform.js');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = config => {
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  config.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
