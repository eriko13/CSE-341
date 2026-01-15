const router = require('express').Router();
const contactsController = require('../controllers/index');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

module.exports = router;