var express = require('express');

// Create our App
var app = express();
// Heroku will pass the port
const PORT = process.env.PORT || 3000;

// Fix for openweathermap API which only operates on HTTP not HTTPS
// Redirect all HTTPS traffic to HTTP
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);;
  } else {
    next();
  }
});

// Tell which folder to serve
app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
