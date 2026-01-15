const router = require('express').Router();
const { initDatabase } = require('./data/database');
const { ObjectId } = require('mongodb');

router.get('/', async (req, res) => {
    db = await initDatabase();
    const collection = db.collection('Contacts');
    const docs = await collection.find().toArray();
    res.json(docs);
});

router.get('/:id', async (req, res) => {
    db = await initDatabase();
    const collection = db.collection('Contacts');
    const doc = await collection.findOne({ _id: new ObjectId(req.params.id) });
    res.json(doc);
});

module.exports = router;