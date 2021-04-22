const mongoose = require('mongoose');

const accomplishmentSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    Header: {
      type: String
    },
    Description: {
      type: String
    }
  });

module.exports = mongoose.model('Accomplishments', accomplishmentSchema, 'Accomplishments');

