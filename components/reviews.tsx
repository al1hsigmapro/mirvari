"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Айдана К.", role: "Свадьба · 180 гостей", text: "Это был лучший день в нашей жизни. Команда MIRVARI сделала всё на высшем уровне — от меню до оформления. Гости до сих пор вспоминают." },
  { name: "Дмитрий В.", role: "Корпоратив", text: "Организовали новогодний корпоратив на 90 человек. Менеджер был на связи 24/7, кухня безупречна, живая музыка — огонь." },
  { name: "Гульнара С.", role: "Семейный ужин", text: "Ходим всей семьёй каждую пятницу. Дети в восторге от детского меню, муж — от стейков, я — от пахлавы и чая Miravari." },
  { name: "Артём П.", role: "Юбилей", text: "60-летие отца. Все гости были в шоке от подачи и качества. Шашлычные сеты — отдельная любовь. Спасибо!" },
  { name: "Камила М.", role: "Гость", text: "Атмосфера, интерьер, музыка, еда — 10/10. Особенно хачапури по-аджарски и лимонад облепиховый. Обязательно вернёмся." },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section-pad relative overflow-hidden">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Отзывы гостей</p>
          <h2 className="heading-lg mt-4">
            Слова тех, кто нас <em className="not-italic text-gold-grad">ценит</em>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              0:    { slidesPerView: 1.05, spaceBetween: 16 },
              768:  { slidesPerView: 1.6, spaceBetween: 24 },
              1024: { slidesPerView: 2.4, spaceBetween: 32 },
            }}
            className="!pb-16"
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i}>
                <div className="glass-dark gold-border rounded-3xl p-8">
                  <Quote className="h-7 w-7 text-gold-300/60" />
                  <p className="mt-5 font-serif text-lg italic leading-relaxed text-cream-100/95">
                    {r.text}
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-gold-300">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-shine font-display text-lg text-ink-950">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="font-display text-base text-cream-100">{r.name}</p>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gold-300/70">
                        {r.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
