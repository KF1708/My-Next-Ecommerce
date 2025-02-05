import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

const FooterTwo = () => {
  return (
    <div>
      <div className="gap-36 mt-3 flex">
        <div className="flex gap-24">
          <div>
            <h2 className=" text-xl font-bold mb-6">Company</h2>
            <a
              href="#top"
              className="footer-section cursor-pointer hover:text-sky-600 p-1"
            >
              About Us
            </a>
            <p className="footer-section cursor-pointer hover:text-sky-600 p-1">
              Service
            </p>
            <p className="footer-section cursor-pointer hover:text-sky-600 p-1">
              Case Studies
            </p>
            <p className="footer-section cursor-pointer hover:text-sky-600 p-1">
              Blog
            </p>
            <p className="footer-section cursor-pointer hover:text-sky-600 p-1">
              Contact
            </p>
          </div>
          <div>
            <h2 className=" text-xl font-bold mb-6">Support</h2>
            <p className="footer-section cursor-pointer hover:text-sky-600 p-1">
              Community
            </p>
            <p className="footer-section cursor-pointer hover:text-sky-600 p-1">
              Resources
            </p>
            <p className="footer-section cursor-pointer hover:text-sky-600 p-1">
              Faqs
            </p>
            <p className="footer-section cursor-pointer hover:text-sky-600 p-1">
              Privacy Policy
            </p>
            <p className="footer-section cursor-pointer hover:text-sky-600 p-1">
              Careers
            </p>
          </div>
        </div>
        <div className="">
          <h2 className=" text-xl font-bold mb-6 ">Get In Touch</h2>
          <p className="flex gap-3 font-medium mb-3">
            <HiOutlineMail className="w-8 h-8 p-1 text-sky-500" />
            support@.com
          </p>
          <p className="flex gap-3 font-medium mb-3">
            <IoCallOutline className="w-8 h-8 p-1 text-sky-500" />
            +(642) 342 762 44
          </p>
          <p className="flex gap-3 font-medium mb-3">
            <LuMapPin className="w-8 h-8 p-1 text-sky-500" />
            442 Belle Terre St Floor 7, San <br />
            Francisco, AV 4206
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;

