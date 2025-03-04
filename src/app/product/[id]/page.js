import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";

// It's an asynchronous functional component.It receives an object with params as a prop, which is used to access dynamic route parameters from Next.js. params.id holds the actual value from the URL.

const ProductId = async ({ params }) => {
  const user = await currentUser(); //await currentUser() retrieves the currently authenticated user from Clerk.

  if (!user) redirect("/sign-in"); //If there is no authenticated user (!user), the redirect("/sign-in") function forces the user to sign in before accessing this page.

  const id = await params?.id; //The id is extracted from params, which contains the dynamic route parameter passed via Next.js routing

  return (
    <>
      <ProductDetails id={id} />
      {/* id is passed as a prop to ProductDetails, which likely fetches and displays product information */}
    </>
  );
};

export default ProductId;
