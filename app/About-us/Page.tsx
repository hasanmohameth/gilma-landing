import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
        
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative self-start h-24 w-24 ">
    <Image
      src="/images/aboutUs/Icon Container.png"
      alt="طبیعت سبز"
      fill
      className="object-contain"
    />

      <Image
      src="/images/aboutUs/Earth.png"
      alt="طبیعت سبز"
      width={55}
      height={55}
      className="absolute right-5 top-5"
    />
  </div>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
  
          <div>

            
            

            <h2 className="mb-6 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl md:text-4xl">
              گیلما؛ آرامش ناب در آغوش طبیعت گیلان
            </h2>

            <p className="mb-6 leading-relaxed text-slate-600">
              گیلما با الهام از معماری سنتی و هم‌زیستی با طبیعت، فضایی دنج و
              اصیل برای کسانی فراهم کرده که به دنبال فرار از هیاهوی شهری و
              بازگشت به ریشه هستند. کلبه‌های چوبی ما در دل جنگل‌های هیرکانی
              قرار گرفته‌اند و تجربه‌ای منحصر‌به‌فرد از زندگی بومی را به شما
              هدیه می‌دهند.
            </p>

            <ul className="mb-8 space-y-3">

              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <svg
                    className="h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-slate-700">
                  معماری بومی و استفاده از مصالح طبیعی
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <svg
                    className="h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-slate-700">
                  حفظ محیط زیست و گردشگری پایدار
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <svg
                    className="h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-slate-700">
                  تجربه فرهنگ و غذاهای محلی گیلان
                </span>
              </li>

            </ul>

            <Link
              href="#rooms"
              className="inline-flex items-center gap-2 font-medium bg-gilma p-3 text-amber-50 rounded-4xl  transition hover:text-primary-800"
            >
              مشاهده اقامتگاه

              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>
          </div>

           <div className="relative h-[500px] w-full">
  <Image
    src="/images/aboutUs/img 03.png"
    alt="جنگل گیلان"
    width={600}
    height={400}
    className="absolute right-0  bottom-0 z-10 h-[400px] border-amber-50 w-72 rounded-2xl object-cover shadow-card"
  />
  <Image
    src="/images/aboutUs/Frame 889.png"
    alt="طبیعت سبز"
    width={600}
    height={400}
    className="absolute left-8 top-12  w-60 rounded-2xl object-cover shadow-card z-50"
  />


  <Image
    src="/images/aboutUs/Frame 891.png"
    alt="طبیعت سبز"
    width={600}
    height={400}
    className="absolute right-40 top-80 z-50 border-amber-50  w-60 rounded-2xl object-cover shadow-card"
  />

  <Image
    src="/images/aboutUs/img 02.png"
    alt="دریاچه"
    width={600}
    height={400}
    className="absolute right-48 bottom-50 z-30 h-80 w-52 rounded-2xl object-cover shadow-card"
  />

  <Image
    src="/images/aboutUs/img 03.png"
    alt="کلبه چوبی"
    width={600}
    height={400}
    className="absolute right-70 top-36 z-40 h-90 w-72 rounded-2xl object-cover shadow-card"
  />
</div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-5 py-2 text-sm font-medium text-white shadow-lg">
              تجربه اقامت اصیل شمال
            </div>

        </div>
      </div>
    </section>
  );
}