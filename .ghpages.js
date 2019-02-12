var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'dist'), {
    repo: 'https://github.com/sumbad/inscriptum.git',
    branch: 'gh-pages',
    user: {
        name: 'sumbad',
        email: 'sumbad@ya.ru'
    }
}, function (err) {
    console.log(err || 'END DEPLOY SUCCESS')
});