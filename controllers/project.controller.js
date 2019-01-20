const Project = require('../models/project.model');
const wrap = require('../middleware/asyncHandler.middleware');
const adminAuth = require('../middleware/adminAuth.middleware');

module.exports = (app) => {
  //  POST: allows Connor to add a new project to database:
  app.post('/projects', adminAuth, wrap(async (req, res) => {
    const project = new Project(req.body);
    await project.save();
    res.sendStatus(200);
  }));

  //  DELETE: allows Connor to delete unwanted projects
  app.delete('/projects/:id', adminAuth, wrap(async (req, res) => {
    await Project.findOneAndRemove({ _id: req.params.id }).exec();
    res.sendStatus(200);
  }));

  //  PATCH: allows Connor to update info on projects
  app.patch('/projects/:id', adminAuth, wrap(async (req, res) => {
    const project = await Project.findById(req.params.id).exec();
    project.set(req.body);
    await project.save();
    res.sendStatus(200);
  }));
}
