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
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'Invalid contact ID' });
    }
    const db = await initDatabase();
    const collection = db.collection('Contacts');

    // Gets the single contact from the database
    const doc = await collection.findOne({ _id: new ObjectId(req.params.id) });

    res.json(doc);
};

// Defines the controller for creating a new contact
const addContact = async (req, res) => {
    const db = await initDatabase();
    const collection = db.collection('Contacts');

    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    // Validates that all required fields are provided
    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
        return res.status(400).json({ error: 'All fields are required: firstName, lastName, email, favoriteColor, birthday' });
    }

    // Creates a new contact object
    const newContact = {
        firstName,
        lastName,
        email,
        favoriteColor,
        birthday
    };

    // Inserts the new contact into the database
    const result = await collection.insertOne(newContact);

    res.status(201).json({ id: result.insertedId });
};

// Defines the controller for updating a contact
const updateContact = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'Invalid contact ID' });
    }
    const db = await initDatabase();
    const collection = db.collection('Contacts');

    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    const contactId = req.params.id;

    // Validates that all required fields are provided
    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
        return res.status(400).json({ error: 'All fields are required: firstName, lastName, email, favoriteColor, birthday' });
    }

    // Creates the updated contact object
    const updatedContact = {
        firstName,
        lastName,
        email,
        favoriteColor,
        birthday
    };

    // Updates the contact in the database
    const result = await collection.replaceOne(
        { _id: new ObjectId(contactId) },
        updatedContact
    );

    // Checks if the contact was found and updated
    if (result.matchedCount === 0) {
        return res.status(404).json({ error: 'Contact not found' });
    }

    res.status(204).send();
};

// Defines the controller for deleting a contact
const deleteContact = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'Invalid contact ID' });
    }
    const db = await initDatabase();
    const collection = db.collection('Contacts');

    const contactId = req.params.id;

    // Deletes the contact from the database
    const result = await collection.deleteOne({ _id: new ObjectId(contactId) });

    // Checks if the contact was found and deleted
    if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Contact not found' });
    }

    res.status(200).send();
};

module.exports = {
    getAll,
    getSingle,
    addContact,
    updateContact,
    deleteContact
};
