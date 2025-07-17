// // src/components/RestaurantSidebarLayout.js

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './RestaurantSidebarLayout.css'; // We'll style it next

// const navItems = [
//   { path: '/restaurant/dashboard', label: 'Dashboard', icon: '📊' },
//   { path: '/restaurant/menu', label: 'Manage Menu', icon: '🍽️' },
//   { path: '/restaurant/orders', label: 'Orders', icon: '🧾' },
//   { path: '/restaurant/profile', label: 'Profile', icon: '👤' },
// ];

// const RestaurantSidebarLayout = ({ children }) => {
//   const location = useLocation();

//   return (
//     <div className="restaurant-layout d-flex">
//       {/* Sidebar */}
//       <aside className="restaurant-sidebar bg-dark text-white p-3">
//         <h4 className="text-center fw-bold mb-4">🍴 HotPot Partner</h4>
//         <ul className="nav flex-column">
//           {navItems.map(({ path, label, icon }) => (
//             <li key={path}>
//               <Link
//                 to={path}
//                 className={`nav-link text-white py-2 px-3 rounded ${
//                   location.pathname === path ? 'active-link' : ''
//                 }`}
//               >
//                 <span className="me-2">{icon}</span>{label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <div className="mt-auto">
//           <Link to="/" className="btn btn-warning w-100 mt-4">Logout</Link>
//         </div>
//       </aside>

//       {/* Content Area */}
//       <main className="restaurant-content p-4 flex-grow-1">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default RestaurantSidebarLayout;

// src/components/RestaurantSidebarLayout.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './RestaurantSidebarLayout.css';
import {
  FaTachometerAlt,
  FaUtensils,
  FaClipboardList,
  FaUserCircle,
  FaSignOutAlt,
} from 'react-icons/fa';

const RestaurantSidebarLayout = ({ userEmail, children }) => {
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', icon: <FaTachometerAlt />, path: '/restaurant/dashboard' },
    { label: 'Manage Menu', icon: <FaUtensils />, path: '/restaurant/menu' },
    { label: 'Orders', icon: <FaClipboardList />, path: '/restaurant/orders' },
    { label: 'My Foods', icon: <FaUserCircle />, path: '/restaurant/foods' },
  ];

  return (
    <div className="restaurant-layout d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white p-3 shadow" style={{ minWidth: '320px' }}>
        <h4 className="fw-bold mb-4" style={{ color: '#fdf2efff' }}>HotPot Partner</h4>

        <ul className="nav flex-column">
          {menuItems.map((item, index) => (
            <li key={index} className={`nav-item mb-2 ${location.pathname === item.path ? 'active-link' : ''}`}>
              <Link to={item.path} className="nav-link text-white d-flex align-items-center gap-2">
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <hr className="border-secondary" />
          <p className="small mb-2">Logged in as:</p>
          <strong className="text-warning d-block mb-3">{userEmail}</strong>
          <Link to="/" className="btn btn-sm btn-outline-warning w-100">
            <FaSignOutAlt className="me-1" /> Logout
          </Link>
        </div>
      </div>

      {/* Content Area */}
      <div className="content-area flex-grow-1 p-4 bg-light">
        {children}
      </div>
    </div>
  );
};

export default RestaurantSidebarLayout;
