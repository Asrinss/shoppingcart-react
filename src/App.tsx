import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Footer from "./components/footer";
import { ShopContextProvider } from "./context/shop-context";


// Lazy loading için bileşenleri içe aktarıyoruz
const Shop = lazy(() => import("./pages/shop/shop").then(module => ({ default: module.Shop })));
const Cart = lazy(() => import("./pages/cart/cart").then(module => ({ default: module.Cart })));
const ProductDetail = lazy(() => import("./pages/product/ProductDetail").then(module => ({ default: module.ProductDetail })));
const Login = lazy(() => import("./pages/auth/Login").then(module => ({ default: module.Login })));
const Register = lazy(() => import("./pages/auth/Register").then(module => ({ default: module.Register })));

// Loading bileşeni
const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Suspense>
          </main>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App; 