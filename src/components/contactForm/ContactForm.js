import React from "react";

/* const pattern = "/^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$/i";  */
export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required></input>

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          /* pattern={pattern} */
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          required></input>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required></input>

        <input type="submit"></input>
      </form>
    </>
  );
};
