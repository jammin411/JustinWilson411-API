const express = require('express');
const router = express.Router();
const Personal = require('../models/Personal');

router.get('/', async (req, res) => {  
    await Personal.find({}, (err, docs) => {
      if(err) throw err;

      res.status(200).json(docs);
    })
});

module.exports = router;