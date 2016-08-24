var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var filter = require('metalsmith-filter');
var layouts = require('metalsmith-layouts');

metalsmith(__dirname)
  .source('src')
  .destination('dist')
  .use(markdown())
  .use(layouts({
    'engine':'handlebars', 
    'directory':'src/layouts'
  }))
  .use(filter(['!*.scss', '!dist/*', '*.md', '*.html']))
  .build(function(err){
    if(err) { throw err; }
    else console.log('Metalsmith build successfull!');
  });