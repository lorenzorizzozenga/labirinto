"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const items = [
  { label: "PROGETTI", href: "/progetti" },
  { label: "SERVIZI", href: "/servizi" },
  { label: "CREATURE", href: "/creature" },
  { label: "STUDIO", href: "/studio" },
  { label: "ABOUT", href: "/about" },
];

function NavLinks({
  pathname,
  onNavigate,
  size = "sm",
}: {
  pathname: string;
  onNavigate?: () => void;
  size?: "sm" | "lg";
}) {
  return (
    <nav
      className={`flex flex-col flex-1 ${
        size === "lg" ? "gap-6 px-6 py-10" : "gap-3 px-6 py-8"
      }`}
    >
      {items.map((item, i) => {
        const active =
          pathname === item.href ||
          (pathname === "/" && item.href === "/progetti");
        return (
          <motion.div
            key={item.href}
            initial={size === "lg" ? { opacity: 0, x: 12 } : false}
            animate={size === "lg" ? { opacity: 1, x: 0 } : false}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15 + i * 0.05,
            }}
          >
            <Link
              href={item.href}
              onClick={onNavigate}
              className={`relative inline-block font-bold tracking-wider transition-colors ${
                size === "lg" ? "text-base" : "text-xs"
              } ${active ? "text-black" : "text-zinc-400 hover:text-black"}`}
            >
              {item.label}
              {active && (
                <motion.span
                  layoutId={`nav-underline-${size}`}
                  className="absolute -bottom-1 left-0 right-0 h-px bg-black"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M3 6h14M3 10h14M3 14h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden sticky top-0 z-30 bg-white border-b border-zinc-200 flex items-center justify-between px-4 h-14">
        <Link
          href="/progetti"
          className="text-sm font-semibold tracking-tight"
        >
          Labirinto
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Apri menu"
          aria-expanded={open}
          className="p-2 -mr-2 text-zinc-800 active:scale-95 transition-transform"
        >
          <HamburgerIcon />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/20"
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-white flex flex-col shadow-xl"
            >
              <div className="h-14 flex items-center justify-between px-4 border-b border-zinc-200 shrink-0">
                <span className="text-sm font-semibold tracking-tight">
                  Labirinto
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Chiudi menu"
                  className="p-2 -mr-2 text-zinc-800 active:scale-95 transition-transform"
                >
                  <CloseIcon />
                </button>
              </div>
              <NavLinks
                pathname={pathname}
                onNavigate={() => setOpen(false)}
                size="lg"
              />
              <div className="px-6 py-6 text-xs text-zinc-500 shrink-0 border-t border-zinc-200">
                hello@labirintostudio.it
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-52 shrink-0 flex-col border-r border-zinc-200 h-screen sticky top-0">
        <div className="h-14 flex items-center px-6 border-b border-zinc-200">
          <span className="text-sm font-semibold tracking-tight">
            Labirinto
          </span>
        </div>
        <NavLinks pathname={pathname} />
        <div className="px-6 py-6 text-xs text-zinc-500">
          hello@labirintostudio.it
        </div>
      </aside>
    </>
  );
}
