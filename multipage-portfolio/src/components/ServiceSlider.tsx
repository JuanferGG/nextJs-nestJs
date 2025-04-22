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
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper/modules";

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

export default function ServiceSlider() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {servicesData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer">
              {/* Icon */}
              <div>{item.icon}</div>
              {/* Title */}
              <div>
                <div>{item.title}</div>
                <p>{item.description}</p>
              </div>
              {/* Arrow */}
              <div className="text-3xl">
                <RxArrowTopRight />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
