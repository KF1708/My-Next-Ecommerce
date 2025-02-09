"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import AllProducts from "@/components/products/AllProducts";

const Product = () => {
  return (
    <>
      <div className="featured_product main_container">
        <h2 className="home_section_title"></h2>
        <AllProducts />
      </div>
    </>
  );
};

export default Product;
