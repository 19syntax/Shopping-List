import { BrowserRouter, Routes, Route } from "react-router-dom";
import Database from "./component/Database";
import Search from "./component/Search";
import Shopping from "./component/Shopping";
import Cart from "./component/Cart";

// import Cart from "./component/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Database />} />
        <Route path="search" element={<Search />} />
        <Route path="product/:productId/cart" element={<Cart />} />
        <Route path="product/:productId" element={<Shopping />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
