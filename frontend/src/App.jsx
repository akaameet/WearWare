import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/landing/Home";
import { Toaster } from "sonner";
import Login from "./pages/landing/Login";
import Register from "./pages/landing/Register";
import WishList from "./pages/user/WishList";
import AdminSidebar from "./pages/admin/AdminSidebar";
import DashBoard from "./pages/admin/DashBoard";
import ManageProducts from "./pages/admin/ManageProducts";
import EditProduct from "./pages/admin/EditProduct";
import ManageOrders from "./pages/admin/ManageOrders";
import ManageUsers from "./pages/admin/ManageUsers";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import CollectionPage from "./pages/landing/CollectionPage";
import ProductDetails from "./components/Product/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmation from "./pages/landing/OrderConfirmation";
import OrderDetailPage from "./pages/user/OrderDetailPage";
import AdminOverlay from "./pages/admin/AdminOverlay";
import MemberOverlay from "./pages/user/MemberOverlay";
function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* User Layout */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="collections/:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-confirmation" element={<OrderConfirmation />} />
        </Route>

        <Route path="/member" element={<MemberOverlay />}>
          <Route path="profile" element={<Profile />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<OrderDetailPage />} />
        </Route>

        <Route path="/admin" element={<AdminOverlay />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="products" element={<ManageProducts />} />
          <Route path="products/:id/edit" element={<EditProduct />} />
          <Route path="orders" element={<ManageOrders />} />
          <Route path="users" element={<ManageUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
