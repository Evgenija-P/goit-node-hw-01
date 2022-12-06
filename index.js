const contacts = require("./contacts");
// const { v4 } = require("uuid");
const argv = require("yargs").argv;

const updateContactData = {
  name: "Eva Norton",
  email: "Eva@mail.com",
  phone: "(123) 45-67-890",
};

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      console.log(contactsList);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      if (!contact) {
        throw new Error("Sorry, this contact not found");
      }
      console.log(contact);
      break;

    case "add":
      const contactsAdd = await contacts.addContact({ name, email, phone });
      console.log(contactsAdd);
      break;

    case "remove":
      const contactRemove = await contacts.removeContact(id);
      console.log(contactRemove);
      break;

    case "update":
      const contactUpdate = await contacts.updateContact(id, {
        name,
        email,
        phone,
      });
      if (!contactUpdate) {
        throw new Error("Sorry, this contact not found");
      }
      console.log(contactUpdate);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({
//   action: "add",
//   name: "Eva Norton",
//   email: "Eva@mail.com",
//   phone: "(123) 45-67-89",
// });

invokeAction({
  action: "remove",
  id: "m4cUz-dsa",
});

// invokeAction({
//   action: "update",
//   id: "m4cUz-dsa",
//   name: "Eva Norton",
//   email: "Eva@mail.com",
//   phone: "(123) 45-67-890",
// });
