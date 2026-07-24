"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Какой у вас dress code?", a: "Мы придерживаемся элегантного стиля smart casual. Для торжеств и банкетов — деловой или вечерний стиль." },
  { q: "Есть ли парковка?", a: "Да, у нас бесплатная охраняемая парковка на 80 мест, а также valet-сервис по запросу." },
  { q: "Можно ли прийти с детьми?", a: "Конечно. У нас есть детское меню, стульчики, детская комната и опытные аниматоры по выходным." },
  { q: "Работаете ли вы навынос и доставку?", a: "Да, доступны самовывоз и доставка через приложение, WhatsApp и по телефону. Минимальный заказ — 5 000 ₸." },
  { q: "Бронируете ли банкеты заранее?", a: "Да, банкетный зал бронируется минимум за 14 дней. Для свадеб рекомендуем 1–3 месяца." },
  { q: "Есть ли у вас вегетарианское меню?", a: "Да, более 20 позиций: салаты, горячее, супы, гарниры и десерты без мяса и рыбы." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[1fr,2fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="heading-lg mt-4">
            Частые <em className="not-italic text-gold-grad">вопросы</em>
          </h2>
          <p className="body-lg mt-4">
            Не нашли ответ? Напишите нам в WhatsApp или Instagram — ответим за 5 минут.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-lg text-cream-100">{f.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-300/40 text-gold-300"
                >
                  <Plus className="h-4 w-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-white/70">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
