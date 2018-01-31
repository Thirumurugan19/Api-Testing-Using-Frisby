const frisby = require('frisby');

it ('GET should return a status of 200 OK', function (done) {
  frisby
    .get('https://edgy-monkey-pr-1923.herokuapp.com/api/v2/users/login')
    .inspectJSON()
    .done(done);
});

it ('Should get content type', function (done) {
  frisby
    .get('https://edgy-monkey-pr-1923.herokuapp.com/api/v2/users/login')
    .inspectHeaders()
    .done(done);
});
