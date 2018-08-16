const express = require('express');
const router = express.Router();

// Book Model
const Book = require('../../models/Book');

// @route GET api/books
// @description Get All Books
// @access Public
router.get('/', (req, res) => {
  Book.find()
    // likely don't need this date attribute in our books model
    .sort({ date: -1 })
    .then(books => res.json(books))
});

// @route POST api/books
// @description Create An Book
// @access Public
router.post('/', (req, res) => {
  const newBook = new Book({
    // NOTE: youtuber video at 27min
    name: req.body.name,
    author: req.body.author,
    category: req.body.category,
    current_chapter: req.body.current_chapter,
    current_page: req.body.current_page,
    total_pages: req.body.total_pages
  });

  newBook.save().then(book => res.json(book));
});

// @route DELETE api/books
// @description Delete A Book
// @access Public
router.delete('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => book.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

// @route UPDATE api/books
// @description Edit a Book
// @access Public
router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, book) => {
        if (err) return res.status(500).send(err);
        return res.send(book);
    }
  );
});

module.exports = router;
