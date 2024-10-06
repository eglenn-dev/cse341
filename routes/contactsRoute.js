const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');
const mainController = require('../controllers/mainController');

router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getContactById);
router.post('/', contactsController.addContact);
router.put('/:id', contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);
router.use(mainController.notFoundError);

module.exports = router;