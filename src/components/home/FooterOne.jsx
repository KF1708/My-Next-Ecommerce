import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import FooterTwo from "./FooterTwo";

const FooterOne = () => {
  return (
    <div className="mb-20">
      <div className="flex justify-evenly gap-36">
        <div>
          <button className="flex mt-3 cursor-pointer font-semibold font-serif">
            Follow Us <FaArrowRightLong className="mt-1 pt-1 pl-1 ml-2" />
          </button>
          <div className="flex gap-5 mt-9">
            <FaFacebookF className="footer-one-icon bg-slate-50 text-black w-8 h-8 p-2 rounded-md hover:text-blue-500" />
            <FaTwitter className="footer-one-icon bg-slate-50 text-black w-8 h-8 p-2 rounded-md hover:text-blue-500" />
            <FaPinterestP className="footer-one-icon bg-slate-50 text-black w-8 h-8 p-2 rounded-md hover:text-blue-500" />
            <FaLinkedinIn className="footer-one-icon bg-slate-50 text-black w-8 h-8 p-2 rounded-md hover:text-blue-500" />
          </div>
        </div>

        <FooterTwo />
      </div>
    </div>
  );
};

export default FooterOne;
