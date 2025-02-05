import Blog from "@/components/home/Blog";
import Collection from "@/components/home/Collection";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import LatestProduct from "@/components/home/LatestProduct";
import Navbar from "@/components/home/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div className="">
    
    <Navbar/>

    <Hero/>

    <LatestProduct/>


    <Collection/>

    <Blog/>

    <Footer/>
   </div>
  );
}
