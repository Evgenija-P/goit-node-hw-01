const contacts = require("./contacts");
const yargs = require("yargs");
// const argv = require("yargs").argv;
const { hideBin } = require("yargs/helpers");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      console.table(contactsList);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      // if (!contact) {
      //   throw new Error("Sorry, this contact not found");
      // }
      console.table(contact);
      break;

    case "add":
      const contactsAdd = await contacts.addContact({ name, email, phone });
      console.table(contactsAdd);
      break;

    case "remove":
      const contactRemove = await contacts.removeContact(id);
      console.table(contactRemove);
      break;

    case "update":
      const contactUpdate = await contacts.updateContact(id, {
        name,
        email,
        phone,
      });
      // if (!contactUpdate) {
      //   throw new Error("Sorry, this contact not found");
      // }
      console.table(contactUpdate);
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

// invokeAction({
//   action: "remove",
//   id: "m4cUz-dsa",
// });

// invokeAction({
//   action: "update",
//   id: "m4cUz-dsa",
//   name: "Eva Norton",
//   email: "Eva@mail.com",
//   phone: "(123) 45-67-890",
// });

const action = hideBin(process.argv);
const { argv } = yargs(action);
// console.log(argv);

invokeAction(argv);
