import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import teamMemberImageOne from "../../../public/images/teamMember/team-1.jpg";
import teamMemberImageTwo from "../../../public/images/teamMember/team-2.jpg";
import teamMemberImageThree from "../../../public/images/teamMember/team-3.jpg";
import teamMemberImagefour from "../../../public/images/teamMember/team-4.jpg";
import Image from "next/image";

const TeamMembers = () => {
  return (
    <div className=" bg-neutral-100 lg:px-16 lg:py-10 px-10 py-5">
      <div className="text-center">
        <h1 className=" font-bold md:text-3xl sm:text-xl text-lg lg:text-5xl font-serif">
          Meet our Team Members
        </h1>
        <p className="lg:mt-5 lg:mb-14 mt-1 mb-5 text-slate-700 text-sm md:text-lg sm:text-base lg:text-xl font-serif">
          Different layouts and styles for team sections.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-10 gap-5">
        <div className="w-64 text-center object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="relative overflow-hidden">
            <Image src={teamMemberImageOne} className="rounded-lg " />
            <div className="absolute left-0 bottom-8 w-full">
              <div className="flex justify-center gap-4 items-center w-full m-2">
                <FaFacebookF className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaTwitter className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaPinterestP className="w-7 h-7 p-1 text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
              </div>
            </div>
          </div>
          <h2 className="lg:mt-10 mt-3 font-medium text:lg lg:text-xl">
            Benjamin Evalent
          </h2>
          <p className="text-gray-500 text-sm lg:text-lg">CEO-Founder</p>
        </div>
        <div className="w-64 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-center object-cover">
          <div className=" relative overflow-hidden">
            <Image src={teamMemberImageTwo} className="rounded-lg" />
            <div className="absolute left-0 bottom-8 w-full">
              <div className=" flex justify-center gap-4 items-center w-full m-2">
                <FaFacebookF className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaTwitter className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaPinterestP className="w-7 h-7 p-1 text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
              </div>
            </div>
          </div>
          <h2 className="lg:mt-10 mt-3 font-medium text:lg lg:text-xl">
            Miller Parker
          </h2>
          <p className="text-gray-500 text-sm lg:text-lg">CEO-Founder</p>
        </div>
        <div className="w-64 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-center object-cover">
          <div className=" relative overflow-hidden">
            <Image src={teamMemberImageThree} className="rounded-lg" />
            <div className="absolute left-0 bottom-8 w-full">
              <div className=" flex justify-center gap-4 items-center w-full m-2">
                <FaFacebookF className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaTwitter className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaPinterestP className="w-7 h-7 p-1 text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
              </div>
            </div>
          </div>
          <h2 className="lg:mt-10 mt-3 font-medium text:lg lg:text-xl">
            Carson Wyall
          </h2>
          <p className="text-gray-500 text-sm lg:text-lg">CEO-Founder</p>
        </div>
        <div className="w-64 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-center object-cover">
          <div className=" relative overflow-hidden">
            <Image src={teamMemberImagefour} className="rounded-lg" />
            <div className="absolute left-0 bottom-8 w-full">
              <div className=" flex justify-center gap-4 items-center w-full m-2">
                <FaFacebookF className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaTwitter className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaPinterestP className="w-7 h-7 p-1 text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
              </div>
            </div>
          </div>
          <h2 className="lg:mt-10 mt-3 font-medium text:lg lg:text-xl">
            Rose Mary
          </h2>
          <p className="text-gray-500 text-sm lg:text-lg">CEO-Founder</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
