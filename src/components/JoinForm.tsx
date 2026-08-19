"use client";

import { useState, type FormEvent } from "react";

export function JoinForm() {
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("join", Object.fromEntries(new FormData(event.currentTarget)));
    setDone(true);
  }

  if (done) {
    return (
      <div className="yellow-box">
        <b>JAI DALIT MATA !!! Your name is received in Neel Sangha register.</b>
        <p>Please keep Tuesday vrat and 11 mantra from tomorrow morning.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <table className="poster">
        <tbody>
          <tr>
            <td>Full Name *</td>
            <td>
              <input name="name" required style={{ width: "95%" }} />
            </td>
          </tr>
          <tr>
            <td>Mobile</td>
            <td>
              <input name="mobile" />
            </td>
          </tr>
          <tr>
            <td>Email *</td>
            <td>
              <input name="email" type="email" required />
            </td>
          </tr>
          <tr>
            <td>City / District</td>
            <td>
              <input name="city" />
            </td>
          </tr>
          <tr>
            <td>I want to join as</td>
            <td>
              <select name="intent">
                <option>Neel Bhakt</option>
                <option>Student / Exam sadhak</option>
                <option>Teacher</option>
                <option>Local organiser</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="center">
              <button className="orange-btn" type="submit">
                SUBMIT TO SANGHA
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
