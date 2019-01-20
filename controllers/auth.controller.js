const Admin = require('../models/admin.model');
const jwt = require('jsonwebtoken');
const wrap = require('../middleware/asyncHandler.middleware');

module.exports = (app) => {
  //  POST: Allows me to create an admin
  app.post('/new-admin', wrap(async (req, res) => {
    const admin = new Admin(req.body);
    //  save the new admin
    await admin.save();
    return res.sendStatus(200);
  }));

  //  POST: Signs admin in
  app.post('/admin', wrap(async (req, res) => {
    const admin = await Admin.findOne({ username: req.body.username}, 'username password').exec();
    if (!admin) {
      console.log('You are not an admin');
      return res.redirect('/');
    }
    admin.comparePassword(admin.password, (err, isMatch) => {
      if (!isMatch) {
        console.log('You are not an admin');
        return res.redirect('/');
      }
      return true
    });
    const token = jwt.sign({_id: admin._id}, process.env.SECRET, {expiresIn: '60 days'});
    res.cookie(process.env.COOKIE, token, {maxAge: 24 * 60 * 60 * 1000, httpOnly: true});
    return res.redirect('/admin-dashboard');
  }));
}