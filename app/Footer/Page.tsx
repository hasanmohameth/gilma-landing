
import Link from "next/link";
import Image from "next/image";

export default function Footer(){

    return(
    <footer id="contact" className=" ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-50 h-20 rounded-full  flex items-center
            
            justify-center text-white font-bold">  
             <Image src='/images/footer/IMG_1413 5.png' width={150}
                height={60}
                alt="asd"
                /></div>
       
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            اقامتگاه بوم‌گردی گیلما در دل جنگل‌های سرسبز شمال، تجربه‌ای اصیل از زندگی در طبیعت را به شما هدیه می‌دهد.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">دسترسی سریع</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#home" className="hover:text-primary-400 transition">خانه</Link></li>
            <li><Link href="#rooms" className="hover:text-primary-400 transition">اتاق‌ها</Link></li>
            <li><Link href="#packages" className="hover:text-primary-400 transition">پکیج‌ها</Link></li>
            <li><Link href="#blog" className="hover:text-primary-400 transition">مجله</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">تماس با گیلما</h4>
         <ul className="space-y-3 text-sm">
  <li className="flex items-start gap-2">
    <svg
      className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
    <span>گیلان، جنگل‌های هیرکانی</span>
  </li>

  <li className="flex items-center gap-2">
    <svg
      className="w-5 h-5 text-primary-400 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
    <span>۰۹۱۲ XXX XXXX</span>
  </li>

  <li className="flex items-center gap-2">
    <svg
      className="w-5 h-5 text-primary-400 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
    <span>info@gilma.ir</span>
  </li>
</ul>
        </div>
       <div>
  <h4 className="font-bold text-white mb-4">موقعیت مکانی</h4>
  <div className="relative h-45 w-70 overflow-hidden rounded-xl">
  <Image
    src="/images/footer/Map image container 1.png"
    alt="نقشه موقعیت مکانی"
    fill
    className="object-cover"
  />

  <Image
    src="/images/footer/Subtract.png"
    alt="نقشه موقعیت مکانی"
    width={240}          
    height={180}
    className="absolute left-[120px] top-0 rotate-180 object-cover"
  />
</div>
</div>
      </div>
    
    </div>

      <div className=" m-5 rounded-3xl bg-amber-50 p-3 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© ۱۴۰۳ اقامتگاه بوم‌گردی گیلما. تمامی حقوق محفوظ است.</p>
        <div className="flex gap-4 m-1">
          <Link href="#" className="hover:text-primary-400 transition bg-gilma rounded-full p-3"><Image   width={18}
                height={18} alt='' src='/images/footer/Social Icons-1.png' /></Link>
          <Link href="#" className="hover:text-primary-400 transition bg-gilma rounded-full p-3"><Image   width={18}
                height={18} alt='' src='/images/footer/Social Icons-2.png' /></Link>
                <Link href="#" className="hover:text-primary-400 transition bg-gilma rounded-full p-3"><Image   width={18}
                height={18} alt='' src='/images/footer/Social Icons-3.png' /></Link>
          <Link href="#" className="hover:text-primary-400 transition bg-gilma rounded-full p-3 "><Image   width={18}
                height={18} alt='' src='/images/footer/Social Icons.png'  /></Link>

        </div>
      </div>
  </footer>
    )
}