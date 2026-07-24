"use client";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Instagram, Clock, Navigation } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function Contacts() {
  return (
    <section id="contacts" className="section-pad relative">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Контакты</p>
          <h2 className="heading-lg mt-4">
            Ждём вас в <em className="not-italic text-gold-grad">гости</em>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr,1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-white/5"
          >
            <iframe
              title="MIRVARI Map"
              src="https://www.google.com/maps?q=Астана&output=embed"
              className="h-[460px] w-full grayscale-[40%] contrast-110"
              loading="lazy"
            />
          </motion.div>

          <div className="flex flex-col gap-4">
            {[
              { Icon: MapPin,    t: "Адрес",     v: siteConfig.address },
              { Icon: Phone,     t: "Телефон",   v: siteConfig.phone,   href: `tel:${siteConfig.phone}` },
              { Icon: Instagram, t: "Instagram", v: "@mirvari_ast",     href: siteConfig.instagram },
              { Icon: Clock,     t: "Время",     v: "Пн–Чт, Вс: 11:00–00:00 · Пт–Сб: 11:00–02:00" },
            ].map(({ Icon, t, v, href }, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-dark gold-border flex items-start gap-4 rounded-2xl p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-200">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold-300/80">{t}</p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-cream-100 hover:text-gold-200"
                    >
                      {v}
                    </a>
                  ) : (
                    <p className="mt-1 text-cream-100">{v}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <a href={`tel:${siteConfig.phone}`} className="btn-gold justify-center">
                <Phone className="h-4 w-4" /> Позвонить
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost justify-center"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="https://2gis.kz"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost justify-center"
              >
                <Navigation className="h-4 w-4" /> Маршрут
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
