import Image from 'next/image';

export default function Servicess() {
  return (<div>       
    
        <div className="absolute right-30  z-50 h-[100px] w-[100px] overflow-hidden rounded-2xl">
  <Image
    src="/images/servicess/Icon Container.png"
    alt="ایکون"
    width={240}
    height={240}
    className="h-full w-full object-contain bg-cover "
  />
</div>

      <div className="absolute right-36 top-636 z-50 h-[54px] w-[54px] overflow-hidden rounded-2xl">
  <Image
    src="/images/servicess/Bold/Essentional, UI/Magic Stick.png"
    alt="ایکون"
    width={240}
    height={240}
    className="h-full w-full object-contain bg-cover "
  />
</div>
    <section id="services" className="bg-white py-20 md:py-28 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 " >
        <div className="grid items-center gap-12 lg:grid-cols-2 ">

          <div>
 
            <span className="mb-4 inline-block rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
              خدمات
            </span>

            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
              خدمات رفاهی گیلما برای اقامتی دلنشین
            </h2>

            <p className="mb-8 leading-relaxed text-slate-600">
              در گیلما تمام تلاش‌مان بر این است که اقامت شما راحت، امن و
              به‌یادماندنی باشد. از قایق‌سواری در دریاچه تا پیاده‌روی در جنگل،
              همه چیز برای تجربه‌ای کامل آماده است.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                قایق‌سواری
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                پیاده‌روی جنگلی
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                غذای محلی
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                آتش‌گاه شبانه
              </span>
            </div>
          </div>

         <div className="relative flex items-center  justify-center gap-6">

<div className="absolute left-[512px] z-50 h-[40px] w-[40px] overflow-hidden rounded-2xl">
  <Image
    src="/images/servicess/Subtract.png"
    alt="فلش"
    width={240}
    height={240}
    className="h-full w-full object-contain bg-cover "
  />
</div>

   <div className="absolute left-[220]  h-70 w-60 overflow-hidden rounded-2xl">
<Image
    src="/images/servicess/Subtract.png"
    alt="فلش"
    width={240}
    height={240}
    className=" object-contain z-50"
  />
   <p className="absolute bottom-5 z-50 font-extrabold text-white">
    قایق سواری
  </p>
</div>
   <div className="absolute left-[292]  h-70 w-60 overflow-hidden rounded-2xl">
 
  <Image
    src="/images/servicess/boat 1.png"
    alt="قایق‌سواری"
    width={240}
    height={240}
    className=" object-contain"
  />

  </div>


<div className="absolute left-[-0px] h-78 w-60 overflow-hidden rounded-2xl">
 <Image
    src="/images/servicess/Frame 2147238326.png"
    alt="خدمات گیلما"
    width={240}
    height={240}
    className=" object-contain"
  />

 <p className="absolute bottom-5 right-5 z-50 font-extrabold text-white">
    دوچرخه سواری
  </p>


</div>

<div className="absolute left-[-250px] h-[288px] w-[200px] overflow-hidden">
  <Image
    src="/images/servicess/Frame 2147238324.png"
    alt="خدمات گیلما"
    width={240}
    height={240}
    className="h-[400px] rounded-r-2xl object-cover"
  />

  <p className="absolute bottom-5 right-5 z-50 font-extrabold text-white">
    پرنده نگری
  </p>
</div>
</div>

        </div>
      </div>
    </section>
    </div>
  );
}