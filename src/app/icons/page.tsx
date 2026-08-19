import type { Metadata } from "next";
import { icons } from "@/lib/icons";

export const metadata: Metadata = { title: "Saints and Icons" };

export default function IconsPage() {
  return (
    <>
      <h2>SAINTS / INSTRUMENTS OF MATA</h2>
      <p className="center">
        These lives are instruments or partial appearance of the Mother.
      </p>
      <table className="poster">
        <thead>
          <tr>
            <th>Name</th>
            <th>Years</th>
            <th>Relation</th>
            <th>Seva</th>
          </tr>
        </thead>
        <tbody>
          {icons.map((icon) => (
            <tr key={icon.name}>
              <td>
                <b>{icon.name}</b>
                <br />
                {icon.role}
              </td>
              <td>{icon.years}</td>
              <td>{icon.relation}</td>
              <td>{icon.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
