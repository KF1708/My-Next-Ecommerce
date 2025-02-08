'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const detailsPage = (id) => {
    router.push(`/product/${id}`)
  } 

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(
          "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
        );
        if(response.data?.success){
            setProducts(response.data.products || [])
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllProducts();
  }, []);

  console.log("All Products : ", products);
  return (
    <div>
        <h2 className="text-center font-bold">My All Products Here</h2>
        <ul>
            {
                products?.map(product => <li onClick={() => detailsPage(product?._id)} key={product?._id} className="text-center font-bold text-blue-600 cursor-pointer">{product?.name}</li> )
            }
        </ul>
    </div>
  );
};

export default AllProducts;
