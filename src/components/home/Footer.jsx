import { IoLogoApple } from "react-icons/io";
import FooterOne from "./FooterOne";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-slate-100 lg:px-8 px-5 pt-10 pb-5">
      <div>
        <FooterOne />
      </div>
      <div className="lg:flex flex-wrap justify-around lg:px-5 pt-5 border-t-2 border-stone-300">
        <div className="flex gap-10 md:px-28 sm:px-16 lg:px-10 px-14">
          <button className="flex gap-1 rounded-lg pl-5 pr-5 border-2 bg-white border-gray-200 p-3 hover:bg-slate-100">
            <IoLogoApple className="h-6 w-6" /> Download for iOS
          </button>
          <button className="flex gap-1 rounded-lg pl-5 pr-5 border-2 bg-slate-100 border-gray-200 p-3 hover:bg-white">
            <FaGooglePlay className="h-6 w-6 p-1" /> Download for Android
          </button>
        </div>
        <div className="mt-5">
          {" "}
          <h2 className="text-slate-600 font-medium md:px-36 sm:px-24 px-20">
            Copyright © 2025 All rights reserved by Kaniz Fatama.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
