import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function WorksItem() {
  const works = [
    {
      title: "Serita Homes",
      description:
        "A fully responsive WordPress Landing Page with a clean and modern design.",
      image: "/img/works6.png",
      tags: ["#WordPress", "#Sass", "Javascript", "Cording"],
    },
    {
      title: "UTAGE SAPPORO",
      description:
        "A fully responsive WordPress site with a clean and modern design.",
      image: "/img/works7.png",
      tags: ["#WordPress", "#Sass", "Javascript", "Cording"],
    },
    {
      title: "Steppin'",
      description:
        "A clean and modern design for a personal portfolio or small business website.",
      image: "/img/works1.png",
      tags: ["#WordPress", "#design"],
    },
    {
      title: "Kawagoe Home Smith Show",
      description:
        "A fully responsive e-commerce site with advanced product filtering.",
      image: "/img/works9.png",
      tags: ["#HTML", "#CSS", "#Javascript", "Cording"],
    },

    {
      title: "Fertum",
      description:
        "A fully responsive WordPress site with a clean and modern design.",
      image: "/img/works8.png",
      tags: ["#WordPress", "#Sass", "Javascript", "Cording"],
    },
  ];

  return (
    <div className="h-screen bg-white shadow-lg overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 py-20">
        <h2 className="text-6xl font-dm-serif text-black">Works</h2>
        <h3 className="text-xl font-relation text-black">
          What I&apos;ve been working on.
        </h3>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {works.map((work, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center -m-4 px-48">
              <div className="overflow-hidden flex-1 m-auto">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={1600}
                  height={1600}
                  className="block h-auto w-full"
                />
              </div>
              <div className="flex-1 p-12">
                <div className="px-6 py-4 text-gray-700">
                  <h3 className="font-bold text-2xl mb-2">{work.title}</h3>
                  <p className=" text-base">{work.description}</p>
                </div>
                <div className="px-6 py-4">
                  {work.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
