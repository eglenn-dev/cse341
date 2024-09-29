const contactsModel = require('../models/contactsModel');
const contactsController = [];

contactsController.getAllContacts = async (req, res) => {
    const contactData = await contactsModel.getAllContacts();
    res.send(contactData);
}

contactsController.getContactById = async (req, res) => {
    const contactData = await contactsModel.getContactById(req.params.id);
    res.send(contactData);
}

module.exports = contactsController;