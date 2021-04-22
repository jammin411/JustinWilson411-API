var express = require('express');
var router = express.Router();
const EducationModel = require('../models/EducationModel')

/* GET home page. */
router.get('/', async (req, res, next) => {
  //connect to mongodb
  try {
    await EducationModel.find({}, (err, docs) => {
      if(err) throw err;

      res.status(200).json(docs);
    })
  } catch (error) {
    res.status(500).send(error);
  }  
});

module.exports = router;