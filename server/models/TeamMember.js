const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    links: {
        linkedin: {
            type: String,
        },
        github: {
            type: String,
        },
        instagram: {
            type: String,
        },
        twitter: {
            type: String,
        },
    },
    team: {
        type: String,
    },
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);
