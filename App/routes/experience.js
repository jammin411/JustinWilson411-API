var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb');

/* GET home page. */
router.get('/', async (req, res, next)  => {
  //connect to mongodb
  try {
    MongoClient.connect(process.env.MONGODBCONN, async (err, client) => {
        if (err) throw err;
    
        var db = client.db("Jammin411");
        db.collection("Experience").find().toArray(async (err, result) => {
          if (err) throw err;
    
          res.send(result);
        })
      });
  } catch (error) {
      res.status(500).send(error);
  }
  
});

module.exports = router;