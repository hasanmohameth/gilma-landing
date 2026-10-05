"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟",
    answer:
      "در گیلما امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
  },
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟",
    answer:
      "شرایط کنسلی و تغییر تاریخ بر اساس زمان باقی‌مانده تا اقامت متفاوت است و هنگام رزرو به شما اعلام خواهد شد.",
  },
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟",
    answer:
      "بله، برای بررسی شرایط کافی است با پشتیبانی گیلما در ارتباط باشید.",
  },
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟",
    answer:
      "در صورت وجود ظرفیت، امکان تغییر تاریخ رزرو با هماهنگی پشتیبانی وجود دارد.",
  },
  {
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد؟",
    answer:
      "برای اطلاع از قوانین کامل کنسلی و تغییر تاریخ، شرایط رزرو را بررسی کنید.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#f8fbfc] py-16 md:py-20"
    >


      <div className="pointer-events-none absolute inset-0 opacity-60">
        {/* Vertical lines */}
        <div className="absolute right-[8%] top-0 h-full w-px bg-[#dfeff1]" />
        <div className="absolute right-[28%] top-0 h-full w-px bg-[#e4f2f3]" />
        <div className="absolute right-[50%] top-0 h-full w-px bg-[#e4f2f3]" />
        <div className="absolute right-[72%] top-0 h-full w-px bg-[#e4f2f3]" />
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#dfeff1]" />

        {/* Horizontal lines */}
        <div className="absolute left-0 right-0 top-[20%] h-px bg-[#e4f2f3]" />
        <div className="absolute left-0 right-0 top-[45%] h-px bg-[#e4f2f3]" />
        <div className="absolute left-0 right-0 top-[70%] h-px bg-[#e4f2f3]" />
      </div>

  
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">

     
        <div className="flex flex-col items-center text-center">


          <div className="relative mb-5 flex h-[60px] w-full items-center justify-center">

            <div className="relative mr-[-80px]">

              <Image
                src="/images/faq/Icon Container.png"
                alt=""
                width={60}
                height={60}
                className="object-contain"
              />

              <Image
                src="/images/faq/Bold/Essentional, UI/Question Circle.png"
                alt=""
                width={20}
                height={20}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
              />

            </div>
          </div>


          <h2 className="mb-4 text-2xl font-extrabold text-[#172126] sm:text-3xl">
            سوالات متداول مهمانان گیلما
          </h2>

    

          <p className="max-w-[470px] text-sm leading-7 text-[#68777d]">
            پاسخ رایج‌ترین سوالات درباره رزرو اقامت و امکانات گیلما را اینجا
            بیابید تا با خیال راحت سفر خود را برنامه‌ریزی کنید.
          </p>

     

          <div className="relative mt-8 h-[280px] w-full max-w-[420px] sm:h-[320px]">
            <Image
              src="/images/faq/icon-binoculars (1) 2.png"
              alt="سوالات متداول گیلما"
              fill
              priority
              sizes="(max-width: 640px) 90vw, 420px"
              className="object-contain"
            />
            
          </div>
        </div>

     

        <div className="flex flex-col gap-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white
                  bg-white
                  shadow-[0_5px_25px_rgba(40,70,80,0.08)]
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "shadow-[0_8px_30px_rgba(40,70,80,0.10)]"
                      : ""
                  }
                `}
              >
 
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-right sm:px-5"
                >
                  
                  <span className="text-sm font-semibold text-[#263238]">
                    {faq.question}
                  </span>

                
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#18c6a5]
                      text-lg
                      font-medium
                      leading-none
                      text-white
                    "
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

           
                <div
                  className={`
                    grid
                    transition-[grid-template-rows,opacity]
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 pb-5 text-xs leading-7 text-[#68777d]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}