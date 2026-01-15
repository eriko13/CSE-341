const router = require('express').Router();
const { initDatabase } = require('./data/database');

router.get('/', async (req, res) => {
    db = await initDatabase();
    const collection = db.collection('Contacts');
    const docs = await collection.find().toArray();
    res.json(docs);
});

module.exports = router;