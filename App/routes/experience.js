var express = require('express');
var router = express.Router();
const ExperienceModel = require('../models/ExperienceModel')

/* GET home page. */
router.get('/', async (req, res, next)  => {
  try {
    await ExperienceModel.find({}, (err, docs) => {
      if(err) throw err;

      res.status(200).json(docs);
    })
  } catch (error) {
      res.status(500).send(error);
  }
  
});

module.exports = router;