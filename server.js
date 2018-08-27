const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require('./routes/api/users');
const signin = require('./routes/api/signin'); // old?
// const books = require('./routes/api/books');
const books = require('./routes/books');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Passport middleware:
app.use(passport.initialize());

// Passport config
require('./config/passport.js')(passport);

// Use Routes:
// app.use('/account/signin', signin);
app.use('/api/users', users);
app.use('/api/books', books);
// for the Rails backend:
// app.use('/books', books);

// For Heroku: Serve static assets if we're in production:
if(process.env.NODE_ENV === 'production') {
  // Set static folder:
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
