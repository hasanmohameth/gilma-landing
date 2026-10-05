import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-[85%] rounded-full m-auto mt-10  sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="#" className="flex items-center gap-2">
         <div className="flex items-center justify-center    ">
  <Image
    src="/images/header/IMG_14136.png"
    alt="لوگوی گیلما"
    width={169}
  height={53}
  
  />
</div>
            
          </Link>

          <nav className="hidden  items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            <Link href="#home" className="text-primary-700">
              خانه
            </Link>

            <Link href="#about" className="hover:text-primary-700">
             سوئیت‌ها و اقامت
            </Link>

            <Link href="#rooms" className="hover:text-primary-700">
درباره گیلمار            </Link>

            <Link href="#services" className="hover:text-primary-700">
              راهنمای مهمان‌ها
            </Link>

            <Link href="#packages" className="hover:text-primary-700">
              مجله گیلمار
            </Link>

            <Link href="#blog" className="hover:text-primary-700">
تماس با ما            </Link>

            
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-gilma px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-primary-200 transition hover:bg-primary-700 sm:inline-flex"
            >
              مهمان گیلما شو
            </Link>

            <button
              id="mobile-menu-btn"
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}