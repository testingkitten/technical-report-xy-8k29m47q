import type { Metadata } from "next";
import { specialDays } from "@/lib/practices";

export const metadata: Metadata = { title: "Blue Calendar" };

export default function CalendarPage() {
  return (
    <>
      <h2>BLUE CALENDAR</h2>
      <table className="poster">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Puja</th>
          </tr>
        </thead>
        <tbody>
          {specialDays.map((day) => (
            <tr key={day.name}>
              <td>{day.date}</td>
              <td>
                <b>{day.name}</b>
              </td>
              <td>{day.work}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
