"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import logoImage from "../../../public/images/logo/logo.png";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Modal } from "antd";
import { Drawer } from "antd";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="navbar sticky top-0 z-50 shadow-md bg-slate-100">
      <div className="flex justify-between gap-5">
        <div>
          <Link className="" href={"/"}>
            <Image src={logoImage} alt="logo image" height={80} />
          </Link>
        </div>
        <div className="flex mt-5 gap-10 font-semibold px-10">
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
        </div>
        <div className="flex gap-10 px-10 p-6">
          <IoSearchOutline className="text-2xl " onClick={showModal} />
          <Modal
            title="Search Items"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            className="text-xl font-serif"
          >
            <input
              className="my-5 p-2 pr-36 border-b-2 border-lime-300 rounded-md text-lg font-serif font-light"
              type="text"
              placeholder="Search here..."
            />
          </Modal>

          <BsCart3 className="text-2xl " onClick={showDrawer} />
          <Drawer title="Add to cart" onClose={onClose} open={open}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
          <UserButton afterSignOutUrl="/" className=" " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
