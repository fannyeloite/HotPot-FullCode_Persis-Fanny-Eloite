// // src/components/Navbar.js
// import React from 'react';
// import logo from '../assets/logo.jpg'; // place your logo image in src/assets/
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: '#8B0000' }}>
//       <div className="container-fluid">
//         <Link to="/" className="navbar-brand d-flex align-items-center">
//   <img src={logo} alt="Logo" style={{ width: '30px', height: '30px', marginRight: '8px' }} />
//   HotPot
// </Link>

//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="mynavbar">
//           <ul className="navbar-nav me-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="/register">Register</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/login">Login</a>
//             </li>
//           </ul>

//           <form className="d-flex">
//             <input className="form-control me-2" type="text" placeholder="Search Here"
//               style={{ backgroundColor: '#FFDB58', color: '#000', border: 'none' }} />
//             <button className="btn btn-primary" type="button">Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import logo from '../assets/logo.jpg'; // Ensure this image exists
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top"
         style={{ background: 'linear-gradient(to right, #8B0000, #B22222)' }}>
      <div className="container-fluid">
        {/* Logo & Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center fw-bold fs-4">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px', objectFit: 'cover' }}
          />
          HotPot
        </Link>

        {/* Hamburger */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link px-3 fw-semibold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 fw-semibold" to="/select-category">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/login">Login</Link>
            </li>
          </ul>

          {/* Search Form */}
          <form className="d-flex align-items-center me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search biryani, paneer..."
              aria-label="Search"
              style={{
                backgroundColor: '#fff3cd',
                border: '1px solid #ffc107',
                color: '#212529',
                fontWeight: '500'
              }}
            />
            <button className="btn btn-warning fw-bold" type="submit">Search</button>
          </form>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
