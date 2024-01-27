import React from "react";
import ContactCard from "./contact_card";

const ContactList = (props) => {
  const { Contacts, onDelete } = props;

  const RenderContactList = Contacts.map((contact) => (
    <ContactCard key={contact.id} Contact={contact} onDelete={onDelete} />

  ));

  return <div className="ui relaxed divided list">{RenderContactList}</div>;
};

export default ContactList;
