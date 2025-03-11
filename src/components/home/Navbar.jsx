"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircle } from "react-icons/io";

import logoImage from "../../../public/images/logo/logo-1.png";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Modal } from "antd";
import { Drawer } from "antd";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSearch } from "@/redux/search";
import toast from "react-hot-toast";
import CartProduct from "../cart/CartProduct";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [isMobileActive, setIsMobileActive] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (searchText === "") {
      setIsModalOpen(false);
      toast.error("Please provide item name!");
    } else {
      dispatch(setSearch(searchText));
      setIsModalOpen(false);
      router.push("/search");
    }
    setSearchText("");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSearchText("");
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="sticky top-0 z-[999] shadow-md bg-slate-100 ">
      <div className="flex justify-between pl-5 gap-5 items-center lg:justify-between">
        <div className="flex">
          <Link className="" href={"/"}>
            <Image src={logoImage} alt="logo image" height={70} className="" />
          </Link>
          <button>
            <RxHamburgerMenu
              className="lg:hidden md:hidden"
              onClick={() => setIsMobileActive(!isMobileActive)}
            />
          </button>
        </div>
        <div
          className={`flex w-40 m-2 flex-col gap-3 font-semibold text-sm lg:static px-5 rounded-lg p-2 absolute top-16 ${
            isMobileActive ? "left-10" : "-left-64"
          } h-40 lg:h-auto transition-all duration-300 shadow-lg lg:text-lg bg-slate-100 lg:bg-slate-100 lg:font-semibold lg:gap-8 lg:shadow-none lg:w-auto lg:flex-row md:bg-slate-100 md:font-semibold md:gap-5 md:shadow-none md:w-auto md:static md:h-auto md:flex-row`}
        >
          <button
            className="absolute top-2 right-2 md:hidden lg:hidden"
            onClick={() => setIsMobileActive(false)}
          >
            <IoMdCloseCircle />
          </button>
          <Link className="" href={"/"}>
            {" "}
            <h3>HOME</h3>
          </Link>

          <Link className="" href={"/product"}>
            {" "}
            <h3>PRODUCT</h3>
          </Link>

          <Link className="" href={"/blog"}>
            {" "}
            <h3>BLOG</h3>
          </Link>
          <Link className="" href={"/contact"}>
            {" "}
            <h3>CONTACT</h3>
          </Link>
          <Link className="" href={"/aboutUs"}>
            {" "}
            <h3>ABOUT US</h3>
          </Link>
        </div>
        <div className="flex gap-10 px-10 items-center md:gap-10 lg:gap-10">
          <IoSearchOutline className="text-2xl " onClick={showModal} />
          <Modal
            title="Search Items"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            className="text-xl font-serif"
          >
            <input
              onChange={(e) => setSearchText(e.target.value)}
              className="my-5 p-2 pr-36 border-b-2 border-lime-300 rounded-md text-lg font-serif font-light"
              type="text"
              placeholder="Search here..."
              value={searchText}
            />
          </Modal>

          <BsCart3 className="text-2xl " onClick={showDrawer} />
          <Drawer title="Add to cart" onClose={onClose} open={open}>
            <CartProduct setOpen={setOpen} />
          </Drawer>
          <UserButton afterSignOutUrl="/" className=" " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
