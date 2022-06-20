import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//CSS
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
