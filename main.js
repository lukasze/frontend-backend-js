const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8080;

const list = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let simpleLogger = (req, res, next) => {
    console.log("%s %s %s", req.method, req.path, req.body);
    next();
  };
  
app.use(simpleLogger);



app.post('/api/comment', function (req, res) {
    list.push(req.body);
    res.send(req.body);
});
app.get('/api/comment/list', function (req, res) {
    res.send(list);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
