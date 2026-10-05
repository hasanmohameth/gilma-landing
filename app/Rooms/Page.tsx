import Image from "next/image";

export default function Rooms() {
  return (
    <section id="rooms" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="mx-auto mb-12 max-w-2xl text-center">

   <div className="relative mb-4 inline-flex h-[50px] w-[50px] items-center justify-center">

  <Image
    src="/images/rooms/Icon Container.png"
    alt=""
    width={50}
    height={50}
    className="absolute inset-0"
  />

  <Image
    src="/images/rooms/Icon.png"
    alt=""
    width={25}
    height={25}
    className="absolute bottom-5 z-10 "
  />

</div>

          <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            انواع اتاق‌های اقامتگاه گیلما
          </h2>

          <p className="text-slate-600">
            کلبه‌های چوبی دنج با امکانات کامل در دل طبیعت
          </p>
        </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-card transition hover:shadow-soft">
            <Image
              src="/images/rooms/package1 1.png"
              alt="کلبه جنگلی"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 right-0 z-10 w-full p-5 text-white">
              <h3 className="mb-1 font-bold">
                کلبه جنگلی گیلما
              </h3>

              <p className="mb-3 text-sm text-white/80">
                هر شب از ۲,۸۰۰,۰۰۰ تومان
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-white/70">
                  ۲ نفر
                </span>

             
              </div>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-card transition hover:shadow-soft">
            <Image
              src="/images/rooms/package2 1.png"
              alt="کلبه چوبی"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 right-0 z-10 w-full p-5 text-white">
              <h3 className="mb-1 font-bold">
                کلبه چوبی گیلما
              </h3>

              <p className="mb-3 text-sm text-white/80">
                هر شب از ۳,۲۰۰,۰۰۰ تومان
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-white/70">
                  ۳ نفر
                </span>

             
              </div>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-card transition hover:shadow-soft">
            <Image
              src="/images/rooms/package3 1.png"
              alt="سوئیت طبیعت"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 right-0 z-10 w-full p-5 text-white">
              <h3 className="mb-1 font-bold">
                سوئیت طبیعت گیلما
              </h3>

              <p className="mb-3 text-sm text-white/80">
                هر شب از ۴,۵۰۰,۰۰۰ تومان
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-white/70">
                  ۴ نفر
                </span>

                
              </div>
            </div>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-card transition hover:shadow-soft">
            <Image
              src="/images/rooms/package4 1.png"
              alt="ویلای جنگلی"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 right-0 z-10 w-full p-5 text-white">
              <h3 className="mb-1 font-bold">
                ویلای جنگلی گیلما
              </h3>

              <p className="mb-3 text-sm text-white/80">
                هر شب از ۶,۸۰۰,۰۰۰ تومان
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-white/70">
                  ۶ نفر
                </span>

               
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}