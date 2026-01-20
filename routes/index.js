const router = require('express').Router();
const contactsController = require('../controllers/index');

// Defines the route for getting all contacts
router.get('/', contactsController.getAll);

// Defines the route for getting a single contact
router.get('/:id', contactsController.getSingle);

// Defines the route for creating a new contact
router.post('/', contactsController.addContact);

// Defines the route for updating a contact
router.put('/:id', contactsController.updateContact);

// Defines the route for deleting a contact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;