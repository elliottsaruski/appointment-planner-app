import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form id="appointment-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={({ target }) => setTitle(target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          min={getTodayString()}
          type="date"
          id="date"
          onChange={({ target }) => setDate(target.value)}
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          onChange={({ target }) => setTime(target.value)}
        />
        <label htmlFor="contact-picker">Contact</label>
        <ContactPicker
          contacts={contacts}
          onChange={({ target }) => setContact(target.value)}
        />
        <input type="submit" id="submit" />
      </form>
    </>
  );
};
