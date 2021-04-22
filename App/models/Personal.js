const mongoose = require('mongoose');

const personalSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    FirstName: {
        type: String
    },
    MiddleName: {
        type: String
    },
    LastName: {
        type: String
    },
    TagLine1: {
        type: String
    },
    TagLine2: {
        type: String
    },
    TagLine3: {
        type: String
    },
    Credentials: {
        type: String
    },
    Social: {
        LinkedIn: {
            URL: {
                type: String
            },
            DisplayName: {
                type: String
            }
        },
        Twitter: {
            URL: {
                type: String
            },
            DisplayName: {
                type: String
            }
        }
    }
});

module.exports = mongoose.model('Personals', personalSchema, "Personal");