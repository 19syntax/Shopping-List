// import { useState } from "react";
import search from "../assets/search.svg";
import Data from "../data/Data";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

function Database() {
  const productItems = Data.filter((product) => product.category === "Product");
  const accessoryItems = Data.filter(
    (product) => product.category === "accessories"
  );

  return (
    <div className="p-5 w-full mx-auto sm:w-96 border">
      <div>
        <div className="flex justify-between items-center my-4">
          <h1 className="text-2xl font-extrabold">QUICKSHOP</h1>
          <Link to="search">
            <img
              className="border-2 bg-white  p-2 rounded-md"
              src={search}
              alt="search"
            />
          </Link>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl my-4">Hi-Fi Shop & Service</h2>
          <p className="text-gray-500 text-sm my-2">
            Audio shop on Rustaveli Ave 57
          </p>
          <p className="text-gray-500 text-sm">
            This shop offers both products and services
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-xl mt-10">
              Products{" "}
              <span className="text-gray-400">{productItems.length}</span>
            </p>
            <p className="text-blue-700 text-sm font-bold mt-10">Show all</p>
          </div>

          <div className="grid gap-3 grid-cols-2 mt-6">
            {productItems.map((item, id) => (
              <div key={id}>
                <Link to={`/product/${item.id}`}>
                  <div>
                    <img
                      className="w-full h-150 bg-gray-200 p-4 rounded-xl"
                      src={item.productImage}
                      alt={item.productImage}
                    />
                    <h3 className="text-sm font-bold">{item.productName}</h3>
                    <p className="text-gray-500 font-semibold mt-4">
                      ${item.price}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-xl mt-10">
              Accessories{" "}
              <span className="text-gray-500">{accessoryItems.length}</span>
            </p>
            <p className="text-blue-700 text-sm font-bold mt-10">Show all</p>
          </div>
          <div className="grid gap-3 grid-cols-2 mt-6">
            {accessoryItems.map((item, id) => (
              <div key={id}>
                <Link to={`/product/${item.id}`}>
                  <img
                    className="w-full h-150 bg-gray-200 p-4 rounded-xl"
                    src={item.productImage}
                    alt={item.productImage}
                  />
                  <h3 className="text-sm font-bold">{item.productName}</h3>
                  <p className="text-gray-500 font-semibold mt-4">
                    ${item.price}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Database;
