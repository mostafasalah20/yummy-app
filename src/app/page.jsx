'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "./Redax/productSlice";
import Link from "next/link";
import Loding from "./(componens)/_Loding/Loding";
import MianSlider from "./(componens)/_MianSlider/MainSlider.jsx";
import HomeImg from "./(componens)/_HomeImg/HomeImg.jsx";
import ChatComponent from './(componens)/ChatPopup/page.jsx'
import Image from 'next/image';


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getProduct()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {

    if (!loading && products.product) {
      if (searchTerm === '') {
        setFilteredProducts(products.product);
      } else {

        setFilteredProducts(
          products.product.filter((item) =>
            item.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
    }
  }, [searchTerm, products, loading]);

  const handleKeyUp = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <HomeImg />
      <MianSlider />
      <ChatComponent/>

      <div className="container mx-auto">
        <div className="relative mt-28 block w-full md:w-[50%] md:mx-auto">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            onKeyUp={handleKeyUp}
            type="text"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
            placeholder="Search by name..."
          />
        </div>
      </div>


      {loading ? (
        <Loding />
      ) : (
        <div className="container mt-10 mx-auto">
          <div className="flex flex-wrap">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div key={item.idMeal} className="w-full md:w-1/5 p-4">
                  <Link href={'/DetailsProduct/' + item.idMeal}>
                    <div className="homeProduct">
                      <Image src={item.strMealThumb} alt={item.strMeal} width={500} height={500} className="w-full img"/>
                      <div className="textTitle flex justify-center items-center">
                        <h3 className="text-2xl font-semibold">{item.strMeal}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="w-full text-center text-gray-500">
                No products found.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

