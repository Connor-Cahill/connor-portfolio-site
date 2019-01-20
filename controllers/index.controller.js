const Project = require('../models/project.model');
const wrap = require('../middleware/asyncHandler.middleware');

module.exports = function(app) {
  //  GET: renders home page
  app.get('/', wrap(async (req, res) => {
    const projects = await Project.find({}).exec();
    return res.render('home', { projects });
  }));
}