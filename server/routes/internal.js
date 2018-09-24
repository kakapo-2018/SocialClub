const router = require('express').Router();
const accessDB = require('../db/db');


router.get('/:category', (req, res) => {
  accessDB.postsCategory(req.params.category)
  .then(posts => {
    res.json(posts)
  })
});

router.get('/post/:id', (req, res) => {
  accessDB.postsIndividual(req.params.id)
  .then(post => {
    res.json(post)
  })
})

module.exports = router;
