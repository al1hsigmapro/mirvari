"use client";
import { Instagram, Phone, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function Footer() {
  return (
    <footer
      id="reserve"
      className="relative overflow-hidden border-t border-white/5 bg-graphite-900 pt-20"
    >
      <div className="absolute inset-0 bg-radial-gold opacity-40" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr,1fr,1fr,1fr]">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 200 200" className="h-12 w-12">
                <defs>
                  <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#9c7a2c" />
                    <stop offset="50%" stopColor="#f2e6bd" />
                    <stop offset="100%" stopColor="#d9b85a" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="92" fill="#7a1d1d" />
                <circle cx="100" cy="100" r="92" fill="none" stroke="url(#fg)" strokeWidth="1" />
                <text x="100" y="115" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="68" fill="#f8f5ee" fontStyle="italic">M</text>
              </svg>
              <div>
                <p className="font-display text-2xl text-cream-100">MIRVARI</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold-300/80">
                  зона вашего комфорта
                </p>
              </div>
            </div>
            <p className="body-md mt-6 max-w-sm">
              Премиальный ресторан азербайджанской и европейской кухни в самом сердце Астаны.
            </p>

            <form className="mt-6 flex max-w-sm overflow-hidden rounded-full border border-white/10 bg-white/[0.03]">
              <input
                placeholder="Ваш e-mail"
                className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-white/40"
              />
              <button
                className="bg-gold-shine px-5 text-ink-950 transition hover:brightness-110"
                aria-label="Подписаться"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold-300/80">Навигация</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream-100/80">
              {["Главная", "О нас", "Меню", "Галерея", "Банкеты", "Контакты"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-gold-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold-300/80">Часы работы</h4>
            <ul className="mt-5 space-y-2 text-sm text-cream-100/80">
              <li>Пн – Чт, Вс <span className="text-gold-200">11:00 – 00:00</span></li>
              <li>Пт – Сб <span className="text-gold-200">11:00 – 02:00</span></li>
              <li className="pt-3 text-xs text-white/50">Банкеты — круглосуточно по договору</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold-300/80">Контакты</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream-100/80">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold-300" />{siteConfig.address}</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold-300" /><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></li>
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-gold-300" /><a href={siteConfig.instagram} target="_blank" rel="noreferrer">@mirvari_ast</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 py-6 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} MIRVARI. Все права защищены.</p>
          <p>Designed with ❤ in Astana</p>
        </div>
      </div>
    </footer>
  );
}
