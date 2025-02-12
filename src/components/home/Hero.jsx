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
            <div className=" absolute top-[30%] left-[30%]">
              <h2 className="font-extrabold font-serif text-center text-5xl">
                Winter <br /> Big Sale 2025
              </h2>
              <p className="py-9 font-medium text-lg">
                Discover the collection as styled by fashion in our new season
                campaign.
              </p>
              <Link href={"/product"}>
                {" "}
                <button className="font-bold border-2 p-3 ml-60 my-20 border-zinc-900">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image src={heroImageTwo} />
            <div className=" absolute top-[30%] left-[30%]">
              <h2 className="font-extrabold font-serif text-center text-5xl">
                Men Collection <br /> Big Sale 2025
              </h2>
              <p className="py-9 font-medium text-lg">
                Discover the collection as styled by fashion in our new season
                campaign.
              </p>
              <Link href={"/product"}>
                {" "}
                <button className="font-bold border-2 p-3 ml-60 my-20 border-zinc-900">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image src={heroImageThree} />
            <div className=" absolute top-[30%] right-[50%]">
              <h2 className="font-extrabold font-serif text-center text-5xl">
                Women Collection <br /> Big Sale 2025
              </h2>
              <p className="py-9 font-medium text-lg">
                Discover the collection as styled by fashion in our new season
                campaign.
              </p>
              <Link href={"/product"}>
                {" "}
                <button className="font-bold border-2 p-3 ml-60 my-20 border-zinc-900">
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
