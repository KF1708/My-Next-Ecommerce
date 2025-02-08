"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import { FaStar } from "react-icons/fa";

import feedBackImageOne from "../../../public/images/feedBack/feedback_1.webp";
import feedBackImageTwo from "../../../public/images/feedBack/feedback_2.webp";
import feedBackImageThree from "../../../public/images/feedBack/feedback_3.png";
import feedBackImagefour from "../../../public/images/feedBack/quotation.png";
import Image from "next/image";

const FeedBack = () => {
  return (
    <div>
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
        <SwiperSlide className="px-5 py-10 bg-lime-50">
          <div className="">
            <div className="flex place-content-center">
              <Image src={feedBackImageOne} />
            </div>
            <div className="">
              <p className="py-10 px-16 font-medium text-lg font-serif">
                “ Perfect Themes and the best of all that hastech you have many
                nirob kahn options to choose! Best Support team ever!Very fast
                responding and is shaddam not so good the best for all experts
                on their fields! Their expertise in the field guarantees the
                best experience for professionals and businesses alike. The
                support team is truly dedicated, always going the extra mile.
                Choosing Hastech means choosing reliability and excellence. and
                best of all that you have many options to choose! Best Support
                Thank you very much! ”
              </p>
              <div className="flex place-content-center p-5">
                {" "}
                <Image src={feedBackImagefour} className="text-center" />
              </div>
              <h2 className="font-extrabold font-serif text-center text-lg p-1">
                JOHN SULLIVAN
              </h2>
              <p className="text-center text-gray-600 p-2">Customer</p>

              <div className="flex text-amber-400  place-content-center mb-14 gap-2">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-5 py-10 bg-orange-50">
          <div className="">
            <div className="flex place-content-center">
              <Image src={feedBackImageTwo} />
            </div>
            <div className="">
              <p className="py-10 px-16 font-medium text-lg font-serif">
                “ Whether you're new to website design or an experienced
                developer, their themes cater to all skill levels. The designs
                are modern, highly customizable, and built with quality in mind.
                Their intuitive interface ensures a smooth and hassle-free
                experience for users. With Hastech, you get both creativity and
                functionality in one package. Their dedication to customer
                satisfaction makes them a leader in the industry. The variety of
                options allows users to create unique and professional websites
                effortlessly. Their team’s expertise and commitment to
                excellence are evident in every interaction. Choosing Hastech
                means investing in reliability, innovation, and top-tier
                support.! ”
              </p>
              <div className="flex place-content-center p-5">
                {" "}
                <Image src={feedBackImagefour} className="text-center" />
              </div>
              <h2 className="font-extrabold font-serif text-center text-lg p-1">
                SHILA SMITH
              </h2>
              <p className="text-center text-gray-600 p-2">Customer</p>

              <div className="flex text-amber-400  place-content-center mb-14 gap-2">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-5 py-10 bg-purple-50">
          <div className="">
            <div className="flex place-content-center">
              <Image src={feedBackImageThree} width={80} />
            </div>
            <div className="">
              <p className="py-10 px-16 font-medium text-lg font-serif">
                “ Hastech offers perfect themes with a wide range of options to
                choose from! The support team is incredibly responsive and
                always ready to assist. Their fast response time ensures a
                smooth experience for all users. Whether you're a beginner or an
                expert, their solutions cater to everyone. The quality and
                design of their themes are top-notch, making them stand out in
                the industry. With so many customization options, you can create
                exactly what you need. Their expertise in the field guarantees
                the best experience for professionals and businesses alike. The
                support team is truly dedicated, always going the extra mile.
                Choosing Hastech means choosing reliability and excellence.
                Highly recommended for anyone looking for the best service and
                products! ”
              </p>
              <div className="flex place-content-center p-5">
                {" "}
                <Image src={feedBackImagefour} className="text-center" />
              </div>
              <h2 className="font-extrabold font-serif text-center text-lg p-1">
                ANGELINA JOLLI
              </h2>
              <p className="text-center text-gray-600 p-2">Customer</p>

              <div className="flex text-amber-400  place-content-center mb-14 gap-2">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeedBack;
