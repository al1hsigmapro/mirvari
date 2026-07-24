"use client";
import { motion } from "framer-motion";

export default function Chef() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="eyebrow">Шеф-повар</p>
          <h2 className="heading-lg mt-4">
            Философия вкуса от <em className="not-italic text-gold-grad">нашего шефа</em>
          </h2>
          <p className="body-lg mt-6 max-w-xl">
            «Я верю, что настоящая кухня — это диалог. С гостем, с продуктом, с огнём.
            В MIRVARI мы готовим не блюда — мы готовим истории. Азербайджанские травы
            встречаются с провансальскими, кавказское гостеприимство — с европейской
            точностью. И в этом рождается наш вкус.»
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="font-serif text-5xl italic text-gold-grad">R.</div>
            <div>
              <p className="font-display text-xl text-cream-100">Рауф Алиев</p>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-300/80">
                Шеф-повар · основатель
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl"
        >
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
            className="h-full w-full object-cover"
            alt="Шеф-повар"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
