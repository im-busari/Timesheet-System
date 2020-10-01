const rfs = require('rotating-file-stream');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const constants = require('./config/env');
const server = express();

// TODO: remove isAuth
const isAuth = require('./middlewares/isAuth');

const PORT = constants.PORT || 4000;

//  Logging requests
let accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log'),
});

server.use(
  morgan('combined', {
    stream: accessLogStream,
  })
);
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
server.use(bodyParser.json());

//  Routes
server.get('/', (req, res) => {
  res.send('Routing works');
});
server.use('/example', isAuth, require('./routes/example'));
server.use('/users', require('./routes/users'));

console.log(`Your SERVER: ${process.env.NODE_ENV}`);

switch (process.env.NODE_ENV) {
  case 'test':
    module.exports = server;
    break;
  case 'development':
    server.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
    break;
  default:
    server.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
    break;
}
