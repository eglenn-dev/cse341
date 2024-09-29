const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');
const mainController = require('../controllers/mainController');

router.get('/all', contactsController.getAllContacts);
router.get('/:id', contactsController.getContactById);
router.use(mainController.notFoundError);

module.exports = router;