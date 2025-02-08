import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Investments from "./pages/Investments";
import Savings from "./pages/Savings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/savings" element={<Savings />} />
      </Routes>
    </Router>
  );
};

export default App;
