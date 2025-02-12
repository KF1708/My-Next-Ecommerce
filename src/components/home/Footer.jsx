import { IoLogoApple } from "react-icons/io";
import FooterOne from "./FooterOne";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-slate-100 pt-10 pb-5">
      <div>
        <FooterOne />
      </div>
      <div className="flex justify-around px-5 pt-5 border-t-2 border-stone-300">
        <div className="flex gap-5">
          <button className="flex gap-1 rounded-lg pl-5 pr-5 border-2 bg-white border-gray-200 p-3 hover:bg-slate-100">
            <IoLogoApple className="h-6 w-6" /> Download for iOS
          </button>
          <button className="flex gap-1 rounded-lg pl-5 pr-5 border-2 bg-slate-100 border-gray-200 p-3 hover:bg-white">
            <FaGooglePlay className="h-6 w-6 p-1" /> Download for Android
          </button>
        </div>
        <div className="mt-5">
          {" "}
          <h2 className="text-slate-600 font-medium">
            Copyright © 2025 All rights reserved by Kaniz Fatama.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
