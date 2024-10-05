const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

const {
    addMember,
    deleteMember,
    updateMember,
    getAllMembers,
} = require('../controllers/TeamMember');

router.post('/createMember', auth, addMember);
router.post('/updateMember', auth, updateMember);

router.get('/members', getAllMembers);

router.delete('/deleteMember', auth, deleteMember);

module.exports = router;
