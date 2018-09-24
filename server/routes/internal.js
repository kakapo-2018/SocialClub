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

// router.post('/newpost', (req, res) => {
//   const category = req.body.category;
//   const title = req.body.title;
//   const content = req.body.content;
//   const created = req.body.created;

//   accessDB.postNewPost()
// })

module.exports = router;
