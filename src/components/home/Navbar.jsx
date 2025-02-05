import Image from "next/image";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import logoImage from "../../../public/images/logo/logo.png";

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="flex justify-between gap-5">
        <div>
          <Image src={logoImage} alt="logo image" height={80} />
        </div>
        <div className="flex mt-5 gap-10 font-semibold px-10">
          <h3>HOME</h3>
          <h3>SHOP</h3>
          <h3>PRODUCT</h3>
          <h3>BLOG</h3>
          <h3>CONTACT</h3>
        </div>
        <div className="flex gap-10 mt-5 px-10">
          <IoSearchOutline className="text-2xl " />
          <BsCart3 className="text-2xl " />
          <IoPersonCircleOutline className="text-2xl " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
