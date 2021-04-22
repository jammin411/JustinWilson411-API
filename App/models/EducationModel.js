const mongoose = require('mongoose');

const educationSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    School: {
      type: String
    },
    Degree: {
      type: String
    },
    FromDate: {
      type: Date
    },
    ToDate: {
      type: Date
    },
    Description: {
      type: String
    }
  });

module.exports = mongoose.model('Educations', educationSchema, 'Education');

