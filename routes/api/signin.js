// User Model
const User = require('../../models/User');
// UserSession Model
const UserSession = require('../../models/UserSession');

module.exports = (app) => {
  // Sign up action
  app.post('/api/account/signup', (req, res, next) => {
    const { body } = req;
    console.log('body', body);
    const {
      firstName,
      lastName,
      password
    } = body;
    let {
      email
    } = body;

    if (!firstName) {
      return res.end({
        succes: false,
        message: 'Error: First Name cannot be blank.'
      });
    }
    if (!lastName) {
      return res.end({
        succes: false,
        message: 'Error: Lasst Name cannot be blank.'
      });
    }
    if (!email) {
      return res.end({
        succes: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if (!password) {
      return res.end({
        succes: false,
        message: 'Error: Password Name cannot be blank.'
      });
    }


    email = email.toLowerCase();

    // Signup steps:
    // 1. Verify email does not already exist
    // 2. Save
    User.find({
      email: email
    }, (err, previousUsers) => {
      if (err) {
        return res.end({
          success: false,
          message: 'Error: Server Error '
        });
      } else if (previousUsers.length > 0) {
        return res.end({
          success: false,
          message: 'Error: Email already signed up.'
        });
      }

      // Save the new user:
      const newUser = new User();

      newUser.email = email;
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          return res.end({
            success: false,
            message: 'Error: Server Error '
          });
        }
        return res.end({
          success: true,
          message: 'Successful Sign-up! '
        });
      });

    });
  });

  app.post('/api/account/signin', (req, res, next) => {
    const { body } = req;
    const {
      password
    } = body;
    let {
      email
    } = body;

    if (!email) {
      return res.end({
        succes: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if (!password) {
      return res.end({
        succes: false,
        message: 'Error: Password Name cannot be blank.'
      });
    }


    email = email.toLowerCase();

    // Check if user and password match:
    User.find({
      email: email
    }, (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: server error.'
        });
      }
      // if it finds 0 users with those credentials:
      if (user.length != 1) {
        return res.send({
          success: false,
          message: 'Error: No user found.'
        });
      }

      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: 'Error: Invalid password.'
        });
      }

      // If pass all checks above, create UserSession
      const UserSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: server error.'
          });
        }

        return res.send({
          sucess: true,
          message: 'Valid sign in',
          token: doc._id
        });
      });


    });
  });

  app.post('/api/account/verify', (req, res, next) => {
    // Steps to verify:
    // Get the token
    const { query } = req;
    const { token } = query;


    // Verify that toke nin unique and not deleted
    UserSession.find({
      _id: token,
      isDeleted: false
    }, (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error.'
        });
      }

      if (sessions.length !=1) {
        return res.send({
          success: false,
          message: 'Error: Invalid.'
        });
      } else {
        return res.send({
          success: true,
          message: 'Session created successfully.'
        });
      }

    });
  });

  app.post('/api/account/logout', (req, res, next) => {
    // Steps to verify:
    // Get the token
    const { query } = req;
    const { token } = query;


    // Verify that toke nin unique and not deleted
    UserSession.findOneAndUpdate({
      _id: token,
      isDeleted: false
    }, {
      $set: {
        isDeleted:true
      }
    }, null, (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error.'
        });
      }

      return res.send({
        success: true,
        message: 'Session created successfully.'
      });

    });
  });
};
