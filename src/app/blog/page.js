import Image from "next/image";
import React from "react";

import { GoDotFill } from "react-icons/go";
import { IoPerson } from "react-icons/io5";

import blogImageOne from "../../../public/images/blog/blog_1.webp";
import blogImageTwo from "../../../public/images/blog/blog_2.webp";
import blogImageThree from "../../../public/images/blog/blog_3.webp";
import blogImageFour from "../../../public/images/blog/blog_4.jpg";
import blogImageFive from "../../../public/images/blog/blog_5.webp";
import blogImageSix from "../../../public/images/blog/blog_6.webp";
const Blog = () => {
  return (
    <div>
      <div className=" bg-amber-50 py-14 px-10">
        <div className="place-content-center">
          <h1 className="text-center font-bold lg:text-5xl md:text-2xl text-xl my-5 font-serif">
            Latest Blog Posts
          </h1>
          <p className="text-center font-normal lg:text-lg text-sm lg:mb-5 mb-1">
            Our team members share daily blogs and experience here.
          </p>
          <div className=" justify-evenly grid lg:grid-cols-3 grid-cols-2 p-5 pb-20 gap-10">
            <div className="group">
              <div className="py-5 overflow-hidden">
                <Image
                  src={blogImageOne}
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
                <h3 className="text-2xl font-normal cursor-pointer hover:text-blue-600 font-serif">
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

            <div className="group">
              <div className="py-5 overflow-hidden rounded-xl">
                <Image
                  src={blogImageTwo}
                  alt="blog image"
                  height={100}
                  width={350}
                  className=" rounded-xl"
                />
              </div>
              <div className="flex mb-1">
                <p className=" text-sm text-slate-600">March 10, 2023</p>
                <GoDotFill className="mt-1 p-1 text-blue-600" />
                <p className=" text-sm text-slate-600">Saas & App</p>
              </div>
              <div className="block-title">
                <h3 className="text-2xl font-normal cursor-pointer hover:text-blue-600 font-serif">
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

            <div data-aos="zoom-in-up" className="group">
              <div className="py-5 overflow-hidden rounded-xl">
                <Image
                  src={blogImageThree}
                  alt="blog image"
                  height={100}
                  width={350}
                  className=" rounded-xl"
                />
              </div>
              <div className="flex mb-1">
                <p className=" text-sm text-slate-600">July 28, 2024</p>
                <GoDotFill className="mt-1 p-1 text-blue-600" />
                <p className=" text-sm text-slate-600">Saas & App</p>
              </div>
              <div className="block-title">
                <h3 className="text-2xl font-normal cursor-pointer hover:text-blue-600 font-serif">
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

            <div>
              <div className="py-5 overflow-hidden rounded-xl">
                <Image
                  src={blogImageFour}
                  alt="blog image"
                  height={100}
                  width={350}
                  className="rounded-xl"
                />
              </div>
              <div className="flex mb-1">
                <p className=" text-sm text-slate-600">Nov 17, 2024</p>
                <GoDotFill className="mt-1 p-1 text-blue-600" />
                <p className=" text-sm text-slate-600">Saas & App</p>
              </div>
              <div className="block-title">
                <h3 className="text-2xl font-normal cursor-pointer hover:text-blue-600 font-serif">
                  The Fashion Design Guide
                </h3>
                <div className="flex p-2">
                  <IoPerson className="text-red-600 m-1 " />
                  <p className="text-red-600 px-5 font-semibold ">
                    {" "}
                    Demo Admin
                  </p>
                </div>
                <p>
                  The Fashion Design Guide serves as a comprehensive resource
                  for aspiring and professional designers. It covers essential
                  topics such as fabric selection, color theory, and garment
                  construction. The guide explores the history of fashion and
                  how past trends influence modern styles. Readers can learn
                  about different fashion categories, including haute couture,
                  ready-to-wear, and sustainable fashion.
                </p>
              </div>
            </div>

            <div data-aos="zoom-in-up" className="group">
              <div className="py-5 overflow-hidden rounded-xl">
                <Image
                  src={blogImageFive}
                  alt="blog image"
                  height={100}
                  width={350}
                  className=" rounded-xl"
                />
              </div>
              <div className="flex mb-1">
                <p className=" text-sm text-slate-600">Jan 05, 2025</p>
                <GoDotFill className="mt-1 p-1 text-blue-600" />
                <p className=" text-sm text-slate-600">Saas & App</p>
              </div>
              <div className="block-title">
                <h3 className="text-2xl font-normal cursor-pointer hover:text-blue-600 font-serif">
                  Adopting The Fashion Design Guide
                </h3>
                <div className="flex p-2">
                  <IoPerson className="text-red-600 m-1 " />
                  <p className="text-red-600 px-5 font-semibold ">
                    {" "}
                    Demo Admin
                  </p>
                </div>
                <p>
                  Adopting The Fashion Design Guide can help designers develop a
                  structured approach to their creative process. It allows
                  individuals to gain a deeper understanding of fabric
                  selection, color coordination, and garment construction. By
                  following the guide, designers can refine their sketching and
                  digital design skills. Overall, Adopting The Fashion Design
                  Guide is a valuable step toward mastering the art and business
                  of fashion.
                </p>
              </div>
            </div>

            <div data-aos="zoom-in-up" className="group">
              <div className="py-5 overflow-hidden rounded-xl">
                <Image
                  src={blogImageSix}
                  alt="blog image"
                  height={100}
                  width={350}
                  className=" rounded-xl"
                />
              </div>
              <div className="flex mb-1">
                <p className=" text-sm text-slate-600">Feb 01, 2025</p>
                <GoDotFill className="mt-1 p-1 text-blue-600" />
                <p className=" text-sm text-slate-600">Saas & App</p>
              </div>
              <div className="block-title">
                <h3 className="text-2xl font-normal cursor-pointer hover:text-blue-600 font-serif">
                  5 Tropical Getaways You Need
                </h3>
                <div className="flex p-2">
                  <IoPerson className="text-red-600 m-1 " />
                  <p className="text-red-600 px-5 font-semibold ">
                    {" "}
                    Demo Admin
                  </p>
                </div>
                <p>
                  5 Tropical Getaways You Need highlights some of the most
                  breathtaking vacation spots in the world. Many resorts in
                  these destinations offer luxury accommodations with
                  breathtaking ocean views. Whether you seek tranquility or
                  vibrant nightlife, these tropical spots have something for
                  everyone. 5 Tropical Getaways You Need will inspire your next
                  dream vacation to paradise.
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
