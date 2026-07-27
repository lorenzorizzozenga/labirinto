import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Progetti — Labirinto",
};

type Project = {
  name: string;
  year: string;
  services: string[];
  client: string;
  creature: string;
};

const projects: Project[] = [
  {
    name: "Progetto",
    year: "2025",
    services: ["Foto", "Video"],
    client: "VAF",
    creature: "—",
  },
  {
    name: "Sburoduro",
    year: "2026",
    services: ["Video"],
    client: "Muve",
    creature: "—",
  },
  {
    name: "Fatto a Mano",
    year: "2026",
    services: ["Video"],
    client: "FDMS",
    creature: "Federico Malvestio",
  },
];

const columns = ["Progetto", "Data", "Servizio", "Cliente", "Creature"];

function CaretDown() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className="inline-block ml-1 text-zinc-400"
      aria-hidden
    >
      <path
        d="M2 4l3 3 3-3"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Progetti() {
  return (
    <>
      <PageHeader title="PROGETTI" />
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
                  <CaretDown />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.name} className="align-top">
                <td className="py-4 pr-4">{p.name}</td>
                <td className="py-4 pr-4">{p.year}</td>
                <td className="py-4 pr-4">
                  <div className="flex flex-wrap gap-2">
                    {p.services.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center rounded-full border border-zinc-300 px-2.5 py-0.5 text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 pr-4">{p.client}</td>
                <td className="py-4 pr-4">{p.creature}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
