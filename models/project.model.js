const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  date: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  repoLink: { type: String },
  liveLink: { type: String },
  image: { type: String },
});

module.exports = mongoose.model('Project', ProjectSchema);
