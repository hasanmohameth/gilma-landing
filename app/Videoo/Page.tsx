

import Image from 'next/image';
import Link from 'next/link';


export default function Page() {
  return (
   <section className="bg-[#f7fafb] py-20" dir="rtl">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="relative flex min-h-[550px] flex-row-reverse items-center gap-12">
      <div className="relative w-1/2">

        <div className="relative h-[500px] w-full overflow-hidden rounded-[18px]">

          <Image
            src="/images/Videoo/Step section.png"
            alt=""
            fill
            className="object-cover"
          />

          <button
            type="button"
            className="
              absolute
              left-1/2
              top-1/2
              z-20
              flex
              h-20
              w-20
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/90
              shadow-lg
              backdrop-blur-sm
            "
          >
            <span className="ml-1 text-2xl text-emerald-500">
              ▶
            </span>
          </button>

        </div>

        <div
          className="
            pointer-events-none
            absolute
            -right-[280px]
            top-[-250px]
            z-10
            h-[1000px]
            w-[670px]
            -rotate-180


              "
        >
          <Image
            src="/images/Videoo/Subtract.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

      </div>


      <div className="relative z-20 w-1/2">

        <div className="mb-6 flex justify-start">
          <div className="relative flex h-[25px] w-[25px] items-center justify-center">

            <Image
              src="/images/Videoo/Bold/Video, Audio, Sound/Clapperboard Play.png"
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


        <h2 className="mb-5 text-3xl font-extrabold leading-[1.5] text-gray-900 md:text-4xl">
          تور ویدیویی اقامتگاه گیلما
        </h2>


        <p className="mb-8 max-w-xl text-base font-medium leading-8 text-gray-500">
          در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای دلنشین
          اقامتگاه گیلما را از نزدیک تماشا کنید و پیش از سفر، حال‌وهوای
          دلنشین آن را تجربه کنید.
        </p>


        <Link
          href="#rooms"
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-gilma
            px-5
            py-3
            text-sm
            font-bold
            text-white
            transition
            hover:scale-105
          "
        >
          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-white
              text-emerald-500
            "
          >
            ←
          </span>

          اقامت در گیلما
        </Link>

      </div>


      <div
        className="
          absolute
          bottom-0
          left-1/2
          z-30
          h-[80px]
          w-[80px]
          -translate-x-1/2
          translate-y-1/2
          
        "
      >
        <Image
          src="/images/Videoo/shape 1.png"
          alt=""
          fill
          className="object-contain "
        />
      </div>

    </div>

  </div>
</section>
  )
}
