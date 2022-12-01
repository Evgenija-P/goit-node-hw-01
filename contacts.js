const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "/db/contacts.json");
const findId = "9";

const newContact = {
  name: "Eva Norton",
  email: "Eva@mail.com",
  phone: "(123) 45-67-89",
};

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data);
      console.log(contacts);
      return contacts;
    })
    .catch((e) => console.log(e.message));
}

function getContactById(contactId) {
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
  // ...твой код
}

function addContact(contactNew) {
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

module.exports = {
  listContacts,
};

// listContacts();
// getContactById(findId);
addContact(newContact);
// addContact("./db/contacts.json", ["eva", "eva@gmail.com", `123456789`]);
