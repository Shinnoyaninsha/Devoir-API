const mongoose = require('mongoose');

const postsSchema = mongoose.Schema({
  author: { type: Number, required: true },
  content: { type: String, required: true },
 });

module.exports = mongoose.model('Posts', postsSchema);