const fs = require('fs');
const path = require('path');
const url = require('url');
const bs = require('browser-sync').create();

// The default file if the file/path is not found
var defaultFile = 'index.html';
var folder = path.resolve(__dirname, './build');

bs.init({
  baseDir: './build',
  serveStatic: ['./note', 'note', './build', 'build'],
  serveStaticOptions: {
    extensions: ['html']
  },
  open: false,
  server: './build',
  middleware: function(req, res, next) {
    var fileName = url.parse(req.url);
    fileName = fileName.href.split(fileName.search).join('');
    var fileExists = fs.existsSync(folder + fileName);
    if (!fileExists && fileName.indexOf('browser-sync-client') < 0) {
      req.url = '/' + defaultFile;
    }
    return next();
  }
});
