import Blog from "@/components/home/Blog";
import Collection from "@/components/home/Collection";
import Featured from "@/components/home/Featured";
import FeedBack from "@/components/home/FeedBack";

import Hero from "@/components/home/Hero";
import LatestProduct from "@/components/home/LatestProduct";
import TeamMembers from "@/components/home/teamMembers";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Featured />
      <LatestProduct />

      <Collection />
      <FeedBack />
      {/* <Blog />

      <TeamMembers /> */}
    </div>
  );
}
