import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";

const ProductId = async ({ params }) => {
  const user = await currentUser();
  // if (!user) redirect("/sign-in");

  const id = await params?.id;

  return (
    <>
      <ProductDetails id={id} />
    </>
  );
};

export default ProductId;
