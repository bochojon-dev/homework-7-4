import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
}

export default App;
