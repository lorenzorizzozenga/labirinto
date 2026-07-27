import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Servizi — Labirinto",
};

const services = [
  {
    name: "Video",
    description: "Produzione video, dallo shooting al montaggio.",
    progetti: 8,
  },
  {
    name: "Foto",
    description: "Fotografia still-life, ritratto e reportage.",
    progetti: 5,
  },
  {
    name: "Direzione artistica",
    description: "Concept, moodboard e supervisione creativa.",
    progetti: 4,
  },
  {
    name: "Post-produzione",
    description: "Color grading, editing e VFX.",
    progetti: 6,
  },
];

const columns = ["Servizio", "Descrizione", "Progetti"];

export default function Servizi() {
  return (
    <>
      <PageHeader title="SERVIZI" />
      <div className="px-8 py-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200">
              {columns.map((col) => (
                <th
                  key={col}
                  className="text-left pb-4 text-xs font-bold tracking-wider text-zinc-500 uppercase"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.name} className="align-top">
                <td className="py-4 pr-4 w-56">{s.name}</td>
                <td className="py-4 pr-4 text-zinc-600">{s.description}</td>
                <td className="py-4 pr-4 w-24">{s.progetti}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
