import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import ContactManager from "./contact_manager";
import AddContact from "./add_contact";
import ContactList from "./contact_list";
import ContactCard from "./contact_card";

const App = () => {
  const LOCAL_STORAGE_KEY = "Contacts";
  const [Contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    const newContact = { ...contact, id: uuid() };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContactHandler = (id) => {
    const newContactList = Contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (retrievedContacts && JSON.stringify(retrievedContacts) !== JSON.stringify(Contacts)) {
      setContacts(retrievedContacts);
    }
  }, []); // Empty dependency array to run only once when the component mounts

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Contacts));
  }, [Contacts]);

  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
      <ContactManager />
      <div style={{ marginTop: '40px' }}>
        <AddContact addContactHandler={addContactHandler} />
      </div>
      <ContactList Contacts={Contacts} onDelete={deleteContactHandler} />
    </div>
  );
};

export default App;
