import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Studio — Labirinto",
};

export default function Studio() {
  return (
    <>
      <PageHeader title="STUDIO" />
      <div className="px-8 py-10 max-w-2xl">
        <div className="flex flex-col gap-6 text-sm leading-7 text-zinc-700">
          <p>
            Labirinto è uno studio creativo con sede a Venezia. Progettiamo
            immagini, video e identità visive per brand, istituzioni culturali e
            persone.
          </p>
          <p>
            Il nostro approccio parte dall&apos;ascolto: ogni progetto è un
            percorso da costruire insieme al cliente, fatto di scelte,
            deviazioni e scoperte.
          </p>
          <p>
            Collaboriamo con una rete di autori, fotografi, registi e musicisti
            — le nostre creature — che portano competenze specifiche a ciascun
            progetto.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="text-xs font-bold tracking-wider text-zinc-500 uppercase mb-3">
              Sede
            </h3>
            <p className="text-zinc-700">
              Calle dei Boteri 1234
              <br />
              30125 Venezia, IT
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-wider text-zinc-500 uppercase mb-3">
              Fondato
            </h3>
            <p className="text-zinc-700">2024</p>
          </div>
        </div>
      </div>
    </>
  );
}
