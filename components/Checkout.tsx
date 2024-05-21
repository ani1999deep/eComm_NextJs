"use client";
import React from "react";
import amazonLogo from "../public/amazon-logo.png";
import { FaLock } from "react-icons/fa6";
import Image from "next/image";
import OrderSummary from "./OrderSummary";
import DeliveryAddress from "./DeliveryAddress";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";

const Checkout = () => {
  const cart = useAppSelector(getCart);
  let totalPrice = 0;
  cart.forEach((item: any) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="absolute top-0 w-full p-5 sm:p-10 bg-white">
      <div className="flex flex-col sm:flex-row w-full sm:w-[70%] mx-auto items-center border-b border-gray-400 pb-5 justify-between">
        <div className="mb-5 sm:mb-0">
          <Image
            src={amazonLogo}
            alt={"amazon-logo"}
            width={150}
            height={150}
          />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="font-bold text-2xl">Checkout</h1>
        </div>
        <div className="text-gray-400 mt-5 sm:mt-0">
          <FaLock size={"30px"} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full lg:w-[70%] mx-auto mt-5">
        <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
          <DeliveryAddress />
        </div>
        <div className="w-full lg:w-1/2">
          <OrderSummary totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
