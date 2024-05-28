import arrow from "../assets/arrow-left.svg";
// import product1i from "../assets/img/products/boat1.png";
import arrowRight from "../assets/arrow-right.svg";
import location from "../assets/location.svg";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../data/Data";

function Cart() {
  const { productId } = useParams();
  const product = Data.find((p) => p.id === parseInt(productId));
  const [count, setCount] = useState(1);
  const calNo = product.price * count + 10;
  const total = calNo.toFixed(2);
  function handleAdd() {
    setCount(count + 1);
  }
  function handleSub() {
    if (count === 1) return;
    setCount(count - 1);
  }
  // function handleCart() {
  //   setCart((cart = null));
  // }
  return (
    <div className="my-4 sm:w-96 sm:mx-auto">
      <div className="flex items-center gap-24">
        <Link to={`/product/${productId}`}>
          <img
            // onClick={handleCart}
            className="bg-slate-100 p-3 rounded-xl"
            src={arrow}
            alt="search"
          />
        </Link>
        <p className="font-semibold">Order Details</p>
      </div>
      <div>
        <p className="text-2xl mt-4 font-bold">My Cart</p>
        <div className="flex mt-4 gap-5">
          <img
            className="w-28 rounded-lg p-5 bg-slate-200"
            src={product.productImage}
            alt="product1"
          />
          <div>
            <p className="text-base mb-2 font-bold"> {product.productName}</p>
            <p className="text-sm font-semibold text-gray-500">
              ${product.price}0
            </p>
            <div className="flex gap-1 mt-5">
              <button
                onClick={handleSub}
                className="border w-10 font-extrabold bg-slate-100 rounded-full"
              >
                -
              </button>
              <p className="w-9 text-center">{count}</p>
              <button
                onClick={handleAdd}
                className="border w-10 font-extrabold bg-slate-100 rounded-full"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="my-8">
          <p className="font-bold text-lg">Delivery Location</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 mt-4">
              <img
                className="bg-gray-100 py-2 px-4 rounded-lg"
                src={location}
                alt="search"
              />
              <div>
                <p className="text-sm font-bold">2 Petre Melikishvili St.</p>
                <p className="text-sm mt-2 font-bold text-gray-400">
                  0162, Benue
                </p>
              </div>
            </div>
            <img
              className=" bg-white w-7 rounded-xl"
              src={arrowRight}
              alt="search"
            />
          </div>
        </div>
        <div className="my-8">
          <p className="font-bold text-lg">Payment Method</p>
          <div className="flex gap-3 justify-between items-center">
            <div className="flex gap-4 mt-4">
              <img
                className="bg-gray-100 py-2 px-4 rounded-lg"
                src={location}
                alt="search"
              />
              <div>
                <p className="text-sm font-bold">VISA Classic.</p>
                <p className="text-sm mt-2 font-bold text-gray-400">
                  ****-0921
                </p>
              </div>
            </div>
            <img
              className=" bg-white w-7 rounded-xl"
              src={arrowRight}
              alt="search"
            />
          </div>
        </div>
        <p className="font-bold">Order Info</p>
        <div className="flex justify-between my-4">
          <p className="text-sm text-gray-500">subtotal</p>
          <p className="font-bold">${product.price}</p>
        </div>
        <div className="flex justify-between my-4">
          <p className="text-sm text-gray-500">Shipping Cost</p>
          <p className="font-bold">$10.00</p>
        </div>
        <div className="flex justify-between my-4">
          <p className="text-sm text-gray-500">Total</p>
          <p className="font-bold text-xl">${total}</p>
        </div>
      </div>
      <button className="my-2 border-2 text-sm py-4 w-full text-white bg-blue-700 font-medium rounded-2xl">
        CHECKOUT ($209.00)
      </button>
    </div>
  );
}

export default Cart;
