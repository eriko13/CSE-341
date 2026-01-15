const { initDatabase } = require('../data/database');
const { ObjectId } = require('mongodb');

const getAll = async (req, res) => {
    const db = await initDatabase();
    const collection = db.collection('Contacts');
    const docs = await collection.find().toArray();
    res.json(docs);
};

const getSingle = async (req, res) => {
    const db = await initDatabase();
    const collection = db.collection('Contacts');
    const doc = await collection.findOne({ _id: new ObjectId(req.params.id) });
    res.json(doc);
};

module.exports = {
    getAll,
    getSingle
};
