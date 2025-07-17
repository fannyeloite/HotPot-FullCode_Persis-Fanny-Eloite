// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import successBg from '../assets/successbg.jpg';

// const OrderConfirmation = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const [food, setFood] = useState(null);
//   const [user, setUser] = useState(null);

//   console.log("🔍 Received state:", state);

//   useEffect(() => {
//     if (!state) return;

//     const { foodId, customerEmail } = state;

//     console.log("🍽 Fetching foodId:", foodId);
//     console.log("📧 Fetching customerEmail:", customerEmail);

//     // Fetch food details
//     fetch(`http://localhost:8080/api/foods/${foodId}`)
//       .then(res => {
//         if (!res.ok) throw new Error("Failed to fetch food");
//         return res.json();
//       })
//       .then(data => {
//         console.log("✅ Food data:", data);
//         setFood(data);
//       })
//       .catch(err => console.error("❌ Food fetch error:", err));

//     // Fetch user details
//     fetch(`http://localhost:8080/api/users/${customerEmail}`)
//       .then(res => {
//         if (!res.ok) throw new Error("Failed to fetch user");
//         return res.json();
//       })
//       .then(data => {
//         console.log("✅ User data:", data);
//         setUser(data);
//       })
//       .catch(err => console.error("❌ User fetch error:", err));
//   }, [state]);

//   if (!state) {
//     return (
//       <div className="text-center mt-5">
//         <h3>No order details found!</h3>
//         <button className="btn btn-primary" onClick={() => navigate('/customerhome')}>
//           Back to Menu
//         </button>
//       </div>
//     );
//   }

//   if (!food || !user) {
//     return (
//       <div className="text-center mt-5">
//         <h4>Loading order details...</h4>
//       </div>
//     );
//   }

//   const { orderId, totalPrice, orderTime, status, quantity } = state;

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${successBg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         minHeight: '100vh',
//         fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
//       }}
//     >
//       <div className="container py-5">
//         <div className="row justify-content-center">
//           <div className="col-md-8 confirmation-box text-center bg-light bg-opacity-75 p-5 rounded shadow">
//             <h2 className="text-success fw-bold">Order Placed Successfully!</h2>
//             <hr />
//             <p><strong>Order ID:</strong> {orderId}</p>
//             <p>You ordered <strong>{food.foodName}</strong> from <strong>{food.hotel}</strong>.</p>
//             <p><strong>Quantity:</strong> {quantity}</p>
//             <p><strong>Total Bill:</strong> ₹{totalPrice}</p>
//             <p><strong>Delivery Address:</strong> {user.address}</p>
//             <p><strong>Status:</strong> {status}</p>
//             <p><strong>Order Time:</strong> {new Date(orderTime).toLocaleString()}</p>

//             <div className="d-flex justify-content-center gap-3 mt-4">
//               <button onClick={() => navigate('/customerhome')} className="btn btn-primary px-4 py-2 rounded-pill">
//                 Back to Menu
//               </button>
//               <a href={`/paymentPage?orderId=${orderId}`} className="btn btn-success px-4 py-2 rounded-pill">
//                 Pay Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderConfirmation;

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance'; // ✅ import it
import successBg from '../assets/successbg.jpg';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [food, setFood] = useState(null);
  const [user, setUser] = useState(null);

  console.log("🔍 Received state:", state);

  useEffect(() => {
    if (!state) return;

    const { foodId, customerEmail } = state;

    console.log("🍽 Fetching foodId:", foodId);
    console.log("📧 Fetching customerEmail:", customerEmail);

    // ✅ Fetch food details using axiosInstance
    axiosInstance.get(`/foods/${foodId}`)
      .then(res => {
        console.log("✅ Food data:", res.data);
        setFood(res.data);
      })
      .catch(err => console.error("❌ Food fetch error:", err));

    // ✅ Fetch user details using axiosInstance
    axiosInstance.get(`/users/${customerEmail}`)
      .then(res => {
        console.log("✅ User data:", res.data);
        setUser(res.data);
      })
      .catch(err => console.error("❌ User fetch error:", err));
  }, [state]);

  if (!state) {
    return (
      <div className="text-center mt-5">
        <h3>No order details found!</h3>
        <button className="btn btn-primary" onClick={() => navigate('/customerhome')}>
          Back to Menu
        </button>
      </div>
    );
  }

  if (!food || !user) {
    return (
      <div className="text-center mt-5">
        <h4>Loading order details...</h4>
      </div>
    );
  }

  const { orderId, totalPrice, orderTime, status, quantity } = state;

  return (
    <div
      style={{
        backgroundImage: `url(${successBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 confirmation-box text-center bg-light bg-opacity-75 p-5 rounded shadow">
            <h2 className="text-success fw-bold">Order Placed Successfully!</h2>
            <hr />
            <p><strong>Order ID:</strong> {orderId}</p>
            <p>You ordered <strong>{food.foodName}</strong> from <strong>{food.hotel}</strong>.</p>
            <p><strong>Quantity:</strong> {quantity}</p>
            <p><strong>Total Bill:</strong> ₹{totalPrice}</p>
            <p><strong>Delivery Address:</strong> {user.address}</p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Order Time:</strong> {new Date(orderTime).toLocaleString()}</p>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <button onClick={() => navigate('/customerhome')} className="btn btn-primary px-4 py-2 rounded-pill">
                Back to Menu
              </button>
              <a href={`/paymentPage?orderId=${orderId}`} className="btn btn-success px-4 py-2 rounded-pill">
                Pay Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

