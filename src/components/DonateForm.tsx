"use client";

import { useState, type FormEvent } from "react";

export function DonateForm() {
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("offering", Object.fromEntries(new FormData(event.currentTarget)));
    setDone(true);
  }

  if (done) {
    return (
      <div className="yellow-box">
        <b>Offering noted.</b> Live payment not connected. Mail
        offerings@dalitmata.com for account details.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <p>
        Name
        <br />
        <input name="donor" required />
      </p>
      <p>
        Amount (Rs)
        <br />
        <select name="amount">
          <option>51</option>
          <option>101</option>
          <option>501</option>
          <option>1100</option>
          <option>2501</option>
        </select>
      </p>
      <button className="orange-btn" type="submit">
        OFFER NOW
      </button>
    </form>
  );
}
