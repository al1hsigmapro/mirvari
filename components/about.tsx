"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

const points = [
  "Азербайджанская кухня",
  "Европейская кухня",
  "Живая музыка",
  "Уютная атмосфера",
  "Семейный отдых",
  "Лучший сервис",
  "Свежие продукты",
  "Банкетный зал",
];

const stats = [
  { value: 10, suffix: "+", label: "лет на рынке" },
  { value: 487, suffix: "", label: "отзывов гостей" },
  { value: 4.9, suffix: "★", label: "рейтинг" },
  { value: 250, suffix: "+", label: "блюд в меню" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(tick);
      else setN(to);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {Number.isInteger(to) ? n : n.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="container-x grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
              className="h-full w-full object-cover"
              alt="Интерьер MIRVARI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent" />
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute -bottom-8 -right-4 hidden w-56 md:block"
          >
            <div className="glass-dark gold-border rounded-2xl p-5 shadow-gold">
              <p className="font-serif text-5xl text-gold-grad">10+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-cream-200/80">лет дарим вкус</p>
            </div>
          </motion.div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            О ресторане
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mt-4"
          >
            Место, где рождаются <em className="not-italic text-gold-grad">лучшие</em> воспоминания
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="body-lg mt-6 max-w-xl"
          >
            MIRVARI — это больше, чем ресторан. Это философия гостеприимства,
            переплетённая с вековыми традициями азербайджанской кухни и изысканной
            европейской классикой. Каждое блюдо — симфония вкуса, каждый вечер — праздник.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {points.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.6 }}
                className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 hover:border-gold-300/40"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-shine text-ink-950">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-cream-100/90">{p}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="font-display text-3xl text-gold-grad md:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-white/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
