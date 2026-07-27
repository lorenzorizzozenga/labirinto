"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "PROGETTI", href: "/progetti" },
  { label: "SERVIZI", href: "/servizi" },
  { label: "CREATURE", href: "/creature" },
  { label: "STUDIO", href: "/studio" },
  { label: "ABOUT", href: "/about" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-52 shrink-0 flex flex-col border-r border-zinc-200 h-screen sticky top-0">
      <div className="h-14 flex items-center px-6 border-b border-zinc-200">
        <span className="text-sm font-semibold tracking-tight">Labirinto</span>
      </div>

      <nav className="flex flex-col gap-3 px-6 py-8 flex-1">
        {items.map((item) => {
          const active =
            pathname === item.href ||
            (pathname === "/" && item.href === "/progetti");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-bold tracking-wider transition-colors ${
                active ? "text-black" : "text-zinc-400 hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-6 py-6 text-xs text-zinc-500">
        hello@labirintostudio.it
      </div>
    </aside>
  );
}
