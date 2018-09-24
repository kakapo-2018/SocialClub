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

router.post('/newpost', (req, res) => {
  let data = req.body
  accessDB.postNewPost(data)
  .then(posts => {
    res.json(posts)
  })
})

module.exports = router;
