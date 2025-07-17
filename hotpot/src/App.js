// src/App.js
import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
// import Navbar from "./components/Navbar";
import AdminHome from "./components/AdminHome";
import RestaurantHomeWrapper from "./components/RestaurantHomeWrapper";
import SelectCategory from './components/SelectCategory';
import CustomerHome from './components/CustomerHome';
import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfirmation';
import PaymentPage from './components/PaymentPage';
import DeliveryPage from './components/DeliveryPage';
import Home from './components/Home'; 
import AdminDashboard from './components/AdminDashboard';
import ManageRestaurants from './components/ManageRestaurants';
import ManageUsers from './components/ManageUsers';  // ✅ correct way
import ViewOrders from './components/ViewOrders'; 
import RestaurantDashboard from './components/RestaurantDashboard';
import RestaurantOrdersWrapper from  './components/RestaurantOrdersWrapper';
// import RestaurantProfile from './components/RestaurantProfile';
import OrderSuccess from './components/OrderSuccess'; 
import RestaurantFoods from './components/RestaurantFoods';
import About from './components/About';
import CustomerOrders from './components/CustomerOrders';

// import { RestaurantFoods } from './components/RestaurantFoods'; // only if it was exported as named


axios.defaults.withCredentials = true;


function App() {
  return (
    <Router>
      {/* <Navbar />  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminhome" element={<AdminHome />} />
        {/* <Route path="/restauranthome" element={<RestaurantHomeWrapper />} /> */}
        <Route path="/select-category" element={<SelectCategory />} />
        <Route path="/customerhome" element={<CustomerHome />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
        <Route path="/paymentPage" element={<PaymentPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />

        {/* Admin Pages (NO NAVBAR NEEDED) */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/categories" element={<AdminHome />} />
        <Route path="/admin/restaurants" element={<ManageRestaurants />} />
        <Route path="/admin/customers" element={<ManageUsers />} />
        <Route path="/admin/orders" element={<ViewOrders />} />

        {/* Restaurant Owner Pages (NO NAVBAR NEEDED) */}
        <Route path="/RestaurantDashboard" element={<RestaurantDashboard />} />
        <Route path="/restaurant/dashboard" element={<RestaurantDashboard />} />
        <Route path="/restaurant/menu" element={<RestaurantHomeWrapper />} />
        <Route path="/restaurant/orders" element={<RestaurantOrdersWrapper />} />
        <Route path="/restaurant/foods" element={<RestaurantFoods />} />



        {/* <Route path="profile" element={<RestaurantProfile userEmail={userEmail} />} /> */}

        <Route path="/ordersuccess" element={<OrderSuccess />} />
        <Route path="/about" element={<About />} />
        <Route path="/orders" element={<CustomerOrders />} />




       
    
      </Routes>
    </Router>
  );
}

export default App;

// src/App.js
// import React from "react";
// import axios from "axios";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Pages
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Home from "./components/Home";
// import CustomerHome from "./components/CustomerHome";
// import Cart from "./components/Cart";
// import OrderConfirmation from "./components/OrderConfirmation";
// import PaymentPage from "./components/PaymentPage";
// import DeliveryPage from "./components/DeliveryPage";
// import SelectCategory from "./components/SelectCategory";
// import RestaurantHomeWrapper from "./components/RestaurantHomeWrapper";

// // Admin Pages
// import AdminDashboard from "./components/AdminDashboard";
// import AdminHome from "./components/AdminHome"; // This is Manage Categories
// import ManageRestaurants from "./components/ManageRestaurants";
// import ManageUsers from "./components/ManageUsers";
// import ViewOrders from "./components/ViewOrders";

// // Layouts
// import AdminSidebarLayout from "./components/AdminSidebarLayout";

// // Axios setup
// axios.defaults.withCredentials = true;

// function App() {
// return (
// <Router>
// <Routes>
// {/* Public Pages */}
// <Route path="/" element={<Home />} />
// <Route path="/login" element={<Login />} />
// <Route path="/register" element={<Register />} />

// php-template
// Copy
// Edit
//     {/* Customer & Restaurant Pages */}
//     <Route path="/customerhome" element={<CustomerHome />} />
//     <Route path="/cart" element={<Cart />} />
//     <Route path="/orderconfirmation" element={<OrderConfirmation />} />
//     <Route path="/paymentPage" element={<PaymentPage />} />
//     <Route path="/delivery" element={<DeliveryPage />} />
//     <Route path="/select-category" element={<SelectCategory />} />
//     <Route path="/restauranthome" element={<RestaurantHomeWrapper />} />

//     {/* Admin Section with Sidebar Layout */}
//     <Route path="/admin" element={<AdminSidebarLayout userEmail="admin@gmail.com" />} >
//       <Route path="dashboard" element={<AdminDashboard />} />
//       <Route path="categories" element={<AdminHome />} />
//       <Route path="restaurants" element={<ManageRestaurants />} />
//       <Route path="customers" element={<ManageUsers />} />
//       <Route path="orders" element={<ViewOrders />} />
//     </Route>
//   </Routes>
// </Router>
// );
// }
// export default App;
