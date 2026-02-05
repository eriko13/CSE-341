const router = require('express').Router();
const contactsController = require('../controllers/index');

const passport = require('passport');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/login', passport.authenticate('github'), (req, res) => { });

router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

// Defines the route for getting all contacts
router.get('/', contactsController.getAll);

// Defines the route for getting a single contact
router.get('/:id', contactsController.getSingle);

// Defines the route for creating a new contact
router.post('/', isAuthenticated, contactsController.addContact);

// Defines the route for updating a contact
router.put('/:id', isAuthenticated, contactsController.updateContact);

// Defines the route for deleting a contact
router.delete('/:id', isAuthenticated, contactsController.deleteContact);

module.exports = router;