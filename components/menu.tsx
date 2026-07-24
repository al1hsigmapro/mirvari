"use client";
import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { menuData } from "@/lib/menu-data";
import { formatPrice, cn } from "@/lib/utils";

export default function Menu() {
  const [active, setActive] = useState(menuData[0].id);
  const [query, setQuery] = useState("");
  const filterRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const cat = menuData.find((c) => c.id === active)!;
    if (!query) return cat;
    return {
      ...cat,
      items: cat.items.filter(
        (i) =>
          i.name.toLowerCase().includes(query.toLowerCase()) ||
          i.description?.toLowerCase().includes(query.toLowerCase())
      ),
    };
  }, [active, query]);

  return (
    <section
      id="menu"
      className="section-pad relative bg-gradient-to-b from-ink-950 via-graphite-900 to-ink-950"
    >
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Меню</p>
          <h2 className="heading-lg mt-4">
            Кухня <em className="not-italic text-gold-grad">MIRVARI</em>
          </h2>
          <p className="body-lg mt-4">
            Более 250 блюд азербайджанской и европейской кухни, приготовленных с любовью.
          </p>
        </div>

        {/* Sticky filters */}
        <div
          ref={filterRef}
          className="sticky top-24 z-30 mt-12 -mx-5 px-5 md:-mx-10 md:px-10"
        >
          <div className="glass-dark rounded-2xl px-3 py-3">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-300/70" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Поиск по блюдам…"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-11 pr-4 text-sm text-cream-100 outline-none placeholder:text-white/40 focus:border-gold-300/60"
                />
              </div>
              <div className="-mx-1 flex gap-1 overflow-x-auto px-1 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {menuData.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    className={cn(
                      "shrink-0 rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all",
                      active === c.id
                        ? "bg-gold-shine text-ink-950 shadow-gold"
                        : "text-white/70 hover:bg-white/5 hover:text-gold-200"
                    )}
                  >
                    {c.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-3xl text-cream-100 md:text-4xl">
                {filtered.title}
              </h3>
              {filtered.description && (
                <p className="body-md mt-2">{filtered.description}</p>
              )}

              <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
                {filtered.items.length === 0 && (
                  <p className="col-span-full py-12 text-center text-white/50">
                    Ничего не найдено.
                  </p>
                )}
                {filtered.items.map((item, i) => (
                  <motion.div
                    key={item.name + i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: i * 0.02, duration: 0.5 }}
                    className="group relative flex items-start justify-between gap-4 rounded-2xl border border-white/[0.04] bg-white/[0.015] p-5 transition-all hover:border-gold-300/30 hover:bg-white/[0.03]"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <h4 className="font-display text-lg text-cream-100 group-hover:text-gold-200">
                          {item.name}
                        </h4>
                        {item.weight && (
                          <span className="text-[10px] uppercase tracking-[0.2em] text-gold-300/70">
                            {item.weight}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="body-md mt-1 line-clamp-2">{item.description}</p>
                      )}
                      <div className="mt-3 flex items-center gap-3">
                        <span className="rounded-full bg-gold-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-gold-200">
                          {formatPrice(item.price)} ₸
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                          MIRVARI
                        </span>
                      </div>
                    </div>
                    <div className="hidden h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-gold-500/20 to-graphite-700 ring-1 ring-white/5 sm:block">
                      <div className="flex h-full w-full items-center justify-center text-gold-300/40">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7" strokeWidth="1">
                          <path d="M6 2v6a6 6 0 0 0 12 0V2M6 22h12M12 14v8" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
