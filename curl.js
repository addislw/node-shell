const request = require('request');
// const {done} = require('./bash');

// console.log(done);

module.exports = function (path, done) {
  request.get(`http://${path}`, function(err, res, body) {
    if (err) {
      done(err);
    } else {
      done(body);
    }


  });


}
