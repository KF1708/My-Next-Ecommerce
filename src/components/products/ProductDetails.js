"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetails = ({ id }) => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://staging-be-ecom.techserve4u.com/api/product/${id}`
        );
        if (response.data) {
          setProductDetails(response.data.product || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, []);

  console.log("Product Details :", productDetails);

  return <div>ProductDetails : {id}</div>;
};

export default ProductDetails;
