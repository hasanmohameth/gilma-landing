import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section
      id="home"
      className="hero-gradient relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 md:pt-20 md:pb-28 lg:px-8">

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="mb-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            اقامتگاه بوم‌گردی گیلما؛ جایی که طبیعت خانه است
          </h1>

          <p className="mb-8 text-base leading-relaxed text-slate-600 md:text-lg">
            اقامتگاه بوم‌گردی گیلما در دل جنگل‌های سرسبز شمال کشور، تجربه‌ای
            اصیل از زندگی در طبیعت بکر و آرامش واقعی را به شما هدیه می‌دهد.
            با ما همراه شوید تا لحظاتی فراموش‌نشدنی در آغوش طبیعت رقم بزنید.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-gilma p-2 rounded-4xl text-amber-100 px-8 py-3.5 font-medium text-white shadow-lg shadow-primary-200 transition hover:-translate-y-0.5 hover:bg-primary-700"
          >
            مهمان گیلما شو
          </Link>
        </div>

   
        <div className="relative mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-100/50">

           
            <Image
              src="/images/home/Group 1707483783-1.png"
              alt=""
              fill
              className="z-0 object-cover"
            />

       
            <Image
              src="/images/home/Group 1707483783.png"
              alt="اقامتگاه بوم‌گردی گیلما"
              width={1440}
              height={960}
              className="relative z-10 h-full w-full object-contain"
            />

        
            <div className="absolute bottom-5 right-0 z-20 flex items-center gap-3   px-4 py-3 shadow-soft">

              <div className="flex h-10 w-10 items-center justify-center  ">
          
              </div>

            
              <div>
                <p className="w-70 text-sm  absolute bottom-0 right-0 ">
                  فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
                </p>
              </div>

            </div>

          
            <div className="absolute bottom-0 left-0 w-44  z-20 flex items-center gap-3 rounded-full bg-white p-1 shadow-soft">

            <div className="flex items-center ">
  <Image
    src="/images/home/Reviewer Image-2.png"
    alt="مهمان"
    width={20}
    height={20}
    className="relative z-10 h-8 w-8 rounded-full border-2 border-white object-cover"
  />

  <Image
    src="/images/home/Reviewer Image-1.png"
    alt="مهمان"
      width={20}
    height={20}
    className="relative z-20 -mr-3 h-8 w-8 rounded-full border-2 border-white object-cover"
  />

  <Image
    src="/images/home/Reviewer Image-3.png"
    alt="مهمان"
      width={20}
    height={20}
    className="relative z-30 -mr-3 h-8 w-8 rounded-full border-2 border-white object-cover"
  />
</div>

            
              <div>
                <p className="text-[12px] m-2 font-bold text-slate-800">
                 +۱۲۰ رزرو موفق
                </p>

               
              </div>

            </div>

           

          </div>

        </div>

      </div>
    </section>
  );
}