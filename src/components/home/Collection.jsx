import Image from "next/image";
import React from "react";
import collectionImageOne from "../../../public/images/latestCollection/collection_1.webp";
import collectionImageTwo from "../../../public/images/latestCollection/collection_2.webp";
import Link from "next/link";

const Collection = () => {
  return (
    <div className="py-20">
      <h2 className="font-serif font-bold text-center text-3xl pb-14">
        New Arrivals And Latest Collection
      </h2>
      <div className="flex gap-9 justify-evenly">
        <Link href={"/product"}>
          <Image
            src={collectionImageOne}
            className="overflow-hidden transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </Link>
        <Link href={"/product"}>
          <Image
            src={collectionImageTwo}
            height={300}
            width={550}
            className="overflow-hidden transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </Link>
      </div>
    </div>
  );
};

export default Collection;
