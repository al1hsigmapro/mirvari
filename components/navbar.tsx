"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Magnetic from "./magnetic";

const links = [
  { href: "#home", label: "Главная" },
  { href: "#about", label: "О нас" },
  { href: "#menu", label: "Меню" },
  { href: "#gallery", label: "Галерея" },
  { href: "#banquets", label: "Банкеты" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="container-x">
          <div
            className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:px-7 ${
              scrolled ? "glass-dark shadow-soft" : "bg-transparent"
            }`}
          >
            <Link href="#home" className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0">
                <svg viewBox="0 0 200 200" className="h-full w-full">
                  <defs>
                    <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#9c7a2c" />
                      <stop offset="50%" stopColor="#f2e6bd" />
                      <stop offset="100%" stopColor="#d9b85a" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="92" fill="#7a1d1d" />
                  <circle cx="100" cy="100" r="92" fill="none" stroke="url(#lg1)" strokeWidth="1" />
                  <text x="100" y="110" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="60" fill="#f8f5ee" fontStyle="italic">M</text>
                </svg>
              </div>
              <div className="leading-tight">
                <p className="font-display text-lg tracking-wide text-cream-100">MIRVARI</p>
                <p className="text-[9px] uppercase tracking-[0.35em] text-gold-300/80">ресторан</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group relative px-4 py-2 text-[12px] uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-gold-200"
                >
                  {l.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Magnetic>
                <a href="tel:+77000000000" className="btn-ghost">
                  <Phone className="h-4 w-4" /> Позвонить
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#reserve" className="btn-gold">Забронировать</a>
              </Magnetic>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="rounded-full border border-white/15 p-2.5 lg:hidden"
              aria-label="Меню"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-ink-950/90 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 250, damping: 28 }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-graphite-900 p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-gold-grad">MIRVARI</span>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/15 p-2"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="border-b border-white/5 py-4 font-display text-2xl text-cream-100/90 hover:text-gold-200"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <a href="#reserve" onClick={() => setOpen(false)} className="btn-gold mt-10 w-full">
                Забронировать
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
