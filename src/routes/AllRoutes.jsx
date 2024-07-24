import Menu from "../pages/menu/Menu";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Offer from "../pages/offers/Offer";
import Landing from "../pages/landingPage/Landing";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import Checkout from "../pages/checkout/Checkout";
import NotFound from "../pages/404/NotFound";

const AllRoutes = ({ purchase, setPurchase }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/menu"
          element={<Menu setPurchase={setPurchase} purchase={purchase} />}
        />
        <Route path="/offers" element={<Offer />} />
        <Route
          path="/cart"
          element={<Cart purchase={purchase} setPurchase={setPurchase} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={<Checkout purchase={purchase} setPurchase={setPurchase} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
