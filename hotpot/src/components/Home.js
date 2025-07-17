// import React from 'react';
// import food from '../assets/foods.jpg'; // Place a beautiful image here

// const Home = () => {
//   return (
//     <div
//       style={{
//         backgroundImage: `url(${food})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         width: "100vw",
//         height: "91.5vh",
//         overflow: "hidden", // ✅ prevent scroll
//         margin: 0,
//         padding: 0,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//      <div
//         style={{
//         background: "rgba(255, 255, 255, 0.15)",
//         backdropFilter: "blur(10px)",
//         padding: "100px 20px",
//         borderRadius: "30px",
//         boxShadow: "0 8px 32px 0 rgba(14, 22, 141, 0.37)",
//         color: "#fff",
//         textAlign: "center",
//         maxWidth: "900px", // increased from 700px
//         width: "90%",       // responsive width
//         margin: "auto",     // centers the box
//         }}
//      >

//         <h1 className="fw-bold text-light" style={{ fontSize: "3.5rem", letterSpacing: "1px", textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}>
//            🍲 Welcome to <span style={{ color: "#FFD700" }}>HotPot</span>
//            </h1>
//            <p className="lead text-light" style={{ fontSize: "1.7rem", fontWeight: "700", marginTop: "40px", textShadow: "1px 1px 4px rgba(0, 0, 0, 0.57)" }}>
//               Indulge in sizzling flavors, served fresh and fast.
//             </p>
//             <p className="text-light" style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "10px", textShadow: "1px 1px 4px rgba(0,0,0,0.4)" }}>
//                Sign in or Register now to spice up your cravings! 
//             </p>

//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import foodBanner from '../assets/homebg.jpg'; // Replace with your banner image
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
//       {/* NAVBAR */}
//       <nav style={{
//         backgroundColor: '#000',
//         padding: '15px 30px',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         color: '#fff'
//       }}>
//         <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>HOTPOT</div>
//         <div className="menu" style={{ display: 'flex', gap: '30px', fontSize: '1rem' }}>
//           <span className="nav-link">Home</span>
//           {/* <span className="nav-link">Our Deals</span>
//           <span className="nav-link">About</span>
//           <span className="nav-link">Service</span>
//           <span className="nav-link">Review</span> */}
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <div style={{
//         backgroundImage: `url(${foodBanner})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '90vh',
//         color: 'white',
//         display: 'flex',
//         alignItems: 'center',
//         paddingLeft: '60px'
//       }}>
//         <div>
//           <h1 style={{ fontSize: '3.8rem', fontWeight: 'bold', textShadow: '2px 2px 8px #000' }}>
//             Freshness in every bite
//           </h1>
//           <p style={{ maxWidth: '500px', fontSize: '1.2rem', marginTop: '20px', textShadow: '1px 1px 6px #000' }}>
//             Discover the authentic taste and premium dishes, crafted with love and delivered to your doorstep.
//           </p>
//           <button
//             onClick={() => navigate('/select-category')}
//             className="btn btn-warning mt-3 fw-bold px-4 py-2 rounded-pill"
//           >
//             Our Menu →
//           </button>
//         </div>
//       </div>

//       {/* SPECIALITIES SECTION */}
//       <div style={{ backgroundColor: '#000', color: '#fff', padding: '40px 0', textAlign: 'center' }}>
//         <h3 style={{ fontSize: '2rem', marginBottom: '30px', fontWeight: 'bold' }}>OUR SPECIALITIES</h3>
//         <div className="d-flex justify-content-center flex-wrap gap-5">
//           <div>
//             <div style={{ fontSize: '2.5rem' }}>📶</div>
//             <h5 className="mt-2">Free Wi-Fi</h5>
//             <p style={{ maxWidth: '200px', margin: 'auto', fontSize: '0.9rem' }}>
//               Enjoy high-speed internet while dining with us.
//             </p>
//           </div>
//           <div>
//             <div style={{ fontSize: '2.5rem' }}>🍽️</div>
//             <h5 className="mt-2">Large Space</h5>
//             <p style={{ maxWidth: '200px', margin: 'auto', fontSize: '0.9rem' }}>
//               Spacious seating for comfort and celebration.
//             </p>
//           </div>
//           <div>
//             <div style={{ fontSize: '2.5rem' }}>🚚</div>
//             <h5 className="mt-2">Home Delivery</h5>
//             <p style={{ maxWidth: '200px', margin: 'auto', fontSize: '0.9rem' }}>
//               Fast and hot food delivery to your door.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import foodBanner from '../assets/homebg.jpg'; // Your banner image
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Optional NAVBAR */}
      
      <nav style={{
        backgroundColor: '#000',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff'
      }}>
        <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>HOTPOT</div>
        <div className="menu" style={{ display: 'flex', gap: '30px', fontSize: '1rem' }}>
          <span className="nav-link">Home</span>
        </div>
      </nav>
     

      {/* HERO SECTION */}
      <div style={{
        backgroundImage: `url(${foodBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '60px',
      }}>
        <div>
          <h1 style={{ fontSize: '4.0rem', fontWeight: 'bold', textShadow: '2px 2px 9px #000' }}>
            Freshness in every bite
          </h1>
          <p style={{ maxWidth: '600px', fontSize: '1.5rem', marginTop: '40px', textShadow: '2px 2px 10px #000' }}>
            Craving something delicious? Dive into a world of sizzling, mouth-watering delights crafted just for you.
          </p>
          <div className="mt-4 d-flex gap-3">
            <button
              onClick={() => navigate('/register')}
              className="btn btn-warning fw-bold px-4 py-2 rounded-pill me-3"
            >
              Register
            </button>
            <button
               onClick={() => navigate('/login')}
               className="btn btn-light fw-bold px-4 py-2 rounded-pill"
                >
                  LOGIN
                </button>

             
          </div>
        </div>
      </div>

      {/* SPECIALITIES SECTION */}
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '40px 0', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '30px', fontWeight: 'bold' }}>OUR SPECIALITIES</h3>
        <div className="d-flex justify-content-center flex-wrap gap-5">
          <div>
            <div style={{ fontSize: '2.5rem' }}>🌐</div>
            <h5 className="mt-2">Seamless Browsing</h5>
            <p style={{ maxWidth: '200px', margin: 'auto', fontSize: '0.9rem' }}>
              Enjoy a smooth, responsive, and immersive web experience.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem' }}>💡</div>
            <h5 className="mt-2">Smart Search</h5>
            <p style={{ maxWidth: '200px', margin: 'auto', fontSize: '0.9rem' }}>
               Quickly discover recipes and filter categories at ease.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem' }}>🚚</div>
            <h5 className="mt-2">Home Delivery</h5>
            <p style={{ maxWidth: '200px', margin: 'auto', fontSize: '0.9rem' }}>
              Fast and hot food delivery to your door.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
