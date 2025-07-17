// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import deliveryBg from '../assets/deliverybg.jpg';

// const DeliveryPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Parse query parameters
//   const queryParams = new URLSearchParams(location.search);
//   const orderId = queryParams.get("orderId");
//   const deliveryAddress = queryParams.get("deliveryAddress") || "123, Sample Street, City";
//   const deliveryStatus = queryParams.get("deliveryStatus") || "On the Way";
//   const expectedTime = queryParams.get("expectedTime") || "30-45 mins";

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${deliveryBg})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         fontFamily: "'Segoe UI', sans-serif",
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: '20px',
//       }}
//     >
//       <div
//         className="status-card text-center"
//         style={{
//           backgroundColor: 'rgba(255, 255, 255, 0.7)',
//           backdropFilter: 'blur(6px)',
//           padding: '30px',
//           borderRadius: '16px',
//           boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
//           border: '1px solid rgba(255, 255, 255, 0.4)',
//           maxWidth: '600px',
//           width: '100%',
//         }}
//       >
//         <h3 className="mb-4 text-success">Your Order is On the Way!</h3>
//         <p className="status-text">
//           <strong>Order ID:</strong> {orderId}
//         </p>
//         <p className="status-text">
//           <strong>Delivery Address:</strong> {deliveryAddress}
//         </p>
//         <p className="status-text">
//           <strong>Status:</strong> {deliveryStatus}
//         </p>
//         <p className="status-text">
//           <strong>Estimated Delivery Time:</strong> {expectedTime}
//         </p>
//         <button
//           onClick={() => navigate('/select-category')}
//           className="btn btn-primary mt-3"
//         >
//           Back to Menu
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DeliveryPage;

// src/components/DeliveryPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import deliveryBg from '../assets/beryy.jpg';

const DeliveryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // const queryParams = new URLSearchParams(location.search);
  // const orderId = queryParams.get("orderId");
  // const deliveryAddress = queryParams.get("deliveryAddress") || localStorage.getItem("address") || "Your saved address";
  // const deliveryStatus = queryParams.get("deliveryStatus") || "On the Way";
  // const expectedTime = queryParams.get("expectedTime") || "30-45 mins";
  const state = location.state;
  const order = state?.order;
  const address = state?.address || "Your saved address";
  const orderId = order?.orderId || "Unavailable";
  const deliveryStatus = order?.status || "On the Way";
  const expectedTime = "30-45 mins";

  return (
    <div
      style={{
        backgroundImage: `url(${deliveryBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        fontFamily: "'Segoe UI', sans-serif",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        color: '#333'
      }}
    >
      <div
        className="status-card text-center"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.54)',
          backdropFilter: 'blur(8px)',
          padding: '40px 30px',
          borderRadius: '18px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
          maxWidth: '650px',
          width: '100%',
        }}
      >
        <div className="display-4 text-success mb-3">🚚</div>
        <h3 className="fw-bold text-success mb-4">Your Order is On the Way!</h3>

        <p className="fs-5 mb-2"><strong>Order ID:</strong> {orderId}</p>
        <p className="fs-5 mb-2"><strong>Delivery Address:</strong> {address}</p>
        <p className="fs-5 mb-2"><strong>Status:</strong> {deliveryStatus}</p>
        <p className="fs-5 mb-4"><strong>Estimated Delivery Time:</strong> {expectedTime}</p>

        <hr className="my-4" />

        <p className="fst-italic text-dark mb-3">
          Thanks for choosing us! 🍽️<br />
          Your delicious meal is being lovingly prepared and will reach you shortly.
        </p>

        <button
          onClick={() => navigate("/select-category")}
          className="btn btn-outline-dark rounded-pill px-4 fw-bold"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default DeliveryPage;

