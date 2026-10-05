import Image from "next/image";
import React from "react";

export default function Rules() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="grid gap-8 sm:grid-cols-3">

      
        <div className="rounded-2xl bg-white p-8 text-center shadow-card transition hover:shadow-soft">
          <div className="mx-auto mb-5 flex h-44 w-44 items-center justify-center">
            <Image
              src="/images/ruless/icon-binoculars (1) 1.png"
              alt="دوربین دوچشمی"
              width={240}
              height={240}
              className="h-60 w-60 object-contain rotate-[-40deg]"
            />
          </div>

          <h3 className="mb-2 text-lg font-bold text-slate-900">
            حفظ طبیعت و محیط زیست
          </h3>

          <p className="text-sm leading-relaxed text-slate-600 w-72 m-auto">
            گیلما در دل طبیعت قرار دارد و تلاش می‌کند کمترین ردپای محیطی را بر جای بگذارد.
          </p>
        </div>

     
        <div className="rounded-2xl bg-white p-8 text-center shadow-card transition hover:shadow-soft">
          <div className="mx-auto mb-5 flex h-44 w-44 items-center justify-center">
            <Image
              src="/images/ruless/icon-van 1.png"
              alt="خودرو"
              width={240}
              height={240}
              className="h-60 w-60 object-contain rotate-[-20deg]"
            />
          </div>

          <h3 className="mb-2 text-lg font-bold text-slate-900">
            حفظ آرامش اقامتگاه
          </h3>

          <p className="text-sm leading-relaxed text-slate-600 w-72 m-auto">
            فضای آرام و دنج برای کسانی که به دنبال سکوت و رهایی از شلوغی هستند.
          </p>
        </div>

    
        <div className="rounded-2xl bg-white p-8 text-center shadow-card transition hover:shadow-soft">
          <div className="mx-auto mb-5 flex h-44 w-44 items-center justify-center">
            <Image
              src="/images/ruless/Image.png"
              alt="اقامتگاه"
              width={240}
              height={240}
              className="h-60 w-60 object-contain rotate-[10deg]"
            />
          </div>

          <h3 className="mb-2 text-lg font-bold text-slate-900">
            مراقبت از مهمانان اقامتگاه
          </h3>

          <p className="text-sm leading-relaxed text-slate-600 w-72 m-auto">
            مهمان‌نوازی اصیل گیلانی و توجه به جزئیات برای اقامتی خاطره‌انگیز.
          </p>
        </div>

      </div>
    </section>
  );
}