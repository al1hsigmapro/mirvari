"use client";
import { motion } from "framer-motion";
import { Flame, Drumstick, Wine, Music, PartyPopper, Users, Sparkles, Star } from "lucide-react";

const features = [
  { icon: Flame,        title: "Авторская кухня",       text: "Шеф с 20-летним опытом" },
  { icon: Drumstick,    title: "Мангал",                text: "Живой огонь и фирменные маринады" },
  { icon: Wine,         title: "Винная карта",          text: "Более 120 позиций со всего мира" },
  { icon: Music,        title: "Живая музыка",          text: "Каждый вечер — джаз, сакс, скрипка" },
  { icon: PartyPopper,  title: "Банкеты",               text: "До 250 гостей под ключ" },
  { icon: Users,        title: "Семейная атмосфера",    text: "Детская комната и аниматоры" },
  { icon: Sparkles,     title: "Премиальный сервис",    text: "Личный менеджер для каждого" },
  { icon: Star,         title: "Высокие оценки гостей", text: "4.9 ★ на Google и 2GIS" },
];

export default function Features() {
  return (
    <section className="section-pad relative">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Почему мы</p>
          <h2 className="heading-lg mt-4">
            Философия <em className="not-italic text-gold-grad">MIRVARI</em>
          </h2>
          <p className="body-lg mt-4">Восемь причин вернуться к нам снова и снова.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.7 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-7 hover:border-gold-300/40"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold-shine opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-300/30 bg-gold-500/10 text-gold-200 transition-colors group-hover:bg-gold-300 group-hover:text-ink-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl text-cream-100">{f.title}</h3>
                  <p className="body-md mt-2">{f.text}</p>
                </div>
                <div className="absolute bottom-5 right-5 font-display text-7xl text-white/[0.03] group-hover:text-gold-300/10">
                  0{i + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
