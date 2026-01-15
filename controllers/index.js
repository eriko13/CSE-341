const { initDatabase } = require('../data/database');
const { ObjectId } = require('mongodb');

// Defines the controller for getting all contacts
const getAll = async (req, res) => {
    const db = await initDatabase();
    const collection = db.collection('Contacts');

    // Gets all the contacts from the database
    const docs = await collection.find().toArray();

    res.json(docs);
};

// Defines the controller for getting a single contact
const getSingle = async (req, res) => {
    const db = await initDatabase();
    const collection = db.collection('Contacts');

    // Gets the single contact from the database
    const doc = await collection.findOne({ _id: new ObjectId(req.params.id) });
    
    res.json(doc);
};

module.exports = {
    getAll,
    getSingle
};
