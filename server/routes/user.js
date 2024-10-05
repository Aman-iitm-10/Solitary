const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { writeToDb, findInDb, updateInDb } = require('../db/db');
const auth = require('../middleware/auth');

const router = new express.Router();

router.post('/users', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = { email: email, password: hashedPassword, tokens: [] };
    await writeToDb(user, 'solitary', 'users');
    res.send('User registered');
});

router.post('/users/login', async (req, res) => {
    try {
        const filter = { email: req.body.email };
        const user = await findInDb(filter, 'users');
        if (!user) {
            return res.status(403).send('Invalid credentials');
        }
        const isMatched = await bcrypt.compare(
            req.body.password,
            user[0].password
        );
        if (!isMatched) {
            return res.status(403).send('Invalid credentials');
        }
        const token = await jwt.sign({ _id: user[0]._id }, 'newUserToken');
        const tokenArray = user[0].tokens;
        tokenArray.push(token);
        const updatedDoc = { $set: { tokens: tokenArray } };
        await updateInDb({ _id: user[0]._id }, 'users', updatedDoc);
        return res.send(token);
    } catch (e) {
        res.status(400).send();
    }
});

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        const updatedDoc = { $set: { tokens: req.user.token } };
        await updateInDb({ _id: user[0]._id }, 'users', updatedDoc);
        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        const updatedDoc = { $set: { tokens: req.user.token } };
        await updateInDb({ _id: req.user[0]._id }, 'users', updatedDoc);
        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
