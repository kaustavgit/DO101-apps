var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello World Mars!\n');
});

app.get('/ocp', function (req, res) {
  res.send('I am adding it to test that I am able to modify code, re build and deploy to OCP successfully.\n');
});

app.get('/ocpwh', function (req, res) {
  res.send('I am adding it to test that I am able to modify code, re build and deploy to OCP successfully using Webhooks.\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

