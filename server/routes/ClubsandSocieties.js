const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

const {
    createClub,
    deleteClub,
    updateClub,
    getAllClubs,
} = require('../controllers/ClubsandSocieties');

router.post('/createClub', auth, createClub);
router.post('/updateClub', auth, updateClub);

router.get('/clubs', getAllClubs);

router.delete('/deleteClub', auth, deleteClub);

module.exports = router;
