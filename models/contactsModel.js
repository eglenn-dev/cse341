require('dotenv').config();
const process = require('process');
const { MongoClient, ObjectId } = require('mongodb');

const contactsModel = [];

contactsModel.getAllContacts = async () => {
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.1nwrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri);
    let contactsData;
    try {
        await client.connect();
        const database = client.db('contacts');
        const contacts = database.collection('contacts');
        contactsData = await contacts.find().toArray();
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    return contactsData;
}

contactsModel.getContactById = async (id) => {
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.1nwrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri);
    let contactData;
    try {
        await client.connect();
        const database = client.db('contacts');
        const contacts = database.collection('contacts');
        contactData = await contacts.findOne({ _id: new ObjectId(id) });
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    return contactData;
}

contactsModel.addContact = async (contact) => {
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.1nwrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri);
    let contactData;
    try {
        await client.connect();
        const database = client.db('contacts');
        const contacts = database.collection('contacts');
        contactData = await contacts.insertOne(contact);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    return contactData;
}

contactsModel.updateContact = async (id, contact) => {
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.1nwrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri);
    let contactData;
    try {
        await client.connect();
        const database = client.db('contacts');
        const contacts = database.collection('contacts');
        contactData = await contacts.updateOne({ _id: new ObjectId(id) }, { $set: contact });
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    return contactData;
}

contactsModel.deleteContact = async (id) => {
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.1nwrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri);
    let contactData;
    try {
        await client.connect();
        const database = client.db('contacts');
        const contacts = database.collection('contacts');
        contactData = await contacts.deleteOne({ _id: new ObjectId(id) });
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    return contactData;
}

module.exports = contactsModel;