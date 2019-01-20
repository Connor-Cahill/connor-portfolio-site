module.exports = (req, res, next) => {
  if(req.admin) {
    return next();
  }
  return res.send('You must be an admin to do that');
}
