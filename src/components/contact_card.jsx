import React from "react";
import user from '../images/user.png';

const ContactCard = (props) => {
  const { id, name, email, onDelete } = props.Contact || {};

  const handleDeleteClick = () => {
    if (typeof props.onDelete === 'function') {
      props.onDelete(id);
    } else {
      console.error('onDelete is not a function');
    }
  };
  

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <div className="right floated content">
        <button
          className="ui button red"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
