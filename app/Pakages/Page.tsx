"use client";

import Image from "next/image";
import { useState } from "react";

export default function Packages() {
  const photos = [
    "/images/pakages/package4 2.png",
    "/images/pakages/package4 2.png",
    "/images/pakages/package4 2.png",
  ];

  const features = [
    {
      title: "۱ شب اقامت",
      src: "/images/pakages/",
    },
    {
      title: "صبحانه",
      src: "/images/pakages/package4 2.png",
    },
    {
      title: "قایق‌سواری",
      src: "/images/pakages/package4 2.png",
    },
    {
      title: "تور جنگل‌نوردی",
      src: "/images/pakages/package4 2.png",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextPhoto = () => {
    setIndex((prev) => (prev + 1) % photos.length);
  };

  const previousPhoto = () => {
    setIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#F3F7FB] py-16 md:py-24"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <div className="relative mb-6 flex h-[50px] justify-center">
            <div className="relative z-10 flex h-[25px] w-[25px] items-center justify-center">
              <Image
                src="/images/pakages/Bold/Essentional, UI/Box Minimalistic.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="absolute left-1/2 top-3 z-0 h-[50px] w-[120px] -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/Videoo/Icon Container.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h2 className="mb-3 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl md:text-[34px]">
            پکیج‌های ویژه اقامت در گیلما
          </h2>

          <p className="mb-10 max-w-md text-sm leading-7 text-slate-500 md:text-[15px]">
            پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات
            هیجان‌انگیز در دل طبیعت است.
          </p>

          <h3 className="mb-2 text-base font-bold text-slate-800">
            پکیج رمانتیک دو نفره
          </h3>

          <p className="mb-6 text-sm text-slate-500">
            شامل: ۱ شب اقامت + صبحانه + تور جنگل‌نوردی + قایق‌سواری
          </p>

          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white px-3 py-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
              >
                <Image
                  src={item.src}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <span className="text-center text-[12px] font-medium text-slate-700">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-medium text-emerald-600">
              قیمت: ۲,۳۰۰,۰۰۰ تومان
            </p>

            <a
              href=""
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-emerald-200 transition hover:bg-emerald-600"
            >
              همین حالا رزرو کن
              <span aria-hidden>←</span>
            </a>
          </div>
        </div>

        <div className="relative isolate mx-auto w-full max-w-[520px]">
         
          <Image
            src="/images/pakages/pattern 1.png"
            alt=""
            width={520}
            height={520}
            className="pointer-events-none relative z-0 h-auto w-full"
          />

       
          <button
            type="button"
            onClick={nextPhoto}
            aria-label="عکس بعدی"
            className="absolute left-[8%] top-[8%] z-20 h-[84%] w-[84%] cursor-pointer overflow-hidden rounded-[1.6rem]"
          >
            <span className="relative block h-full w-full">
              <Image
                src={photos[index]}
                alt="اقامتگاه گیلما"
                fill
                sizes="520px"
                priority
                className="object-cover"
              />
            </span>
          </button>

          <p className="pointer-events-none absolute left-[4%] top-[8%] z-30 max-w-[148px] px-4 py-3 text-[11px] leading-6 text-slate-600">
            تجربه‌ای اقامتی اصیل در دل طبیعت شمال
          </p>

          <button
            type="button"
            onClick={previousPhoto}
            aria-label="عکس قبلی"
            className="absolute bottom-[5%] left-[8%] z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-slate-700 shadow-md transition hover:scale-105 hover:shadow-lg"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextPhoto}
            aria-label="عکس بعدی"
            className="absolute bottom-[5%] right-[8%] z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-slate-700 shadow-md transition hover:scale-105 hover:shadow-lg"
          >
            →
          </button>

          <div className="pointer-events-none absolute bottom-[6%] left-1/2 z-40 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            {index + 1} / {photos.length}
          </div>
        </div>
      </div>
    </section>
  );
}