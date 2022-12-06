const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "/db/contacts.json");
const findId = "68f44145-4eb8-486a-a52f-91dc397cb57a";

const newContact = {
  name: "Eva Norton",
  email: "Eva@mail.com",
  phone: "(123) 45-67-89",
};

const updateContactData = {
  name: "Eva Norton",
  email: "Eva@mail.com",
  phone: "(123) 45-67-890",
};

// TODO: задокументировать каждую функцию
async function listContacts() {
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data);
      console.log(contacts);
      return contacts;
    })
    .catch((e) => console.log(e.message));
}

async function getContactById(contactId) {
  fs.readFile(contactsPath)
    .then((data) => {
      const contactFind = JSON.parse(data).find(
        (contact) => contact.id === contactId
      );
      console.log(contactFind);
      return contactFind;
    })
    .catch((e) => console.log(e.message));
}

function removeContact(contactId) {
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data);
      const idFind = contacts.findIndex((contact) => contact.id === contactId);
      const [contacrResult] = contacts.splice(idFind, 1);
      fs.writeFile(contactsPath, JSON.stringify(contacts));
      return contacrResult;
    })
    .catch((e) => console.log(e.message));
}

async function addContact(contactNew) {
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data);
      contacts.push({ id: v4(), ...contactNew });
      console.log(contacts);
      fs.writeFile(contactsPath, JSON.stringify(contacts));
      return contacts;
    })
    .catch((e) => console.log(e.message));
}

function updateContact(id, updateData) {
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data);
      const idFind = contacts.findIndex((contact) => contact.id === id);
      contacts[idFind] = { id, ...updateData };
      fs.writeFile(contactsPath, JSON.stringify(contacts));
      console.log(contacts[idFind]);
      return contacts[idFind];
    })
    .catch((e) => console.log(e.message));
}

module.exports = {
  listContacts,
  addContact,
  getContactById,
  removeContact,
};

// listContacts();
// getContactById(findId);
addContact(newContact);
// addContact("./db/contacts.json", ["eva", "eva@gmail.com", `123456789`]);
