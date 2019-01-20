const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true },
});

AdminSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8), null);
  return next();
});

AdminSchema.methods.comparePassword = function comparesPasswordAgainstHash(password, done) {
  bcrypt.compareSync(password, this.password, (err, isMatch) => done(err, isMatch));
};


module.exports = mongoose.model('Admin', AdminSchema);
