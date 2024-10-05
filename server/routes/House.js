const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

const {
    createHouse,
    deleteHouse,
    updateHouse,
    getAllHouse,
} = require('../controllers/House');

router.post('/createHouse', auth, createHouse);
router.post('/updateHouse', auth, updateHouse);

router.get('/houses', getAllHouse);

router.delete('/deleteHouse', auth, deleteHouse);

module.exports = router;
