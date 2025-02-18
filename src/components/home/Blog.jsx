import Image from "next/image";
import React from "react";

import { GoDotFill } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
const Blog = () => {
  return (
    <div>
      <div className=" bg-slate-50 py-10 px-5">
        <div className="place-content-center">
          <h1 className="text-center font-bold text-2xl lg:text-5xl font-serif">
            Latest Blog Posts
          </h1>
          <p className="text-center font-normal text-sm lg:text-lg my-5 font-serif">
            Our team member's share daily blogs and experience here.
          </p>
          <div className="justify-evenly px-32 sm:px-36 md:px-72 lg:px-5 lg:flex flex-wrap gap-10">
            <div className="pb-3">
              <div className="py-5 overflow-hidden">
                <Image
                  src={"/blog_1.webp"}
                  alt="blog image"
                  height={100}
                  width={350}
                  className=" rounded-xl"
                />
              </div>
              <div className="flex mb-1">
                <p className=" text-sm text-slate-600">April 20, 2023</p>
                <GoDotFill className="mt-1 p-1 text-blue-600" />
                <p className=" text-sm text-slate-600">Saas & App</p>
              </div>
              <div className="block-title">
                <h3 className="lg:text-2xl text-xl font-normal cursor-pointer hover:text-blue-600 font-serif">
                  3 Ways My Style Has Evolved
                </h3>
                <div className="flex p-2">
                  <IoPerson className="text-red-600 m-1 " />
                  <p className="text-red-600 px-5 font-semibold ">
                    {" "}
                    Demo Admin
                  </p>
                </div>
                <p>
                  I used to stick to neutral tones, but now I embrace <br />{" "}
                  bold colors and patterns to add personality to <br />
                  my outfits. Earlier, I would sacrifice comfort for <br />
                  style, but now I choose well-fitted, breathable
                  <br /> fabrics that feel as good as they look. <br />I used to
                  buy trendy, fast-fashion pieces, <br />
                  but now I focus on timeless, high-quality
                  <br /> staples that last longer.
                </p>
              </div>
            </div>

            <div className="pb-3">
              <div className="py-5 overflow-hidden rounded-xl">
                <Image
                  src={"/blog_2.webp"}
                  alt="blog image"
                  height={50}
                  width={350}
                  className=" rounded-xl"
                />
              </div>
              <div className="flex mb-1">
                <p className=" text-sm text-slate-600">March 10, 2022</p>
                <GoDotFill className="mt-1 p-1 text-blue-600" />
                <p className=" text-sm text-slate-600">Saas & App</p>
              </div>
              <div className="block-title">
                <h3 className="lg:text-2xl text-xl font-normal cursor-pointer hover:text-blue-600 font-serif">
                  Daily Style Diaries Off Europe!
                </h3>
                <div className="flex p-2">
                  <IoPerson className="text-red-600 m-1 " />
                  <p className="text-red-600 px-5 font-semibold ">
                    {" "}
                    Demo Admin
                  </p>
                </div>
                <p>
                  Today, I embraced effortless Parisian style with a <br />
                  tailored blazer, straight-leg jeans, and classic <br /> ballet
                  flats. The unpredictable weather called for <br /> a stylish
                  trench coat over a cozy knit sweater, <br /> paired with sleek
                  ankle boots. Inspired by Italian <br /> fashion, I went for a
                  monochrome look with a <br />
                  fitted midi dress, gold accessories, and pointed heels.
                </p>
              </div>
            </div>

            <div className="pb-3">
              <div className="py-5 overflow-hidden rounded-xl">
                <Image
                  src={"/blog_3.webp"}
                  alt="blog image"
                  height={100}
                  width={350}
                  className=" rounded-xl"
                />
              </div>
              <div className="flex mb-1">
                <p className=" text-sm text-slate-600">May 08, 2024</p>
                <GoDotFill className="mt-1 p-1 text-blue-600" />
                <p className=" text-sm text-slate-600">Saas & App</p>
              </div>
              <div className="block-title">
                <h3 className="lg:text-2xl text-xl font-normal cursor-pointer hover:text-blue-600 font-serif">
                  Pellentesque habitant morbi
                </h3>
                <div className="flex p-2">
                  <IoPerson className="text-red-600 m-1 " />
                  <p className="text-red-600 px-5 font-semibold ">
                    {" "}
                    Demo Admin
                  </p>
                </div>
                <p>
                  Pellentesque habitant morbi tristique senectus <br /> et netus
                  et malesuada fames ac turpis egestas. <br /> Vestibulum ante
                  ipsum primis in faucibus orci <br />
                  luctus et ultrices posuere cubilia curae. <br /> Nam lacinia
                  nisi vel augue gravida, id posuere <br />
                  ligula tincidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
