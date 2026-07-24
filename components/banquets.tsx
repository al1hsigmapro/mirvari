"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const events = [
  "Свадьбы", "Қыз ұзату", "Құдалық", "Юбилеи",
  "Корпоративы", "Дни рождения", "Сүндет той", "VIP мероприятия",
];

export default function Banquets() {
  return (
    <section id="banquets" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2400&q=80"
          className="h-full w-full object-cover opacity-25"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/60" />
        <div className="absolute inset-0 bg-radial-gold" />
      </div>
      <div className="container-x relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            Банкеты и события
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mt-4"
          >
            Ваш <em className="not-italic text-gold-grad">идеальный</em> вечер
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="body-lg mt-6 max-w-xl"
          >
            Банкетный зал до 250 гостей, индивидуальное меню от шефа, декор, ведущие,
            живая музыка и фотограф. Мы берём на себя всё.
          </motion.p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {events.map((e, i) => (
              <motion.div
                key={e}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center font-serif text-base text-cream-100/90 backdrop-blur-sm hover:border-gold-300/50"
              >
                {e}
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#reserve"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="btn-gold mt-10"
          >
            Забронировать банкет <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl"
        >
          <img
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80"
            className="h-full w-full object-cover"
            alt="Банкетный зал"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-5">
            <p className="font-display text-2xl text-gold-grad">до 250 гостей</p>
            <p className="body-md mt-1">Банкетный зал с отдельным входом и сценой</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
