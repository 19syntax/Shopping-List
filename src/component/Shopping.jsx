import arrowRight from "../assets/arrow-right.svg";
import link from "../assets/link.svg";
import cartImg from "../assets/cart.svg";
import location from "../assets/location.svg";
import arrow from "../assets/arrow-left.svg";
import search from "../assets/search.svg";
import Data from "../data/Data";

import product1 from "../assets/img/products/boat1.png";
import product2 from "../assets/img/products/boult1.png";
import product3 from "../assets/img/products/Mi1.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Shopping() {
  const { productId } = useParams();
  const product = Data.find((p) => p.id === parseInt(productId));

  const slides = [{ url: product1 }, { url: product2 }, { url: product3 }];
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    if (currentSlide === slides.length - 1) return;
    setCurrentSlide(currentSlide + 1);
  }
  function previousSlide() {
    if (currentSlide === 0) return;
    setCurrentSlide(currentSlide - 1);
  }
  function goTo(id) {
    setCurrentSlide(id);
  }

  return (
    <div>
      <div className="p-5 w-full  sm:w-96 sm:mx-auto">
        <div className="flex justify-between items-center my-4">
          <h1 className="text-2xl font-extrabold">QUICKSHOP</h1>
          <Link to="/search">
            <img
              className="border-2 bg-white  p-2 rounded-md"
              src={search}
              alt="search"
            />
          </Link>
        </div>
        <div className="bg-gray-200 p-14 relative rounded-b-3xl h-96 flex justify-center items-center">
          <Link to="/">
            <img
              className="absolute top-7 left-5 border-2 bg-white p-3 rounded-xl"
              src={arrow}
              alt="search"
            />
          </Link>

          <img
            className="absolute top-44 left-5 p-3 rounded-xl"
            onClick={previousSlide}
            src={arrow}
            alt="search"
          />
          <img className="p-6" src={product.img[currentSlide]} alt="product" />
          <div className="absolute bottom-5 flex gap-3">
            {slides.map((item, id) => (
              <div
                key={id}
                onClick={() => goTo(id)}
                className={`border-2 border-slate-300 w-16 p-1 ${
                  currentSlide === id ? "bg-slate-600" : "bg-white"
                } cursor-pointer rounded-lg`}
              ></div>
            ))}
          </div>
          <img
            className="absolute top-44 right-5 p-3 rounded-xl"
            onClick={nextSlide}
            src={arrowRight}
            alt="search"
          />
        </div>
        <div className="p-3">
          <div className="mt-5 flex gap-1">
            <img src={cartImg} alt="cart" />
            <p className="font-semibold text-blue-700">Shopping</p>
          </div>
          <div className="flex gap-2 justify-between items-center">
            <h1 className="mt-3 text-xl font-extrabold">
              {product.productName}
            </h1>
            <div className="p-2 bg-blue-100 rounded-full">
              <img className="w-7" src={link} alt="link" />
            </div>
          </div>
          <p className="text-sm mt-5 text-gray-500">
            <span className="font-bold text-black">DESCRIPTION: </span>
            {product.description}
          </p>
          <div className="flex justify-between mt-8 mb-5">
            <div className="flex gap-3 items-center">
              <img
                className="bg-gray-100 p-3 rounded-lg"
                src={location}
                alt="search"
              />
              <div>
                <p className="text-sm text-gray-500">Rustaveli Ave 57.</p>
                <p className="text-sm mt-2 text-gray-500">17-001, Bahamas</p>
              </div>
            </div>
            <img
              className=" bg-white w-7 rounded-xl"
              src={arrowRight}
              alt="search"
            />
          </div>
          <hr />
          <h2 className="mt-4 mb-2 text-right text-xl font-bold">
            ${product.price}
          </h2>

          <Link to="cart">
            <button className="my-6 border-2 py-3 w-full text-white bg-blue-700 font-semibold rounded-2xl">
              ADD TO CART
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Shopping;
