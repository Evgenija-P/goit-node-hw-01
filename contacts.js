const contactsPath = require("./db/contacts.json");

// console.log(contactsPath);

const fs = require("fs").promises;

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile("./db/contacts.json")
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message));
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  contactsPath,
  listContacts,
};
