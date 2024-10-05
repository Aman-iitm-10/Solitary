const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

const {
    createEvent,
    deleteEvent,
    updateEvent,
    getAllEvents,
} = require('../controllers/Event');

router.post('/createEvent', auth, createEvent);
router.post('/updateEvent', auth, updateEvent);

router.get('/events', getAllEvents);

router.delete('/deleteEvent', auth, deleteEvent);

module.exports = router;
