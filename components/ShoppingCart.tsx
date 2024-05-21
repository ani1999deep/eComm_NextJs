"use client";
import React from "react";
import Image from "next/image";
import { useAppDispatch } from "@/lib/supabase/hooks/redux";
import {
  clearAllCart,
  decrementQuantity,
  incrementQuantity,
  removeFromTheCart,
} from "@/redux/cartSlice";
import Subtotal from "./shared/Subtotal";

const ShoppingCart = ({
  cart,
  totalPrice,
}: {
  cart: any;
  totalPrice: number;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full lg:w-[70%] px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 py-5">
        <h1 className="font-bold text-2xl">Shopping Cart</h1>
        <h1 className="font-medium mt-2 md:mt-0">Price</h1>
      </div>
      {cart.map((product: any) => {
        return (
          <div
            key={product.id}
            className="py-4 flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-200"
          >
            <div className="flex w-full md:w-auto">
              <div className="flex-shrink-0">
                <Image
                  src={product.image}
                  width={100}
                  height={100}
                  alt={product.title}
                />
              </div>
              <div className="ml-4 flex-1">
                <h1 className="font-medium text-lg">{product.title}</h1>
                <p className="text-[#007600] font-bold my-1 text-xs">
                  In Stock
                </p>
                <h1
                  onClick={() => {
                    dispatch(removeFromTheCart(product.id));
                  }}
                  className="font-bold text-red-600 cursor-pointer w-fit"
                >
                  REMOVE
                </h1>
                <div className="flex text-xl my-4 font-medium justify-between items-center w-fit bg-gray-200 rounded-md px-5 py-1">
                  <div
                    onClick={() => {
                      product.quantity > 1 &&
                        dispatch(decrementQuantity(product));
                    }}
                    className="cursor-pointer mr-4"
                  >
                    -
                  </div>
                  <div>{product.quantity}</div>
                  <div
                    onClick={() => {
                      dispatch(incrementQuantity(product));
                    }}
                    className="cursor-pointer ml-4"
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right md:text-left">
              <h1 className="font-bold text-xl">{`$${product.price}`}</h1>
              <p className="text-xs py-1">
                M.R.P.: <span className="line-through ">₹3,995.00</span>
              </p>
            </div>
          </div>
        );
      })}
      <h1
        onClick={() => {
          dispatch(clearAllCart());
        }}
        className="text-red-600 font-bold cursor-pointer py-2"
      >
        CLEAR ALL
      </h1>
      <Subtotal left={false} length={cart.length} totalPrice={totalPrice} />
    </div>
  );
};

export default ShoppingCart;
