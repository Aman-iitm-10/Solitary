const mongoose = require('mongoose');

const clubsAndSocietiesSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    },
});

module.exports = mongoose.model('ClubsandSocieties', clubsAndSocietiesSchema);
