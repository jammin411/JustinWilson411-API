const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    Title: {
        type: String
    },
    Company: {
        type: String
    },
    FromDate: {
        type: Date
    },
    ToDate: {
        type: String
    },
    DescriptionBullets: {
        Description: {
            type: String
        },
        Bullets: {
            type: [
                String
            ]
        }
    }
});

module.exports = mongoose.model('Experiences', experienceSchema, "Experience");

