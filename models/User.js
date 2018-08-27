const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // isDeleted: {
  //   type: Boolean,
  //   default: false
  // }
  date: {
    type: Date,
    default: Date.now
  }
});

// UserSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
//
// UserSchema.methods.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };
//
// module.exports = mongoose.model('User', UserSchema);

<<<<<<< HEAD
// module.exports = mongoose.model('User', BookSchema);
module.exports = User = mongoose.model('user', UserSchema);
=======
module.exports = User = mongoose.model('users', UserSchema);
>>>>>>> 5a0ba3dee56c18dc0916ff2dce1e41347dc210c9
