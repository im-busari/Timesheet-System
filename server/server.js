const rfs = require('rotating-file-stream');
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const constants = require('./config/env');
const db = require('./models/index');
const server = express();
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
server.use(cookieParser());

server.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// initialize express-session to allow us track the logged-in user across sessions.
server.use(
  session({
    key: 'user_sid',
    secret: constants.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 24 * 60 * 60 * 1000,
    },
  })
);

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
server.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});

//  Routes
server.get('/', (req, res) => {
  res.send('Routing works');
});

server.use('/example', require('./routes/example'));
server.use('/users', require('./routes/users'));
server.use('/timesheets', require('./routes/timesheets'));
server.use('/projects', require('./routes/projects'));

console.log(`Your SERVER: ${process.env.NODE_ENV}`);

//  Run server
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
