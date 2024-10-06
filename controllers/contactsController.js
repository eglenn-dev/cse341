const contactsModel = require('../models/contactsModel');
const contactsController = [];

contactsController.getAllContacts = async (req, res) => {
    const contactData = await contactsModel.getAllContacts();
    res.status(200).send(contactData);
}

contactsController.getContactById = async (req, res) => {
    const contactData = await contactsModel.getContactById(req.params.id);
    if (!contactData) {
        res.status(404).send({ message: 'Contact not found' });
    } else {
        res.status(200).send(contactData);
    }
}

contactsController.addContact = async (req, res) => {
    const contactData = await contactsModel.addContact(req.body);
    res.status(201).send(contactData);
}

contactsController.updateContact = async (req, res) => {
    const contactData = await contactsModel.updateContact(req.params.id, req.body);
    res.status(204).send(contactData);
}

contactsController.deleteContact = async (req, res) => {
    const contactData = await contactsModel.deleteContact(req.params.id);
    res.status(200).send(contactData);
}

module.exports = contactsController;