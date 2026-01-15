const router = require('express').Router();
const contactsController = require('../controllers/index');

// Defines the route for getting all contacts
router.get('/', contactsController.getAll);

// Defines the route for getting a single contact
router.get('/:id', contactsController.getSingle);

module.exports = router;