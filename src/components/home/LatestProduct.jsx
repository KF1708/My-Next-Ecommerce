"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import manImageOne from "../../../public/images/latestProduct/man_1.webp";
import manImageTwo from "../../../public/images/latestProduct/man_2.jpg";
import manImageThree from "../../../public/images/latestProduct/man_3.webp";
import manImageFour from "../../../public/images/latestProduct/man_4.webp";
import manImageFive from "../../../public/images/latestProduct/man_5.webp";
import manImageSix from "../../../public/images/latestProduct/man_6.webp";
import womanImageOne from "../../../public/images/latestProduct/woman_1.webp";
import womanImageTwo from "../../../public/images/latestProduct/woman_2.webp";
import womanImageThree from "../../../public/images/latestProduct/woman_3.webp";
import womanImageFour from "../../../public/images/latestProduct/woman_4.webp";
import womanImageFive from "../../../public/images/latestProduct/woman_5.webp";
import womanImageSix from "../../../public/images/latestProduct/woman_6.webp";
const LatestProduct = () => {
  return (
    <div className="py-20 px-10">
      <h1 className="text-center font-bold text-3xl font-serif ">
        Latest Product
      </h1>
      <p className="text-center py-10 text-lg font-serif ">
        Our latest product available in the store and online! Choose you're one
        now.
      </p>
      <div className="">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={manImageOne} alt="man shirt" />
            <p className="text-red-600 font-bold">$19.00</p>
            <p className=" font-medium">Short Slive Shirt</p>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={manImageTwo} alt="man shirt" />
            <p className="text-red-600 font-bold">$29.00</p>
            <p className="font-medium">Hawaii Shirt</p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="absolute -top-0 right-0 px-3  text-white font-normal bg bg-black shadow-lg shadow-gray-500/50 rounded-full">
              {" "}
              -27%
            </h1>
            <Image src={manImageThree} alt="man shirt" />

            <p className="text-red-600 font-bold">
              {" "}
              <span className="text-gray-400 font-bold line-through pr-5">
                $75.00
              </span>
              $55.00
            </p>
            <p className="font-medium">Long Slive Shirt</p>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={manImageFour} alt="man shirt" />
            <p className="text-red-600 font-bold">$21.00</p>
            <p className="font-medium"> T-Shirt</p>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={manImageFive} alt="man shirt" />
            <h1 className="absolute -top-0 right-0 p-1 text-white font-normal bg bg-red-500 shadow-lg shadow-red-500/50 rounded-full">
              {" "}
              Soldout
            </h1>
            <p className="text-red-600 font-bold line-through">$19.00</p>
            <p className=" font-medium">Short Slive Shirt</p>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={manImageSix} alt="man shirt" height={150} width={300} />
            <p className="text-red-600 font-bold">$59.00</p>
            <p className=" font-medium">Rain Jacket</p>
          </SwiperSlide>

          <SwiperSlide>
            <Image src={womanImageOne} alt="woman dress" />
            <p className="text-red-600 font-bold">$75.00</p>
            <p className=" font-medium">New Dress</p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="absolute -top-0 right-0 px-3  text-white font-normal bg bg-black shadow-lg shadow-gray-500/50 rounded-full">
              {" "}
              -18%
            </h1>
            <Image src={womanImageTwo} alt="woman dress" />
            <p className="text-red-600 font-bold">
              {" "}
              <span className="text-gray-400 font-bold line-through pr-5">
                $85.00
              </span>
              $70.00
            </p>
            <p className=" font-medium">Long Slive Dress</p>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={womanImageThree} alt="woman dress" />
            <p className="text-red-600 font-bold">$39.00</p>
            <p className=" font-medium">Summer Dress</p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="absolute -top-0 right-0  px-3  text-white font-normalbg bg-black shadow-lg shadow-gray-500/50 rounded-full">
              {" "}
              -15%
            </h1>
            <Image src={womanImageFour} alt="woman dress" />
            <p className="text-red-600 font-bold">
              {" "}
              <span className="text-gray-400 font-bold line-through pr-5">
                $130.00
              </span>
              $110.00
            </p>
            <p className=" font-medium">Short Dress</p>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={womanImageFive} alt="woman dress" />
            <h1 className="absolute -top-0 right-0 p-1  text-white font-normal bg bg-red-500 shadow-lg shadow-red-500/50 rounded-full">
              {" "}
              Soldout
            </h1>
            <p className="text-red-600 font-bold line-through">$39.00</p>
            <p className=" font-medium">Summer Dress</p>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={womanImageSix} alt="woman dress" />
            <p className="text-red-600 font-bold">$79.00</p>
            <p className=" font-medium">Long Slive Dress</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LatestProduct;
