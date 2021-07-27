const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(path.join(__dirname, '../build'), {
    repo: 'https://github.com/sumbad/inscriptum.git',
    branch: 'gh-pages',
    user: {
        name: 'sumbad',
        email: 'sumbad@ya.ru'
    }
}, function (err) {
    console.log(err || 'END DEPLOY SUCCESS')
});