import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import FadeIn from "../components/FadeIn";
import { StaggerTbody, StaggerTr } from "../components/StaggerTable";

export const metadata: Metadata = {
  title: "Creature — Labirinto",
};

const creature = [
  {
    name: "Federico Malvestio",
    ruolo: "Regia",
    progetti: ["Fatto a Mano"],
  },
  {
    name: "Anna Ferri",
    ruolo: "Fotografia",
    progetti: ["Progetto"],
  },
  {
    name: "Luca Bianchi",
    ruolo: "Sound design",
    progetti: ["Sburoduro"],
  },
];

const columns = ["Nome", "Ruolo", "Progetti"];

export default function Creature() {
  return (
    <>
      <PageHeader title="CREATURE" />
      <FadeIn className="px-4 md:px-8 py-6 overflow-x-auto">
        <table className="w-full text-sm min-w-[480px]">
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
          <StaggerTbody>
            {creature.map((c) => (
              <StaggerTr key={c.name} className="align-top">
                <td className="py-4 pr-4">{c.name}</td>
                <td className="py-4 pr-4 text-zinc-600">{c.ruolo}</td>
                <td className="py-4 pr-4 text-zinc-600">
                  {c.progetti.join(", ")}
                </td>
              </StaggerTr>
            ))}
          </StaggerTbody>
        </table>
      </FadeIn>
    </>
  );
}
