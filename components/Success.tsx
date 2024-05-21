"use client";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Success = () => {
  const cart = useAppSelector(getCart);
  return (
    <div className="absolute top-0 w-full bg-white py-12">
      <div className="mx-auto w-[90%] md:w-[70%]">
        <h1 className="text-center text-lg md:text-2xl">
          Thank you for ordering with Amazon.in
        </h1>
        <div>
          <h1 className="font-bold py-3 underline text-lg md:text-xl">
            Order Details
          </h1>
          {cart.map((product: any) => (
            <div key={product.id} className="mb-4">
              <div className="flex flex-col md:flex-row items-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="mb-3 md:mb-0"
                />
                <div className="ml-0 md:ml-5 font-bold text-center md:text-left">
                  <h1 className="text-base md:text-lg">{product.title}</h1>
                  <h1 className="text-sm md:text-base">{product.price}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-5 text-center">
          <Link
            href="/"
            className="bg-[#FFD814] px-4 py-2 rounded-md text-sm md:text-base"
          >
            Buy more products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
