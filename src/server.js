const express = require("express"),
      http = require('http'),
      dotenv = require('dotenv'),
      api = require('./api/apiRouter'),
      app = express();

dotenv.config();

var server;

/*use middlewares */

app.use('/api', api);

app.get('/', function (req, res) {
    res.send('Hello');
});

server = http.createServer(app);
server.listen(process.env.PORT, function () {
  console.log("Server ready");
})
