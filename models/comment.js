const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
  content: { type: String, required: true },
  author: { type: Number, required: true },
  post: { type: Number, required: true },
});

module.exports = mongoose.model('Comments', commentsSchema);