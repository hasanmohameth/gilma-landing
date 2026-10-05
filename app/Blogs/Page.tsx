const rooms = [
  {
    title: "۱۰ تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
     discription: "از قدم زدن رد جنگل های مه آلود تا نوشیدن چای کنار شالیزار،در این مقاله با لذت های ساده و آرامش ظبیعت...",
    img: "/images/blogs/Frame 2147238359.png",
  },
  {
    title: "۱۰ تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
     discription: "از قدم زدن رد جنگل های مه آلود تا نوشیدن چای کنار شالیزار،در این مقاله با لذت های ساده و آرامش ظبیعت...",
    img: "/images/blogs/Frame 2147238359.png",
  },
  {
    title: "۱۰ تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
     discription: "از قدم زدن رد جنگل های مه آلود تا نوشیدن چای کنار شالیزار،در این مقاله با لذت های ساده و آرامش ظبیعت...",
    img: "/images/blogs/Frame 2147238359.png",
  },
];

export default function Rooms() {
  return (
    <section dir="rtl" id="rooms" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* عنوان */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            انواع اتاق‌های اقامتگاه گیلما
          </h2>
          <p className="text-slate-600">کلبه‌های چوبی دنج با امکانات کامل در دل طبیعت</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <article
              key={index}
              className="group relative h-[520px] overflow-hidden rounded-2xl shadow-lg"
            >
            
              <img
                src={room.img}
                alt={room.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

         
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
                <h3 className="mb-1 text-lg font-bold leading-tight">
                  {room.title}
                </h3>
                <p className="mb-2 text-sm text-white/90">{room. discription}</p>
               
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}