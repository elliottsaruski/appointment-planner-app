import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const onChange = props.onChange;
  return (
    <>
      <select onChange={onChange} id="contact-picker">
        <option value="">No Value Chosen</option>
        {contacts?.map((contact, index) => (
          <option value={contact.name} key={index}>
            {" "}
            {contact.name}{" "}
          </option>
        ))}
        ;
      </select>
    </>
  );
};
