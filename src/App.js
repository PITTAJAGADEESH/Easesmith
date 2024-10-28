import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Thankyou from "./components/Thankyou";
import Cart from "./components/Cart";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thankYou/:name" element={<Thankyou />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
);

export default App;
