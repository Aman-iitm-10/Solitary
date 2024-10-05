const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        eventType: {
            type: String,
            required: true,
        },
        organization: {
            type: [String],
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
