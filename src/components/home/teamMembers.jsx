import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import teamMemberImageOne from "../../../public/images/teamMember/team-1.jpg";
import teamMemberImageTwo from "../../../public/images/teamMember/team-2.jpg";
import teamMemberImageThree from "../../../public/images/teamMember/team-3.jpg";
import teamMemberImagefour from "../../../public/images/teamMember/team-4.jpg";
import Image from "next/image";

const TeamMembers = () => {
  return (
    <div className="container bg-neutral-100 px-12 py-10">
      <div className="text-center">
        <h1 className=" font-bold text-5xl font-serif">
          Meet our Team Members
        </h1>
        <p className="mt-5 mb-14 text-slate-700 font-serif">
          Different layouts and styles for team sections.
        </p>
      </div>
      <div className="flex gap-10 ">
        <div className="text-center object-cover  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="bg-blue-600 relative overflow-hidden">
            <Image src={teamMemberImageOne} className="" />
            <div className="absolute left-0 bottom-8 w-full">
              <div className=" flex justify-center gap-4 items-center w-full m-2 team-icons">
                <FaFacebookF className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaTwitter className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaPinterestP className="w-7 h-7 p-1 text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
              </div>
            </div>
          </div>
          <h2 className="mt-10 font-medium text-xl">Benjamin Evalent</h2>
          <p className="text-gray-500">CEO-Founder</p>
        </div>
        <div className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-center object-cover">
          <div className="bg-blue-600 relative overflow-hidden">
            <Image src={teamMemberImageTwo} />
            <div className="absolute left-0 bottom-8 w-full">
              <div className=" flex justify-center gap-4 items-center w-full m-2 team-icons">
                <FaFacebookF className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaTwitter className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaPinterestP className="w-7 h-7 p-1 text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
              </div>
            </div>
          </div>
          <h2 className="mt-10 font-medium text-xl">Miller Parker</h2>
          <p className="text-gray-500">CEO-Founder</p>
        </div>
        <div className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-center object-cover">
          <div className="bg-blue-600 relative overflow-hidden">
            <Image src={teamMemberImageThree} />
            <div className="absolute left-0 bottom-8 w-full">
              <div className=" flex justify-center gap-4 items-center w-full m-2 team-icons">
                <FaFacebookF className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaTwitter className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaPinterestP className="w-7 h-7 p-1 text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
              </div>
            </div>
          </div>
          <h2 className="mt-10 font-medium text-xl">Carson Wyall</h2>
          <p className="text-gray-500">CEO-Founder</p>
        </div>
        <div className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-center object-cover">
          <div className="bg-blue-600 relative overflow-hidden">
            <Image src={teamMemberImagefour} />
            <div className="absolute left-0 bottom-8 w-full">
              <div className=" flex justify-center gap-4 items-center w-full m-2 team-icons">
                <FaFacebookF className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaTwitter className="w-7 h-7 p-1 text-lg text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
                <FaPinterestP className="w-7 h-7 p-1 text-white bg-slate-200 hover:bg-white border-slate-100 border-solid border-2 outline-2 rounded-full hover:text-sky-600" />
              </div>
            </div>
          </div>
          <h2 className="mt-10 font-medium text-xl">Rose Mary</h2>
          <p className="text-gray-500">CEO-Founder</p>
        </div>
      </div>
      {/* <button className=" place-self-center flex gap-3 p-3 cursor-pointer px-10 stage-btn mt-14 border border-gray-300 font-medium rounded-md">
        View all Members
        <GoArrowRight className="mt-1" />
      </button> */}
    </div>
  );
};

export default TeamMembers;
