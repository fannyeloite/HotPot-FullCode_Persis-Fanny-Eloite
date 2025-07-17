// // src/components/OrderSuccess.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const OrderSuccess = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="text-center mt-5">
//       <h2 className="text-success fw-bold">✅ All orders placed successfully!</h2>
//       <p>Thank you for ordering with HotPot 🍽️</p>
//       <button className="btn btn-primary mt-3" onClick={() => navigate('/customerhome')}>
//         Back to Menu
//       </button>
//     </div>
//   );
// };

// export default OrderSuccess;

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import successIcon from '../assets/ordersuccess.png'; // ✅ Add your tick icon here
// import './OrderConfirmation.css'; // optional external styles

// const OrderSuccess = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const orderedItems = state?.orderedItems || [];
//   const totalPrice = state?.totalPrice || 0;
//   const orderId = state?.orderId || Math.floor(Math.random() * 1000000); // fallback

//   return (
//     <div className="confirmation-wrapper d-flex justify-content-center align-items-center py-5 px-3" style={{ minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
//       <div className="bg-white p-5 rounded shadow-lg text-center" style={{ maxWidth: '650px', width: '100%' }}>
//         <img src={successIcon} alt="Success" style={{ width: '80px', marginBottom: '20px' }} />

//         <h3 className="fw-bold text-success">Thank you for your purchase! Your food will be delivered as soon as possible!</h3>
//         <p className="text-secondary">Your order number is <strong>#{orderId}</strong></p>

//         <div className="order-summary mt-4 text-start">
//           <h5 className="fw-bold mb-3">Order Summary</h5>

//           {orderedItems.length > 0 ? (
//             orderedItems.map((item, idx) => (
//               <div key={idx} className="d-flex align-items-center gap-3 mb-3">
//                 <img
//                   src={`https://source.unsplash.com/80x80/?${item.foodName}`}
//                   alt={item.foodName}
//                   className="rounded"
//                 />
//                 <div>
//                   <p className="mb-1 fw-bold">{item.foodName}</p>
//                   <p className="mb-1 text-muted">₹{item.price} × {item.quantity}</p>
//                   <p className="mb-0">Total: ₹{item.price * item.quantity}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-muted">No item details available.</p>
//           )}

//           <hr />
//           <div className="d-flex justify-content-between fw-bold">
//             <span>Total</span>
//             <span>₹{totalPrice.toFixed(2)}</span>
//           </div>
//         </div>

//         <div className="mt-4 d-flex justify-content-center gap-3">
//           <button className="btn btn-outline-secondary px-4 rounded-pill" onClick={() => navigate('/customerhome')}>
//             Back to Home
//           </button>
//           <a href={`/paymentPage?orderId=${orderId}`} className="btn btn-success px-4 rounded-pill">
//             Pay Now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderSuccess;



// src/components/OrderSuccess.js
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axiosInstance from '../utils/axiosInstance';
// import successBg from '../assets/successbg.jpg';

// const OrderSuccess = () => {
//   const navigate = useNavigate();
//   const customerEmail = localStorage.getItem("email");
//   const [orders, setOrders] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (!customerEmail) return;

//     // Fetch latest orders for the customer
//     axiosInstance.get(`/orders/with-food`)
//       .then((res) => {
//         const allOrders = res.data;
//         const myOrders = allOrders
//           .filter(o => o.customerEmail === customerEmail)
//           .sort((a, b) => new Date(b.orderTime) - new Date(a.orderTime));
//         setOrders(myOrders.slice(0, 3)); // ✅ Latest 3 orders
//       })
//       .catch((err) => console.error("❌ Error fetching orders:", err));

//     // Fetch user details
//     axiosInstance.get(`/users/${customerEmail}`)
//       .then(res => setUser(res.data))
//       .catch(err => console.error("❌ Error fetching user:", err));
//   }, [customerEmail]);

//   if (!orders.length || !user) {
//     return (
//       <div className="text-center mt-5">
//         <h4>Loading your order summary...</h4>
//       </div>
//     );
//   }


//   return (
//     <div
//       style={{
//         backgroundImage: `url(${successBg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         fontFamily: "'Segoe UI', sans-serif"
//       }}
//     >
//       <div className="container py-5">
//         <div className="bg-white bg-opacity-75 rounded shadow p-5 text-center mx-auto" style={{ maxWidth: '700px' }}>
//           <div className="mb-4">
//             <div className="display-4 text-success">✓</div>
//             <h2 className="fw-bold">Thank you for your purchase!</h2>
//             <p className="text-muted">We've received your order and it's on the way!</p>
//           </div>

//           <div className="text-start">
//             <h5 className="fw-bold mb-3">Order Summary</h5>
//             {orders.map(order => (
//               <div key={order.orderId} className="p-3 mb-3">
//                 <div className="d-flex align-items-center">
                 
//                   <div>
//                     <p className="mb-1"><strong>{order.foodName}</strong> (ID: {order.foodId})</p>
//                     <p className="mb-0">Qty: {order.quantity} • ₹{order.totalPrice}</p>
//                     <p className="mb-0">Order ID: <strong>{order.orderId}</strong></p>
//                     <p className="mb-0">Time: {new Date(order.orderTime).toLocaleString()}</p>
//                     <p className="mb-0 text-success">Status: {order.status}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <p className="mt-4"><strong>Delivery Address:</strong> {user.address}</p>
//           </div>

//           <div className="mt-4 d-flex justify-content-center gap-3">
//             <button className="btn btn-outline-dark rounded-pill px-4" onClick={() => navigate("/customerhome")}>Back to Menu</button>
//             <button className="btn btn-success rounded-pill px-4" onClick={() => navigate("/paymentPage")}>
//               Pay Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderSuccess;

// src/components/OrderSuccess.js
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axiosInstance from '../utils/axiosInstance';
// import successBg from '../assets/successbg.jpg';

// const OrderSuccess = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const customerEmail = localStorage.getItem("email");

//   const [user, setUser] = useState(null);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     if (!state || !state.orderedItems || !customerEmail) return;

//     // ✅ Set the recent cart orders passed from Cart.js
//     setOrders(state.orderedItems);

//     // ✅ Fetch user details
//     axiosInstance.get(`/users/${customerEmail}`)
//       .then(res => setUser(res.data))
//       .catch(err => console.error("❌ Error fetching user:", err));
//   }, [state, customerEmail]);

//   if (!orders.length || !user) {
//     return (
//       <div className="text-center mt-5">
//         <h4>Loading your order summary...</h4>
//       </div>
//     );
//   }

//   const totalPrice = orders.reduce((sum, order) => sum + order.totalPrice, 0);


// return (
//   <div
//     style={{
//       backgroundImage: `url(${successBg})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       minHeight: '100vh',
//       padding: '40px 20px',
//       fontFamily: "'Segoe UI', sans-serif",
//     }}
//   >
//     <div
//       className="mx-auto p-4 rounded shadow"
//       style={{
//         maxWidth: '800px',
//         backgroundColor: 'rgba(0, 0, 0, 0.39)', // ✅ transparent black wrapper
//         color: 'white',
//       }}
//     >
//       <div className="text-center mb-5">
//         <div className="display-3 text-success">✓</div>
//         <h2 className="fw-bold">Thank you for your purchase!</h2>
//         <p>We've received your order and it's on the way!</p>
//       </div>

//       <h5 className="fw-bold mb-3">Order Summary</h5>

//       {orders.map(order => (
//         <div key={order.orderId} className="bg-white text-dark rounded shadow-sm p-3 mb-3">
//           <div className="d-flex align-items-center">
//             {/* <img
//               src={`https://source.unsplash.com/60x60/?${order.foodName}`}
//               alt={order.foodName}
//               className="rounded me-3"
//             /> */}
//             <div>
//               <p className="mb-1"><strong>{order.foodName}</strong> (ID: {order.foodId})</p>
//               <p className="mb-0">Qty: {order.quantity} • ₹{order.totalPrice}</p>
//               <p className="mb-0">Order ID: <strong>{order.orderId}</strong></p>
//               <p className="mb-0">Time: {new Date(order.orderTime).toLocaleString()}</p>
//               <p className="mb-0 text-success">Status: {order.status}</p>
//             </div>
//           </div>
//         </div>
//       ))}

//       <hr className="text-white" />
//       <div className="d-flex justify-content-between fw-bold fs-5">
//         <span>Total</span>
//         <span>₹{totalPrice.toFixed(2)}</span>
//       </div>

//       <p className="mt-4"><strong>Delivery Address:</strong> {user.address}</p>

//       <div className="mt-4 d-flex justify-content-center gap-3">
//         <button className="btn btn-outline-light rounded-pill px-4" onClick={() => navigate("/customerhome")}>
//           Back to Menu
//         </button>
//         {/* <button className="btn btn-success rounded-pill px-4" onClick={() => navigate("/paymentPage")}>
//           Pay Now
//         </button> */}
//         <button
//   className="btn btn-success rounded-pill px-4"
//   onClick={() =>
//     navigate("/paymentPage", {
//       state: {
//         order: orders[0],     // or orders.length > 1 ? pass array
//         address: user.address
//       }
//     })
//   }
// >
//   Pay Now
// </button>

//       </div>
//     </div>
//   </div>
// );


// };

// export default OrderSuccess;

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import successBg from '../assets/success.jpg';
import { FaCheckCircle, FaClock, FaBox, FaMapMarkerAlt } from 'react-icons/fa';
import CustomerNavbar from './CustomerNavbar';

const OrderSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const customerEmail = localStorage.getItem("email");

  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!state || !state.orderedItems || !customerEmail) return;

    setOrders(state.orderedItems);

    axiosInstance.get(`/users/${customerEmail}`)
      .then(res => setUser(res.data))
      .catch(err => console.error("❌ Error fetching user:", err));
  }, [state, customerEmail]);

  if (!orders.length || !user) {
    return (
      <div className="text-center mt-5">
        <h4>Loading your order summary...</h4>
      </div>
    );
  }

  const totalPrice = orders.reduce((sum, order) => sum + order.totalPrice, 0);

  return (
  <div
    style={{
      backgroundImage: `url(${successBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '100px 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      
      fontFamily: "'Segoe UI', sans-serif",
    }}
  >
    {/* Navbar */}
    <CustomerNavbar />
    <div
      className="rounded-4 shadow-lg"
      style={{
        maxWidth: '600px',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.67)',
        backdropFilter: 'blur(12px)',
        padding: '40px',
        color: '#2c3e50',
      }}
    >
      {/* Header */}
      <div className="text-center mb-4">
        <FaCheckCircle size={60} color="#27ae60" className="mb-2" />
        <h2 className="fw-bold">Thank you for your order!</h2>
        <p className="text-muted">We’ve received your items and they're being prepared. 🍽️</p>
      </div>

      {/* Order Summary */}
      <h5 className="fw-bold mb-3">📦 Order Summary</h5>
      {orders.map(order => (
        <div key={order.orderId} className="bg-light rounded-3 p-3 mb-3 shadow-sm">
          <div className="d-flex gap-3">
            {/* Image on Left */}
            <img
              src={order.imagePath}
              alt={order.foodName}
              className="rounded"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            {/* Details on Right */}
            <div>
              <p className="mb-1 fw-bold">{order.foodName} (Qtn: {order.quantity})</p>
              <p className="mb-0">
                <FaBox className="me-2 text-primary" />
                Order ID: #{order.orderId}
              </p>
              <p className="mb-0">
                <FaClock className="me-2 text-warning" />
                Ordered At: {new Date(order.orderTime).toLocaleString()}
              </p>
              <p className="mb-0 text-success fw-bold">Status: {order.status}</p>
              <p className="fw-semibold mt-1">₹{order.totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Price & Address */}
      <hr />
      <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
        <span>Total</span>
        <span>₹{totalPrice.toFixed(2)}</span>
      </div>

      <div className="mb-4">
        <p className="mb-1 fw-bold">
          <FaMapMarkerAlt className="me-2 text-danger" />
          Delivery Address
        </p>
        <p className="mb-0">{user.address}</p>
      </div>

      {/* CTA Buttons */}
      <div className="text-center d-flex flex-column flex-sm-row justify-content-center gap-3">
        <button
          className="btn btn-outline-dark rounded-pill px-4"
          onClick={() => navigate('/customerhome')}
        >
          ← Back to Menu
        </button>

        <button
          className="btn btn-success rounded-pill px-4 fw-bold"
          onClick={() =>
            navigate("/paymentPage", {
              state: {
                order: orders[0],
                address: user.address,
              },
            })
          }
        >
          💳 Pay Now
        </button>
      </div>
    </div>

    {/* 🔻 Footer Section 🔻
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '60px 0',
      textAlign: 'center',
      marginTop: '80px'
    }}>
      <h3 style={{
        fontSize: '2rem',
        marginBottom: '30px',
        fontWeight: 'bold',
        color: '#585858e6'
      }}>
        OUR SPECIALITIES
      </h3>

      <div className="d-flex justify-content-center flex-wrap gap-5">
        <div>
          <div style={{ fontSize: '2.5rem' }}>🌐</div>
          <h5 className="mt-2">Seamless Browsing</h5>
          <p style={{ maxWidth: '220px', margin: 'auto', fontSize: '0.9rem' }}>
            Enjoy a smooth, responsive, and immersive web experience.
          </p>
        </div>
        <div>
          <div style={{ fontSize: '2.5rem' }}>💡</div>
          <h5 className="mt-2">Smart Search</h5>
          <p style={{ maxWidth: '220px', margin: 'auto', fontSize: '0.9rem' }}>
            Quickly discover recipes and filter categories at ease.
          </p>
        </div>
        <div>
          <div style={{ fontSize: '2.5rem' }}>🚚</div>
          <h5 className="mt-2">Home Delivery</h5>
          <p style={{ maxWidth: '220px', margin: 'auto', fontSize: '0.9rem' }}>
            Fast and hot food delivered directly to your doorstep.
          </p>
        </div>
      </div>
    </div> */}
  </div>
);

}
export default OrderSuccess;
