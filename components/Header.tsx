"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import amazonLogo from "../public/amazon-logo-2.webp";
import { BiCart } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import { supabase } from "@/lib/supabase/products";

const itemList = [
  "All",
  "Fresh",
  "Amazon miniTV",
  "Sell",
  "Gift Cards",
  "Baby",
  "Buy Again",
  "Browsing History",
  "Amazon Pay",
  "Gift Ideas",
  "Health, Household & Personal Care",
];

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  const cart = useAppSelector(getCart);

  const searchHandler = () => {
    router.push(`/search/${query}`);
  };

  useEffect(() => {
    const getUserData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUserData();
  }, []);

  return (
    <>
      <div className="bg-[#131921] text-white py-1">
        <div className="flex items-center justify-between w-[90%] mx-auto flex-wrap md:flex-nowrap">
          <Link href={"/"} className="w-24 md:w-[10%]">
            <Image src={amazonLogo} alt={"logo"} width={150} height={150} />
          </Link>
          <div className="flex items-center w-full md:w-[60%] mt-2 md:mt-0">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="w-full p-2 rounded-l-md outline-none text-black"
              placeholder="Search Amazon.in"
            />
            <div
              onClick={searchHandler}
              className="bg-[#FEBD69] p-2 cursor-pointer hover:bg-[#ffad43] rounded-r-md"
            >
              <CgSearch size={"24px"} className="text-black" />
            </div>
          </div>
          <div className="flex items-center justify-around w-full md:w-[20%] mt-2 md:mt-0 space-x-4 md:space-x-0">
            <div
              onClick={() => {
                router.push("/signin");
              }}
              className="cursor-pointer text-center md:text-left"
            >
              <h1 className="text-xs hover:underline">
                {user ? user?.identities[0]?.identity_data.full_name : "Signin"}
              </h1>
              <h1 className="font-medium text-sm">Account & Lists</h1>
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs">Returns</p>
              <h1 className="font-medium text-sm">& Orders</h1>
            </div>
            <Link
              href={"/cart"}
              className="relative cursor-pointer flex items-center"
            >
              <p className="absolute top-0 left-5 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </p>
              <BiCart size={"40px"} />
              <h1 className="mt-4">Cart</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#232F3E] w-full text-white p-2 flex justify-between items-center flex-wrap">
        <div className="flex flex-wrap justify-center md:justify-start">
          {itemList.map((link, idx) => {
            return (
              <Link
                key={idx}
                href={`/${link}`}
                className="mx-2 hover:border border-transparent hover:border-white p-2"
              >
                {link}
              </Link>
            );
          })}
        </div>
        <div className="mr-5 mt-2 md:mt-0">
          <h1
            onClick={async () => {
              const { error } = await supabase.auth.signOut();
              router.push("/signin");
            }}
            className="text-[#FEBD69] font-bold cursor-pointer hover:underline"
          >
            Sign out
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
