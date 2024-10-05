const express = require('express');
const getEvents = require('../connectors/getEvents');
const { deleteInDb, writeToDb } = require('../db/db');

const router = new express.Router();

router.post('/events', async (req, res) => {
    const eventDate = req.body.date;
    const eventLink = req.body.link;
    const eventPoster = req.body.picture;
    const eventDescripion = req.body.description;
    const doc = {
        date: eventDate,
        link: eventLink,
        picture: eventPoster,
        about: eventDescripion,
    };
    const result = await writeToDb(doc, 'solitary', 'events');
    res.send('Event created!');
});

router.get('/events', async (req, res) => {
    res.send(await getEvents());
});

router.delete('/events/:id', async (req, res) => {
    const id = req.params.id;
    const result = await deleteInDb(id, 'events');
    res.send('Event Deleted!');
});

router.post('/subscribe', async (req, res) => {
    const email = req.body.mail;
    const doc = { mail: email };
    const result = await writeToDb(doc, 'solitary', 'subscribers');
    res.send('Thank you to subscribe for mail');
});

router.get('/health', (req, res) => {
    res.send('I am awake at port 8000');
});

module.exports = router;
