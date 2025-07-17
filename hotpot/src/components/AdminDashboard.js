// import React from 'react';
// import AdminSidebarLayout from './AdminSidebarLayout';

// const AdminDashboard = ({ userEmail }) => {
//   return (
//     <AdminSidebarLayout userEmail={userEmail}>
//       <div className="text-center p-5">
//         <h2 className="fw-bold text-primary">Welcome, Admin!</h2>
//         <p className="lead mt-3">Use the sidebar to manage categories, restaurants, users, and orders.</p>
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//           alt="Admin Illustration"
//           style={{ maxWidth: '200px', marginTop: '30px' }}
//         />
//       </div>
//     </AdminSidebarLayout>
//   );
// };

// export default AdminDashboard;

// import React from 'react';
// import AdminSidebarLayout from './AdminSidebarLayout';
// import admindashboardBg from '../assets/admindash.jpg'; // use your background image

// const AdminDashboard = ({ userEmail }) => {
// return (
// <AdminSidebarLayout userEmail={userEmail}>
// <div
// style={{
//  backgroundImage: `url(${admindashboardBg})`,
// backgroundSize: 'cover',
// backgroundPosition: 'center',
// minHeight: '100vh',
// padding: '30px',
// margin: -25,
// fontFamily: "'Segoe UI', sans-serif", 
// }}
// >
// <div

//   className="container p-5 rounded shadow-lg"
//   style={{
//     maxWidth: '1000px',
//     backgroundColor: 'rgba(240, 243, 255, 0.44)',
//     // backdropFilter: 'blur(8px)',
//     // WebkitBackdropFilter: 'blur(8px)',
//     color: '#fff'
//   }}
// >

// <div className="text-center mb-4">
//   <h1
//     style={{
//       fontWeight: '900',
//       color: '#ffffffff', // vivid red
//       textShadow: '2px 2px 8px rgba(54, 46, 46, 0.67)',
//       fontSize: '3rem',
//     }}
//   >
//     Welcome, Admin!
//   </h1>
//   <p
//     style={{
//       fontSize: '1.25rem',
//       color: '#f0f0f0',
//       fontWeight: '500',
//       textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)',
//     }}
//   >
//     Here's a quick snapshot of your <strong>HotPot</strong> system performance.
//   </p>
// </div>



//       {/* Summary Statistics Cards */}
// <div className="row text-center">
//   <div className="col-md-3 mb-4">
//     <div
//       className="card shadow border-0"
//       style={{ backgroundColor: 'rgba(119, 186, 53, 0.79)', color: '#fff' }}
//     >
//       <div className="card-body">
//         <i className="bi bi-people-fill fs-1 text-info"></i>
//         <h5 className="mt-2">Users</h5>
//         <h4 className="fw-bold">120</h4>
//       </div>
//     </div>
//   </div>

//   <div className="col-md-3 mb-4">
//     <div
//       className="card shadow border-0"
//       style={{ backgroundColor: 'rgba(152, 24, 24, 0.75)', color: '#fff' }}
//     >
//       <div className="card-body">
//         <i className="bi bi-shop fs-1 text-success"></i>
//         <h5 className="mt-2">Restaurants</h5>
//         <h4 className="fw-bold">15</h4>
//       </div>
//     </div>
//   </div>

//   <div className="col-md-3 mb-4">
//     <div
//       className="card shadow border-0"
//       style={{ backgroundColor: 'rgba(218, 134, 24, 0.73)', color: '#fff' }}
//     >
//       <div className="card-body">
//         <i className="bi bi-basket-fill fs-1 text-warning"></i>
//         <h5 className="mt-2">Food Items</h5>
//         <h4 className="fw-bold">86</h4>
//       </div>
//     </div>
//   </div>

//   <div className="col-md-3 mb-4">
//     <div
//       className="card shadow border-0"
//       style={{ backgroundColor: 'rgba(3, 151, 119, 0.67)', color: '#fff' }}
//     >
//       <div className="card-body">
//         <i className="bi bi-cart-check-fill fs-1 text-danger"></i>
//         <h5 className="mt-2">Orders</h5>
//         <h4 className="fw-bold">234</h4>
//       </div>
//     </div>
//   </div>
// </div>

// {/* Admin Illustration */}
// <div className="text-center mt-5">
//   <img
//     src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//     alt="Admin Illustration"
//     style={{ maxWidth: '160px' }}
//   />
// </div>
// </div> </div>
// </AdminSidebarLayout>
// );
// };

// export default AdminDashboard;

import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import AdminSidebarLayout from './AdminSidebarLayout';
import './RestaurantDashboard.css'; // reuse the same CSS
import {
  FaUsers, FaUtensils, FaStoreAlt, FaUserShield
} from 'react-icons/fa';
import adminDashboardBg from '../assets/dash.jpg';

const AdminDashboard = () => {
  const [metrics, setMetrics] = useState({
    totalUsers: 0,
    totalFoodItems: 0,
    totalOrders: 0,
    totalRestaurants: 0,
    totalCustomers: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [usersRes, foodsRes, ordersRes, restaurantsRes, customersRes] = await Promise.all([
          axiosInstance.get(`/admin/stats/users`),
          axiosInstance.get(`/admin/stats/food-items`),
          axiosInstance.get(`/admin/stats/orders`),
          axiosInstance.get(`/admin/stats/restaurants`),
          axiosInstance.get(`/admin/stats/customers`)
        ]);

        setMetrics({
          totalUsers: usersRes.data,
          totalFoodItems: foodsRes.data,
          totalOrders: ordersRes.data,
          totalRestaurants: restaurantsRes.data,
          totalCustomers: customersRes.data,
        });

      } catch (err) {
        console.error("❌ Failed to load admin dashboard data:", err);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <AdminSidebarLayout>
      <div
        className="dashboard-container"
        style={{
          backgroundImage: `url(${adminDashboardBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px',
          margin: -25,
          minHeight: '100vh',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="text-white text-center mb-5">
         <h1 className="fw-bold display-3">👨‍💼 Welcome, Admin!</h1>
            <p className="fs-5">Here’s a live snapshot of the HotPot system performance.</p>
         </div>


        <div className="row g-4 mb-4">
          <Card icon={<FaUsers />} title="Total Users" value={metrics.totalUsers} color="info" />
          <Card icon={<FaUtensils />} title="Food Items" value={metrics.totalFoodItems} color="warning" />
          <Card icon={<FaStoreAlt />} title="Restaurants" value={metrics.totalRestaurants} color="success" />
          <Card icon={<FaUserShield />} title="Customers" value={metrics.totalCustomers} color="danger" />
        </div>

        <div className="row g-4">
          <Card icon={<FaUtensils />} title="Total Orders" value={metrics.totalOrders} color="primary" />
        </div>
      </div>
    </AdminSidebarLayout>
  );
};

const Card = ({ icon, title, value, color }) => (
  <div className="col-md-3">
    <div className={`glass-card border-start border-${color} border-5`}>
      <div className="d-flex align-items-center">
        <div className={`icon-circle bg-${color} text-white me-3`}>
          {icon}
        </div>
        <div>
          <h6 className="mb-1 text-muted">{title}</h6>
          <h4 className="fw-bold">{value}</h4>
        </div>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
