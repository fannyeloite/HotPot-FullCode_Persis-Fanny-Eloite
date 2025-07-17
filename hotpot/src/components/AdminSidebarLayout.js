// import React from 'react';
// import { Link } from 'react-router-dom';
// import './AdminSidebarLayout.css';

// const AdminSidebarLayout = ({ userEmail, children }) => {
//   return (
//     <div className="admin-layout d-flex">
//       {/* Sidebar */}
//       <div className="sidebar bg-dark text-white p-3">
//         <h4 className="fw-bold mb-4">HotPot Admin</h4>
//         <ul className="nav flex-column">
//           <li><Link to="/admin/dashboard" className="nav-link text-white">Dashboard</Link></li>
//           <li><Link to="/admin/categories" className="nav-link text-white">Manage Categories</Link></li>
//           <li><Link to="/admin/restaurants" className="nav-link text-white">Manage Restaurants</Link></li>
//           <li><Link to="/admin/customers" className="nav-link text-white">Manage Users</Link></li>
//           <li><Link to="/admin/orders" className="nav-link text-white">View Orders</Link></li>
//         </ul>
//         <div className="mt-auto">
//           <p className="mt-4 small">Logged in as <strong>{userEmail}</strong></p>
//           <a href="/" className="btn btn-sm btn-warning w-100">Logout</a>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="content-area p-4 flex-grow-1">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default AdminSidebarLayout;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdminSidebarLayout.css';
import { FaTachometerAlt, FaUtensils, FaStore, FaUsers, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

const AdminSidebarLayout = ({ userEmail, children }) => {
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', icon: <FaTachometerAlt />, path: '/admin/dashboard' },
    { label: 'Manage Categories', icon: <FaUtensils />, path: '/admin/categories' },
    { label: 'Manage Restaurants', icon: <FaStore />, path: '/admin/restaurants' },
    { label: 'Manage Users', icon: <FaUsers />, path: '/admin/customers' },
    { label: 'View Orders', icon: <FaClipboardList />, path: '/admin/orders' },
  ];

  return (
    <div className="admin-layout d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white p-3 shadow" style={{ minWidth: '320px' }}>
        <h4 className="fw-bold mb-4" style={{ color: '#f9ebe7ff' }}>HotPot Admin</h4>

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

export default AdminSidebarLayout;

