import React from "react";
import ProductCard from "./ProductCard";

const SearchResult = ({ filterData }: { filterData: any }) => {
  return (
    <div className="w-[90%] mx-auto sm:w-[80%]">
      <div className="mt-10">
        <div>
          <h1 className="font-bold text-2xl">Results {filterData.length}</h1>
          <p className="text-sm">
            Price and other details may vary based on product size and colour
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterData?.map((product: any) => {
            return (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
