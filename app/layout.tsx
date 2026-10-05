import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "اقامتگاه بوم‌گردی گیلما | آرامش در آغوش طبیعت گیلان",
  description:
    "اقامتگاه بوم‌گردی گیلما، تجربه‌ای اصیل از زندگی در دل طبیعت شمال ایران. کلبه‌های چوبی، طبیعت بکر و آرامش واقعی.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full antialiased">
      <body className="bg-main min-h-full flex flex-col font-bold ">
        {children}
      </body>
    </html>
  );
}