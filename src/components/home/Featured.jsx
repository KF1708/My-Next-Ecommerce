"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Divider } from "antd";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const detailsPage = (id) => {
    router.push(`/product/${id}`);
  };

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(
          "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
        );
        if (response.data?.success) {
          setProducts(response.data.products || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllProducts();
  }, []);

  console.log("All Products : ", products);
  return (
    <div>
      <h2 className="text-center font-bold text-4xl font-serif pt-5 pb-8">
        Featured Products
      </h2>
      <div className="px-10 pb-10 relative">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 2,
            },
            860: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
            },
          }}
          navigation={{
            nextEl: "#featured_product_nextEl",
            prevEl: "#featured_product_prevEl",
          }}
          modules={[Navigation, FreeMode, Autoplay]}
          loop={true}
          freeMode={true}
          className="mySwiper"
          autoplay={{
            delay: 3000,
          }}
          slidesPerView={5}
          spaceBetween={20}
        >
          {products?.map((product) => (
            <SwiperSlide
              onClick={() => detailsPage(product?._id)}
              key={product?._id}
              className="text-center cursor-pointer"
            >
              <div className="product_card">
                <Link
                  href={`/product/${product._id}`}
                  className="product_image"
                >
                  <div>
                    <Image
                      src={product?.thumbnail || "/dummyImage.png"}
                      height={250}
                      width={200}
                      alt={`product ${product.name}`}
                      className="lg:h-60 lg:w-60 h-96 md:h-72 sm:h-52"
                    />
                  </div>
                </Link>

                <div>
                  <h4 className="title font-serif p-1 truncate">
                    {product?.name}
                  </h4>
                  <Divider />

                  <div className="product-price">
                    <div>
                      {product.discount.value > 0 ? (
                        <div>
                          {product?.discount?.discountType === "flat" && (
                            <h2 className="price">
                              ${product?.price - product?.discount?.value}
                              <span className="old_price">
                                ${product?.price}
                              </span>
                            </h2>
                          )}
                          {product?.discount?.discountType === "percent" && (
                            <h2 className="price">
                              $
                              {product?.price -
                                Math.floor(
                                  product.price *
                                    (product?.discount?.value / 100)
                                )}
                              <span className="old_price">
                                ${product?.price}
                              </span>
                            </h2>
                          )}
                        </div>
                      ) : (
                        <h2 className="price">${product?.price}</h2>
                      )}
                    </div>
                    <div className="rating">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.48862 12.4684C8.18515 12.2985 7.81521 12.2985 7.51173 12.4684L4.60214 14.0971C3.85754 14.5139 2.96658 13.8666 3.13286 13.0296L3.78261 9.75904C3.85037 9.41792 3.73604 9.06608 3.48069 8.82997L1.03224 6.56592C0.405704 5.98657 0.74598 4.93916 1.59338 4.83866L4.90487 4.44592C5.2502 4.40496 5.54946 4.18754 5.69513 3.87176L7.09214 0.843402C7.44957 0.0685822 8.55079 0.0685822 8.90822 0.843402L10.3052 3.87176C10.4509 4.18754 10.7502 4.40496 11.0955 4.44592L14.407 4.83866C15.2544 4.93916 15.5947 5.98657 14.9681 6.56592L12.5197 8.82997C12.2643 9.06608 12.15 9.41792 12.2178 9.75904L12.8675 13.0296C13.0338 13.8666 12.1428 14.5139 11.3982 14.0971L8.48862 12.4684Z"
                          fill="#FBBC05"
                        />
                      </svg>
                      ({product?.ratingCount})
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="navigation_buttons">
          <button id="featured_product_prevEl" className="">
            <div className="image ">
              <Image
                src={"/images/product/nextEl.svg"}
                height={30}
                width={30}
                alt="next button"
              />
            </div>
          </button>
          <button id="featured_product_nextEl">
            <div className="image">
              <Image
                src={"/images/product/prevEl.svg"}
                height={30}
                width={30}
                alt="prev button"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
