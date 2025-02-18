import { useDispatch, useSelector } from "react-redux";

import { Divider } from "antd";
import Image from "next/image";
import React from "react";
import { MdDeleteForever } from "react-icons/md";

import { removeAll, removeFromCart } from "@/redux/cart";

import Link from "next/link";

const CartProduct = ({ setOpen }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const subTotal = cart.reduce((sum, item) => sum + item.price, 0);
  console.log("Cart subtotal price", subTotal);

  const tax = (subTotal * 5) / 100;
  const total = subTotal - tax;

  const handleCheckOut = () => {
    dispatch(removeAll([]));
    setOpen(false);
  };

  const removeCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
      {cart.length > 0 ? (
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            {cart.map((product) => (
              <div
                className="bg-blue-50 px-5 py-3 rounded-lg flex gap-5 justify-between"
                key={product?._id}
              >
                <Image
                  className="h-16 object-contain rounded-lg"
                  src={product?.thumbnail}
                  height={200}
                  width={50}
                  alt="cart item image"
                />
                <div className="flex flex-col gap-3">
                  <h3 className="font-medium">{product?.name}</h3>
                  <p className="">${product?.price}</p>
                </div>
                <button
                  onClick={() => removeCart(product?._id)}
                  className="p-1"
                >
                  <MdDeleteForever size={20} />
                </button>
              </div>
            ))}
          </div>
          <div className="py-2">
            <h4 className="flex font-semibold justify-between">
              Sub total: <span className="font-bold">${subTotal}</span>
            </h4>
            <Divider style={{ margin: "10px 0" }} />
            <h4 className="flex font-semibold justify-between">
              Tax 5%: <span className="font-bold">${tax}</span>
            </h4>
            <Divider style={{ margin: "10px 0" }} />
            <h4 className="flex font-semibold justify-between">
              Total: <span className="font-bold">${total}</span>
            </h4>

            <div className="flex justify-evenly gap-7">
              {" "}
              <Link href={"/"}>
                <button
                  onClick={handleCheckOut}
                  className=" mt-8 font-semibold bg-lime-500 text-lg font-serif text-white p-1 rounded-lg hover:bg-blue-600"
                >
                  Checkout
                </button>
              </Link>
              <button
                onClick={() => dispatch(removeAll([]))}
                className="bg-red-600 text-lg font-serif text-white p-1  mt-8 font-semibold rounded-lg hover:bg-amber-400"
              >
                Remove All
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <h2 className="text-xl font-serif text-red-500 text-center">
            Cart is empty!
          </h2>
        </div>
      )}
    </div>
  );
};

export default CartProduct;
