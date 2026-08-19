"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("contact", Object.fromEntries(new FormData(event.currentTarget)));
    setDone(true);
  }

  if (done) {
    return (
      <div className="yellow-box">
        <b>Message sent to Mata temple office.</b>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <p>
        Name
        <br />
        <input name="name" required style={{ width: "100%" }} />
      </p>
      <p>
        Email
        <br />
        <input name="email" type="email" style={{ width: "100%" }} />
      </p>
      <p>
        Message
        <br />
        <textarea name="message" required rows={5} style={{ width: "100%" }} />
      </p>
      <button className="orange-btn" type="submit">
        SEND
      </button>
    </form>
  );
}
