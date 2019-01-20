const Admin = require('../models/admin.model');
const jwt = require('jsonwebtoken');
const wrap = require('./asyncHandler.middleware');

module.exports = wrap(async (req, res, next) => {
    if (req.cookies.Token === undefined || req.cookies.Token === null) {
        req.user = null;
        return next();
    } else {
        const token = req.cookies.Token;
        const aid = jwt.decode(token, process.env.SECRET)._id;
        const admin = await Admin.findById(aid).exec();
        req.admin = admin;
        res.locals.admin = admin;
        return next();
    }
})