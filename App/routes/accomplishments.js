var express = require('express');
var router = express.Router();
const AccomplishmentModel = require('../models/AccomplishmentModel')

/* GET home page. */
router.get('/', async (req, res, next) => {
  //connect to mongodb
  try {
    await AccomplishmentModel.find({}, (err, docs) => {
      if(err) throw err;

      res.status(200).json(docs);
    })
  } catch (error) {
    res.status(500).send(error);
  }  
});

module.exports = router;