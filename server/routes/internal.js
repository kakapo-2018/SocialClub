const router = require('express').Router();
const accessDB = require('../db/db');


router.get('/:category', (req, res) => {
  accessDB.postsCategory(req.params.category)
  .then(posts => {
    res.json(posts)
  })
});

module.exports = router;
