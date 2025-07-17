"use client";
import React from "react";
import Navbar from "../home/Navbar";
import Footer from "@/components/home/Footer";
import { BiUpArrowAlt } from "react-icons/bi";
import ReduxProvider from "@/provider";

const CommonLayout = ({ children }) => {
  return (
    <ReduxProvider>
      <Navbar />
      {children}
      <div className="fixed bottom-5 right-10 z-50">
        <a href="#top">
          <button className="">
            <BiUpArrowAlt className="bg-blue-500 p-1 w-8 h-8 rounded-md text-white" />
          </button>
        </a>
      </div>
      <Footer />
    </ReduxProvider>
  );
};

export default CommonLayout;
