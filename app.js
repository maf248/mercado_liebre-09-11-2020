const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html')
});

app.listen(8000, function () {
    console.log('Para ver el sitio ingresa a http://localhost:8000')
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/' + req.url)
});