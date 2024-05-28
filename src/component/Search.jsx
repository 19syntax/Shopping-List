import { useState } from "react";
import cancel from "../assets/cancel.svg";
import arrow from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");

  function handleClear(e) {
    e.preventDefault();
    setInput("");
  }
  return (
    <div className="mx-3 sm:w-96 sm:mx-auto  my-8 flex items-center gap-2">
      <Link to="/">
        <img className=" py-2 rounded-md" src={arrow} alt="arrow" />
      </Link>
      <div className="w-full px-3 py-3 border-2 rounded-lg flex gap-2 justify-between">
        <input
          className="text-xl w-full outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <img src={cancel} onClick={handleClear} alt={cancel} />
      </div>
      {/* <div>
        <ul className="mt-8">
          <li className="bg-gray-100 mt-2 py-2">prod</li>
          <li className="bg-gray-100 mt-2 py-2">product</li>
          <li className="bg-gray-100 mt-2 py-2">product1</li>
          <li className="bg-gray-100 mt-2 py-2">product3</li>
        </ul>
      </div> */}
    </div>
  );
}

export default Search;
