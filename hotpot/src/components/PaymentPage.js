// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import paymentBg from '../assets/paymentbg.jpg'; // ✅ make sure path is correct

// const PaymentPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const queryParams = new URLSearchParams(location.search);
//   const orderId = queryParams.get('orderId') || '12345'; // fallback value
//   const amount = queryParams.get('amount') || '0';

//   const [method, setMethod] = useState('UPI');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ✅ Redirect to delivery page with query parameters
//     navigate(`/delivery?orderId=${orderId}&deliveryAddress=Chennai, India&deliveryStatus=On the Way&expectedTime=30 mins`);
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${paymentBg})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <div
//         className="payment-card"
//         style={{
//           background: 'rgba(220, 230, 241, 0.7)',
//           padding: '30px',
//           borderRadius: '12px',
//           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
//           width: '400px',
//         }}
//       >
//         <h3 className="mb-4 text-center">Complete Your Payment</h3>
//         <form onSubmit={handleSubmit}>
//           <label className="mb-2">Select Payment Method:</label>
//           <select
//             value={method}
//             onChange={(e) => setMethod(e.target.value)}
//             className="form-control"
//           >
//             <option value="UPI">UPI</option>
//             <option value="Card">Card</option>
//             <option value="Cash on Delivery">Cash on Delivery</option>
//           </select>

//           <button type="submit" className="btn btn-primary mt-3 btn-pay">
//             Pay
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;

// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import paymentBg from '../assets/paymentbg.jpg';

// const PaymentPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const queryParams = new URLSearchParams(location.search);
//   const orderId = queryParams.get('orderId') || '12345';
//   const amount = queryParams.get('amount') || '0';

//   const [selectedMethod, setSelectedMethod] = useState('');

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (!selectedMethod) return alert("Please select a payment method");

//   //   navigate(
//   //     `/delivery?orderId=${orderId}&deliveryAddress=Chennai, India&deliveryStatus=On the Way&expectedTime=30 mins`
//   //   );
//   // };
//   const handleSubmit = (e) => {
//   e.preventDefault();

//   if (!selectedMethod) {
//     alert("Please select a payment method");
//     return;
//   }

//   // ✅ Navigate to Delivery page with same state received from OrderSuccess
//   navigate("/delivery", { state: location.state });
// };


//   const paymentMethods = [
//     {
//       id: 'card',
//       label: 'Credit Card',
//       icon: '💳',
//       description: 'Secure credit/debit card payments',
//     },
//     {
//       id: 'paypal',
//       label: 'Paypal',
//       icon: '🅿️',
//     },
//     {
//       id: 'googlepay',
//       label: 'Google Pay',
//       icon: '🅖',
//     },
//     {
//       id: 'applepay',
//       label: 'Apple Pay',
//       icon: '',
//     },
//     {
//       id: 'cod',
//       label: 'Cash on Delivery',
//       icon: '💵',
//     },
//   ];

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${paymentBg})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: '30px',
//         fontFamily: "'Segoe UI', sans-serif"
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: 'rgba(255, 255, 255, 0.78)',
//           padding: '10px',
//           borderRadius: '20px',
//           maxWidth: '500px',
//           width: '100%',
//           boxShadow: '0 8px 30px rgba(13, 7, 7, 0.51)',
//         }}
//       >
//         <h3 className="text-center fw-bold mb-4">Choose Payment Method</h3>
//         <form onSubmit={handleSubmit}>
//           {paymentMethods.map((method) => (
//   <div
//     key={method.id}
//     className={`form-check d-flex align-items-start mb-3 p-3 rounded border ${
//       selectedMethod === method.id ? 'bg-light border-primary shadow-sm' : ''
//     }`}
//     onClick={() => setSelectedMethod(method.id)}
//     style={{
//       cursor: 'pointer',
//       transition: 'all 0.3s',
//     }}
//   >
//     <input
//       className="form-check-input me-3 mt-1"
//       type="radio"
//       name="payment"
//       checked={selectedMethod === method.id}
//       onChange={() => setSelectedMethod(method.id)}
//     />
//     <div>
//       <label
//         className="form-check-label"
//         style={{
//           fontWeight: '600',
//           fontSize: '1.1rem',
//         }}
//       >
//         <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>{method.icon}</span>
//         {method.label}
//       </label>
//       {method.description && (
//         <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
//           {method.description}
//         </p>
//       )}
//     </div>
//   </div>
// ))}


//           <div className="d-flex justify-content-between mt-4">
//             <span className="fw-bold">Amount:</span>
//             <span className="fw-bold text-success">₹{amount}</span>
//           </div>

//           <button
//             type="submit"
//             className="btn btn-success w-100 mt-4 rounded-pill fw-bold py-2"
//           >
//             Pay Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCreditCard } from 'react-icons/fa';
import paymentBg from '../assets/foodbg.jpg';
import CustomerNavbar from './CustomerNavbar';
import { Player } from "@lottiefiles/react-lottie-player";
import processingAnim from "../animations/Processing.json";


const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { order, address } = location.state || {};
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [discount, setDiscount] = useState(20); // ₹20 discount
  const [extraFee, setExtraFee] = useState(30); // ₹30 extra

  const amount = order?.totalPrice || 0;
  const finalTotal = amount + extraFee - discount;

  const isFormValid = email && cardNumber && expiry && cvv;
  const [isProcessing, setIsProcessing] = useState(false);
  const handleSubmit = (e) => {
  e.preventDefault();

  if (!isFormValid) {
    alert('⚠️ Please fill all payment details before proceeding.');
    return;
  }

  setIsProcessing(true); // Show animation

  setTimeout(() => {
    navigate("/delivery", {
      state: {
        order,
        address,
        amount: finalTotal,
      },
    });
  }, 5000); // ⏳ Wait 5 seconds before navigation
};


return (
  <>
  {isProcessing && (
  <div style={{
    position: "fixed",
    top: 0, left: 0,
    width: "100%", height: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <Player
      autoplay
      loop
      src={processingAnim}
      style={{ height: "200px", width: "200px" }}
    />
    <h3 style={{ marginTop: "20px", color: "#333" }}>Processing your payment...</h3>
  </div>
)}
  <div
    style={{
      backgroundImage: `url(${paymentBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '30px',
      fontFamily: "'Segoe UI', sans-serif",
    }}
  > <CustomerNavbar />
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.59)',
        padding: '40px',
        borderRadius: '20px',
        maxWidth: '900px',
        width: '100%',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* 2-column layout inside the single card */}
      <div className="row">
        {/* 📦 Order Summary Section (Left) */}
        <div className="col-md-6 border-end pe-4">
          <button
            className="btn btn-outline-primary mb-3"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="me-2" />
            Back
          </button>

          <h5 className="fw-bold mb-2">📦 Order Summary</h5>
          {order && (
            <div>
              <p className="fw-semibold mb-1">{order.foodName}</p>
              <img
                src={order.imagePath}
                alt={order.foodName}
                className="rounded mb-2"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <p className="mb-1">Qty: {order.quantity}</p>
              <p className="mb-1">Base Price: ₹{order.totalPrice}</p>
              <p className="mb-1 text-muted">Extra Fee: ₹{extraFee}</p>
              <p className="mb-1 text-muted">Discount: -₹{discount}</p>
              <hr />
              <p className="fw-bold fs-5">Total: ₹{finalTotal}</p>
            </div>
          )}
        </div>

        {/* 💳 Payment Fields Section (Right) */}
        <div className="col-md-6 ps-4">
          <h5 className="fw-bold mb-4">💳 Payment Details</h5>

          <div className="d-flex justify-content-start gap-3 mb-3 fs-2 text-primary">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCreditCard />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-3">
              <label>Card Number</label>
              <input
                type="text"
                className="form-control rounded"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div className="row">
              <div className="col-6 mb-3">
                <label>Expiry Date</label>
                <input
                  type="text"
                  className="form-control rounded"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                />
              </div>
              <div className="col-6 mb-3">
                <label>CVV</label>
                <input
                  type="text"
                  className="form-control rounded"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="123"
                />
              </div>
            </div>

            <button
              type="submit"
              className={`btn w-100 mt-3 rounded-pill fw-bold py-2 ${
                isFormValid ? 'btn-success' : 'btn-secondary'
              }`}
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </>
);

};

export default PaymentPage;
