import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

export const servicesData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "I design and develop websites that are fast, responsive, and user-friendly. I use the latest technologies to ensure that my websites are optimized for search engines and mobile devices.",
  },
  {
    icon: <RxPencil2 />,
    title: "Desing",
    description:
      "I design and develop websites that are fast, responsive, and user-friendly. I use the latest technologies to ensure that my websites are optimized for search engines and mobile devices.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "I design and develop websites that are fast, responsive, and user-friendly. I use the latest technologies to ensure that my websites are optimized for search engines and mobile devices.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description:
      "I design and develop websites that are fast, responsive, and user-friendly. I use the latest technologies to ensure that my websites are optimized for search engines and mobile devices.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "I design and develop websites that are fast, responsive, and user-friendly. I use the latest technologies to ensure that my websites are optimized for search engines and mobile devices.",
  },
];

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

export default function WorkSlider() {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[240px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden 
                    flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image
                        src={image.path}
                        alt={image.path}
                        width={500}
                        height={300}
                      />
                      {/* overflow gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent cursor-pointer
                        via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transitial-all duration-700"
                      ></div>
                      {/* title */}
                      <div
                        className="absolute bottom-0 translate-y-full group-hover:-translate-y-10
                            group-hover:xl:-translate-y-30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div
                            className="translate-y-[500%] group-hover:translate-y-0 transitial-all
                                duration-300 delay-150"
                          >
                            PROJECT
                          </div>
                          {/* icon */}
                          <div
                            className="text-xl translate-y-[500%] group-hover:translate-y-0 
                                transitial-all duration-300 delay-200"
                          >
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
