const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  current_chapter: {
    type: String,
    required: false
  },
  current_page: {
    type: Number,
    required: false
  },
  total_pages: {
    type: Number,
    required: false
  },
  user_id: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = Book = mongoose.model('book', BookSchema);
