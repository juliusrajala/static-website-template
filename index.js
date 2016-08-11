var metalsmith = require('metalsmith');
var templates = require('metalsmith-templates'),
  markdown = require('metalsmith-markdown');

metalsmith(__dirname)
  .source("src")
  .destination("dist")
  .use(markdown())
  .use(templates('handlebars'))
  .build(function(err){
    if(err) { throw err; }
    else console.log("Success!");
  });