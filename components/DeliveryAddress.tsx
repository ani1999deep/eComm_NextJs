import React from "react";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import Image from "next/image";

const DeliveryAddress = () => {
  const cart = useAppSelector(getCart);

  return (
    <div className="p-4 md:p-8">
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex flex-col md:flex-row md:justify-between">
          <h1 className="font-bold text-lg md:text-xl">1. Delivery Address</h1>
          <p className="text-sm md:text-base mt-2 md:mt-0">
            Anideep Bhowmick <br />
            Bhowmick Apartment <br />
            Purbachal Golden Park <br />
            Kolkata, West Bengal 700078 <br />
            Add delivery instructions
          </p>
        </div>
      </div>
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-between w-full md:w-1/2">
          <h1 className="font-bold text-lg md:text-xl">
            2. Items and delivery
          </h1>
        </div>
        {cart.map((product: any) => (
          <div key={product.id} className="my-4">
            <div className="flex flex-col md:flex-row">
              <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
                className="mx-auto md:mx-0"
              />
              <div className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
                <h1 className="font-bold text-base md:text-lg">
                  {product.title}
                </h1>
                <p className="text-xl md:text-2xl font-bold py-2">{`$${product.price}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryAddress;
