import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "About — Labirinto",
  description: "Labirinto è uno studio creativo.",
};

export default function About() {
  return (
    <>
      <PageHeader title="ABOUT" />
      <div className="px-8 py-10 max-w-2xl">
        <div className="flex flex-col gap-6 text-sm leading-7 text-zinc-700">
          <p>
            Labirinto è uno studio creativo. Lavoriamo con brand, istituzioni e
            persone che vogliono comunicare con chiarezza in un mondo complesso.
          </p>
          <p>
            Il nome viene dall&apos;idea che ogni progetto è un percorso da
            costruire insieme — non una strada dritta, ma un processo fatto di
            scelte, deviazioni e scoperte. Quello che emerge alla fine è sempre
            più interessante di ciò che si immaginava all&apos;inizio.
          </p>
          <p>
            Facciamo strategia creativa, direzione artistica e comunicazione.
            Preferiamo progetti in cui il contenuto ha qualcosa da dire.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-xs font-bold tracking-wider text-zinc-500 uppercase mb-3">
            Contatti
          </h3>
          <a
            href="mailto:hello@labirintostudio.it"
            className="text-sm text-zinc-900 hover:text-zinc-500 transition-colors"
          >
            hello@labirintostudio.it
          </a>
        </div>
      </div>
    </>
  );
}
