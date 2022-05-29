const express = require("express"),
      http = require('http'),
      api = require('./api/apiRouter'),
      app = express();

var server;

/*use middlewares */

app.use('/api', api);

app.get('/', function (req, res) {
    res.send('Hello');
});

server = http.createServer(app);
server.listen(8081, function () {
  console.log("Server ready");
})
