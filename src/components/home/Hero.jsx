"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import heroImageOne from "../../../public/images/hero/slider_01.webp";
import heroImageTwo from "../../../public/images/hero/slider_02.webp";
import heroImageThree from "../../../public/images/hero/slider_03.webp";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoHeight={true}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <Image src={heroImageOne} />
            <div className="absolute lg:top-[30%] lg:left-[30%] top-5 left-14 sm:top-7 sm:left-20 md:top-10 md:left-44">
              <h2 className="font-extrabold font-serif text-center text-base sm:text-xl md:text-2xl lg:text-5xl">
                Winter <br /> Big Sale 2025
              </h2>
              <p className="py-9 font-medium text-sm lg:text-lg">
                Discover the collection as styled by fashion in our new season
                campaign.
              </p>
              <Link href={"/product"}>
                {" "}
                <button className="font-bold border-2 p-3 ml-40 lg:ml-60 sm:my-5 lg:my-20 md:my-10 border-zinc-900">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image src={heroImageTwo} />
            <div className="absolute lg:top-[30%] lg:left-[30%] top-5 sm:top-7 left-14 sm:left-20 md:top-10 md:left-44">
              <h2 className="font-extrabold font-serif text-center text-base sm:text-xl md:text-2xl lg:text-5xl">
                Men Collection <br /> Big Sale 2025
              </h2>
              <p className="py-9 font-medium text-sm lg:text-lg">
                Discover the collection as styled by fashion in our new season
                campaign.
              </p>
              <Link href={"/product"}>
                {" "}
                <button className="font-bold border-2 p-3 ml-40 lg:ml-60 sm:my-5 lg:my-20 md:my-10 border-zinc-900">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image src={heroImageThree} />
            <div className=" absolute lg:top-[30%] lg:right-[50%] top-5 sm:top-7 sm:right-32 right-32  md:top-10 md:right-60">
              <h2 className="font-extrabold font-serif text-center text-base sm:text-xl md:text-2xl lg:text-5xl">
                Women Collection <br /> Big Sale 2025
              </h2>
              <p className="py-9 font-medium text-sm lg:text-lg">
                Discover the collection as styled by fashion in our new season
                campaign.
              </p>
              <Link href={"/product"}>
                {" "}
                <button className="font-bold border-2 p-3 ml-40 lg:ml-60 sm:my-5 lg:my-20 md:my-10 border-zinc-900">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
