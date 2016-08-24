# Static site template

This is a static website generator setup built for crafting simple website projects.

The generator uses markdown and handlebars to produce html-files using metalsmith. Each markdown-file should contain a header linking it to the desired layout-file. Check out src/index.md and src/layout/index.html for reference.

## Usage
- Place html layouts for pages into src/layouts
- Scss anywhere under src/ as per preference.
- The build scripts should now enable using es6 syntax in javascript, output will be uglified.

## Running:
- npm install: Installs dependencies
- npm start: Starts http-server and runs the build scripts

License: MIT