"use client";

import { useState } from "react";
import Image from "next/image";

type Guest = {
  id: number;
  name: string;
  city: string;
  quote: string;
  img: string;
  left: string;
  top: string;
};

const guests: Guest[] = [
  {
    id: 1,
    name: "کیان پوراحمد",
    city: "کرج",
    quote:
      "از رزرو تا خداحافظی همه‌چیز مرتب بود. اگر دنبال سکوت و طبیعت بکر هستید، گیلما را از دست ندهید.",
    img: "/images/comments/Reviewer Image-1 1.png",
    left: "82%",
    top: "68%",
  },
  {
    id: 2,
    name: "سارا کریمی",
    city: "اصفهان",
    quote:
      "صبح‌ها صدای پرنده‌ها جای زنگ موبایل را می‌گیرد. کلبه تمیز، غذای محلی عالی و حس واقعی زندگی در طبیعت شمال.",
    img: "/images/comments/Reviewer Image-3 1.png",
    left: "18%",
    top: "30%",
  },
  {
    id: 3,
    name: "نوید رضایی",
    city: "شیراز",
    quote:
      "قایق‌سواری روی دریاچه و پیاده‌روی جنگلی دقیقاً همان چیزی بود که برای فرار از شهر لازم داشتم. حتماً برمی‌گردیم.",
    img: "/images/comments/Reviewer Image-2 2.png",
    left: "47%",
    top: "26%",
  },
  {
    id: 4,
    name: "مینا احمدی",
    city: "تبریز",
    quote:
      "معماری کلبه‌ها و جزئیات چوبی‌شان فوق‌العاده است. شب‌ها کنار آتش‌گاه یکی از خاطره‌انگیزترین لحظات سفرم بود.",
    img: "/images/comments/Reviewer Image-3 1.png",
    left: "76%",
    top: "32%",
  },
  {
    id: 5,
    name: "علی موسوی",
    city: "مشهد",
    quote:
      "برای سفر خانوادگی عالی است. بچه‌ها در طبیعت آزاد بودند و ما هم بالاخره چند روز آرام گرفتیم.",
    img: "/images/comments/Reviewer Image-2 1.png",
    left: "28%",
    top: "64%",
  },
  {
    id: 6,
    name: "نگار صالحی",
    city: "رشت",
    quote:
      "حتی به‌عنوان گیلانی، گیلما را کشف تازه‌ای دیدم. فضای بومی حفظ شده و هیچ چیز تصنعی نیست.",
    img: "/images/comments/Reviewer Image 1.png",
    left: "52%",
    top: "58%",
  },
];

export default function Comments() {
  const [activeId, setActiveId] = useState<number>(guests[0].id);
  const active = guests.find((g) => g.id === activeId) ?? guests[0];

  return (
    <section dir="rtl" className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        
        <div className="mb-6 flex justify-center">
          <div className="relative flex h-[25px] w-[25px] items-center justify-center">

            <Image
              src="/images/comments/Chat Round Line.svg"
              alt=""
              fill
              className="object-contain"
            /> </div>
          <div className="relative absolute left-18 bottom-3 flex h-[50px] w-[120px] items-center justify-center">

                <Image
              src="/images/Videoo/Icon Container.png"
              alt=""
              fill
              className="object-contain  "
            />

          </div>
        </div>

        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            گیلما از نگاه مهمانان
          </h2>
          <p className="text-slate-600">تجربه واقعی مهمانانی که آرامش را در گیلما پیدا کردند</p>
        </div>

        <div className="relative mx-auto min-h-[420px] w-full max-w-5xl md:min-h-[560px]">
          <Image
            src="/images/comments/Group 1707483782.png"
            alt=""
            fill
            className="pointer-events-none object-contain opacity-40"
          />

          {guests.map((guest) => {
            const selected = guest.id === activeId;
            return (
              <button
                key={guest.id}
                type="button"
                onClick={() => setActiveId(guest.id)}
                style={{ left: guest.left, top: guest.top }}
                className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
                aria-label={`${guest.name} از ${guest.city}`}
              >
                <span
                  className={`absolute inset-0 rounded-full ${
                    selected ? "animate-ping bg-emerald-400/40" : ""
                  }`}
                />
                <Image
                  src={guest.img}
                  alt={guest.name}
                  width={64}
                  height={64}
                  className={`relative rounded-full object-cover shadow-lg ring-2 ring-white transition duration-300 ${
                    selected
                      ? "h-14 w-14 scale-110 ring-4 ring-emerald-400 md:h-16 md:w-16"
                      : "h-10 w-10 hover:scale-110 md:h-12 md:w-12"
                  }`}
                />
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-2.5 py-1 text-[11px] text-white opacity-0 shadow-md transition group-hover:opacity-100 md:block">
                  {guest.city}
                </span>
              </button>
            );
          })}

          <div className="absolute left-1/2 top-1/2 z-30 w-[min(92%,28rem)] -translate-x-1/2 -translate-y-1/2">
            <div className="relative rounded-3xl bg-white/95 p-6 text-center shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)] backdrop-blur-sm md:p-10">
              <div className="absolute right-6 top-4 text-5xl leading-none text-emerald-200">
                ”
              </div>
              <p
                key={active.id}
                className="relative z-10 mb-6 text-base leading-relaxed text-slate-700 md:text-lg"
              >
                {active.quote}
              </p>
              <div className="flex items-center justify-center gap-3">
                <Image
                  src={active.img}
                  alt={active.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="text-right">
                  <p className="font-bold text-slate-900">{active.name}</p>
                  <p className="text-sm text-slate-500">{active.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}