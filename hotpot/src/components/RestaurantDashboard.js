// // src/components/RestaurantDashboard.js

// import React from 'react';
// import RestaurantSidebarLayout from './RestaurantSidebarLayout';
// import './RestaurantDashboard.css';

// const RestaurantDashboard = () => {
//   return (
//     <RestaurantSidebarLayout>
//       <div className="dashboard-header mb-4">
//         <h2 className="fw-bold text-primary">Welcome Back, Restaurant Owner! 👋</h2>
//         <p className="text-muted">Here’s a quick snapshot of your restaurant today.</p>
//       </div>

//       <div className="row g-4">
//         <div className="col-md-3">
//           <div className="card stat-card bg-success text-white">
//             <div className="card-body">
//               <h5 className="card-title">Today's Orders</h5>
//               <p className="display-6 fw-bold">42</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-3">
//           <div className="card stat-card bg-warning text-dark">
//             <div className="card-body">
//               <h5 className="card-title">Pending Deliveries</h5>
//               <p className="display-6 fw-bold">12</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-3">
//           <div className="card stat-card bg-info text-white">
//             <div className="card-body">
//               <h5 className="card-title">Active Items</h5>
//               <p className="display-6 fw-bold">28</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-3">
//           <div className="card stat-card bg-danger text-white">
//             <div className="card-body">
//               <h5 className="card-title">Low Stock</h5>
//               <p className="display-6 fw-bold">5</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </RestaurantSidebarLayout>
//   );
// };

// export default RestaurantDashboard;


//src/components/RestaurantDashboard.js


// import React from 'react';
// import RestaurantSidebarLayout from './RestaurantSidebarLayout';
// import './RestaurantDashboard.css';
// import { FaUtensils, FaMoneyBillWave, FaStoreAlt, FaUsers, FaClock, FaChartPie, FaChartLine, FaPizzaSlice } from 'react-icons/fa';
// import dashboardBg from '../assets/cart.avif'; // Make sure to add this image

// const RestaurantDashboard = () => {
//   return (
//     <RestaurantSidebarLayout>
//       <div
//         className="dashboard-container"
//         style={{
//           backgroundImage: `url(${dashboardBg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           padding: '50px',
//           margin: -25,
//           minHeight: '100vh',
//           backdropFilter: 'blur(8px)',
//         }}
//       >
//         {/* Header */}
//         <div className="text-white text-center mb-5">
//           <h2 className="fw-bold">👋 Hello, Chef!</h2>
//           <p>Here is your daily performance snapshot.</p>
//         </div>

//         {/* Top Cards */}
//         <div className="row g-4 mb-4">
//           <Card icon={<FaUtensils />} title="Total Orders" value="10" color="warning" />
//           <Card icon={<FaMoneyBillWave />} title="Total Earning" value="₹91.73" color="info" />
//           <Card icon={<FaStoreAlt />} title="Restaurants" value="3" color="success" />
//           <Card icon={<FaUsers />} title="Total Clients" value="20" color="danger" />
//         </div>

//         {/* Charts/Stats */}
//         <div className="row g-4">
//           <ChartCard title="Most Popular Days" icon={<FaChartPie />} />
//           <ChartCard title="Most Popular Time" icon={<FaClock />} />
//           <ChartCard title="Advance Order Time" value="26922 minutes" icon={<FaClock />} />
//           <ChartCard title="Most Popular Food" icon={<FaPizzaSlice />} />
//         </div>
//       </div>
//     </RestaurantSidebarLayout>
//   );
// };

// const Card = ({ icon, title, value, color }) => (
//   <div className="col-md-3">
//     <div className={`glass-card border-start border-${color} border-5`}>
//       <div className="d-flex align-items-center">
//         <div className={`icon-circle bg-${color} text-white me-3`}>
//           {icon}
//         </div>
//         <div>
//           <h6 className="mb-1 text-muted">{title}</h6>
//           <h4 className="fw-bold">{value}</h4>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const ChartCard = ({ title, icon, value }) => (
//   <div className="col-md-3">
//     <div className="glass-card text-center">
//       <div className="fs-3 mb-2 text-primary">{icon}</div>
//       <h6 className="text-muted">{title}</h6>
//       {value && <p className="fw-bold mt-2">{value}</p>}
//       {!value && <div className="text-secondary">[Chart Placeholder]</div>}
//     </div>
//   </div>
// );

// export default RestaurantDashboard;

import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import RestaurantSidebarLayout from './RestaurantSidebarLayout';
import './RestaurantDashboard.css';
import {
  FaUtensils, FaMoneyBillWave, FaStoreAlt, FaUsers,
  FaChartPie, FaPizzaSlice
} from 'react-icons/fa';
import dashboardBg from '../assets/cart.avif';

const RestaurantDashboard = () => {
  const [metrics, setMetrics] = useState({
    totalOrders: 0,
    totalEarnings: 0,
    totalRestaurants: 1, // Static, assuming one restaurant per owner
    totalClients: 0,
    mostOrderedFoods: {},
  });

  const restaurantownerEmail = localStorage.getItem("email");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [ordersRes, earningsRes, clientsRes, foodsRes] = await Promise.all([
  axiosInstance.get(`/orders/stats/count/${restaurantownerEmail}`),
  axiosInstance.get(`/orders/stats/earnings/${restaurantownerEmail}`),
  axiosInstance.get(`/orders/stats/customers/${restaurantownerEmail}`),
  axiosInstance.get(`/orders/stats/most-ordered/${restaurantownerEmail}`)
]);


        setMetrics({
          totalOrders: ordersRes.data,
          totalEarnings: earningsRes.data,
          totalRestaurants: 1,
          totalClients: clientsRes.data,
          mostOrderedFoods: foodsRes.data
        });

      } catch (err) {
        console.error("❌ Failed to load dashboard data:", err);
      }
    };

    fetchDashboardData();
  }, [restaurantownerEmail]);

  return (
    <RestaurantSidebarLayout>
      <div
        className="dashboard-container"
        style={{
          backgroundImage: `url(${dashboardBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px',
          margin: -25,
          minHeight: '100vh',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="text-white text-center mb-5">
          <h2 className="fw-bold display-3">👋 Hello, Chef!</h2>
               <p>    Here is your daily performance snapshot.</p>
        </div>

        <div className="row g-4 mb-4">
          <Card icon={<FaUtensils />} title="Total Orders" value={metrics.totalOrders} color="warning" />
          <Card icon={<FaMoneyBillWave />} title="Total Earning" value={`₹${metrics.totalEarnings.toFixed(2)}`} color="info" />
          <Card icon={<FaStoreAlt />} title="Restaurants" value={metrics.totalRestaurants} color="success" />
          <Card icon={<FaUsers />} title="Total Clients" value={metrics.totalClients} color="danger" />
        </div>

        <div className="row g-4">
          <ChartCard title="Most Ordered Foods" icon={<FaPizzaSlice />} data={metrics.mostOrderedFoods} />
        </div>
      </div>
    </RestaurantSidebarLayout>
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

const ChartCard = ({ title, icon, data }) => (
  <div className="col-md-4">
    <div className="glass-card p-3">
      <div className="text-center mb-2 fs-4 text-primary">{icon}</div>
      <h6 className="text-center text-muted">{title}</h6>
      <ul className="list-unstyled mt-3">
        {data && Object.keys(data).length > 0 ? (
          Object.entries(data).map(([foodName, count], idx) => (
            <li key={idx} className="d-flex justify-content-between">
              <span>{foodName}</span>
              <span className="fw-bold">{count} orders</span>
            </li>
          ))
        ) : (
          <li className="text-muted text-center">No data available</li>
        )}
      </ul>
    </div>
  </div>
);

export default RestaurantDashboard;
