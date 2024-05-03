const express = require('express')
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/html/404.html');
});