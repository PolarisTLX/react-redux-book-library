const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @description Get All Items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    // likely don't need this date attribute in our books model
    .sort({ date: -1 })
    .then(items => res.json(items))
});

// @route POST api/items
// @description Create An Item
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    // NOTE: youtuber video at 27min
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items
// @description Delete An Item
// @access Public
router.delete('/', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
