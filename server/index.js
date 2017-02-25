var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config/config');
var sendgrid = require('sendgrid')(config.emailKey);
var app = express();



app.use(bodyParser.json());
app.use(express.static(__dirname + '/../app'));

app.post('/api/sendemail', function(req, res) {
  console.log('received', req.body);
  var emailBody = req.body;
  var email = new sendgrid.Email({
    to: config.email,
    from: 'cleberalbuquerque.com',
    subject: 'Email from cleberalbuquerque.com',
    text: 'Name: ' + emailBody.name + ', email: ' + emailBody.email +
      ', message: ' + emailBody.message
  });
  sendgrid.send(email, function(err, json) {
    if (err) {
      return res.send(
        'I am sorry, but we are having problems sending your email');
    }
    console.log(json);
    res.send(
      'Thank you for contacting me! I will get back to you soon.');
  });
});


var port = 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
