"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/cart";

const ProductDetails = ({ id }) => {
  const [productDetails, setProductDetails] = useState({});
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log("Cart", cart);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://staging-be-ecom.techserve4u.com/api/product/${id}`
        );
        if (response.data) {
          setProductDetails(response.data.product || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [id]);

  console.log("Product Details :", productDetails);

  return (
    <div className=" ">
      <h1 className="text-center p-5 text-xl font-semibold font-serif text-blue-500">
        Product Details
      </h1>
      <div className="flex justify-evenly gap-5 m-5">
        <div className="product_image">
          <Image
            src={productDetails?.thumbnail || "/dummyImage.png"}
            height={250}
            width={200}
            alt={`product ${productDetails.name}`}
            className="lg:h-80 lg:w-80 h-52"
          />
        </div>
        <div className="">
          <h4 className="title text-xl font-semibold font-serif text-center ">
            {productDetails?.name}
          </h4>

          <Divider />

          <div className="product-price pb-10 px-14">
            <div className="px-5">
              {productDetails.discount?.value > 0 ? (
                <div>
                  {productDetails?.discount?.discountType === "flat" && (
                    <h2 className="price">
                      ${productDetails?.price - productDetails?.discount?.value}
                      <span className="old_price">
                        ${productDetails?.price}
                      </span>
                    </h2>
                  )}
                  {productDetails?.discount?.discountType === "percent" && (
                    <h2 className="price">
                      $
                      {productDetails?.price -
                        Math.floor(
                          productDetails.price *
                            (productDetails?.discount?.value / 100)
                        )}
                      <span className="old_price">
                        ${productDetails?.price}
                      </span>
                    </h2>
                  )}
                </div>
              ) : (
                <h2 className="price">${productDetails?.price}</h2>
              )}
            </div>
            <div className="">
              <h1 className="text-lg font-serif font-semibold">
                Stock:
                <span className="text-red-600 font-sans">
                  ({productDetails?.stock})
                </span>
              </h1>
            </div>
            <div className="rating place-content-center p-5">
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
              ({productDetails?.ratingCount})
            </div>
          </div>
          <div className=" grid grid-cols-6">
            {" "}
            <button
              onClick={
                cart.some((item) => item._id === productDetails._id)
                  ? () => dispatch(removeFromCart(productDetails._id))
                  : () => dispatch(addToCart(productDetails))
              }
              className="col-span-4 col-start-2 bg-blue-500 p-2 mb-5 rounded-xl text-lg font-serif text-gray-100 hover:bg-orange-500"
            >
              {cart.some((item) => item._id === productDetails._id)
                ? "Remove from cart"
                : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <h4 className="text-balance text-lg font-serif text-center p-5">
          {productDetails.description ? (
            productDetails.description
          ) : (
            <p className="">
              This is our best-selling product, highly rated for its outstanding
              quality <br /> and performance. Crafted with premium materials, it
              ensures durability and long-lasting use. <br /> Customers love its
              reliability, making it a top choice in its category. Designed to
              meet high standards, <br />
              it offers excellent value for money. Experience the perfect blend
              of quality, functionality, <br />
              and customer satisfaction with this highly recommended product.
            </p>
          )}
        </h4>
      </div>
    </div>
  );
};

export default ProductDetails;
