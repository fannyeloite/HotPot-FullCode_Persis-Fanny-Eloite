// // src/components/Cart.js
// import React, { useEffect, useState } from 'react';
// import axiosInstance from "../utils/axiosInstance";
// import './Cart.css';
// import { useNavigate } from 'react-router-dom';
// import cartBg from '../assets/cartbg.jpg'; 

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [quantities, setQuantities] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     try {
//       const response = await axiosInstance.get("http://localhost:8080/api/cart", {
//         withCredentials: true,
//       });
//       const data = response.data;

//       if (Array.isArray(data)) {
//         setCartItems(data);
//         // initialize quantities state
//         const qtyMap = {};
//         data.forEach((item) => {
//           qtyMap[item.cartId] = item.quantity;
//         });
//         setQuantities(qtyMap);
//       } else {
//         setCartItems([]);
//       }
//     } catch (err) {
//       console.error("Error fetching cart items:", err);
//     }
//   };

//   const handleDelete = async (cartId) => {
//     try {
//       await axiosInstance.delete(`http://localhost:8080/api/cart/${cartId}`, {
//         withCredentials: true,
//       });
//       fetchCart();
//     } catch (err) {
//       console.error("Error deleting cart item:", err);
//     }
//   };

//   const handleQuantityChange = (cartId, value) => {
//     setQuantities({ ...quantities, [cartId]: value });
//   };

//  // Inside your Cart component:

// const handleUpdateQuantity = async (cartId) => {
//   try {
//     const itemToUpdate = cartItems.find(item => item.cartId === cartId);
//     if (!itemToUpdate) return;

//     // Prepare full Cart object to send to backend
//     const updatedCart = {
//       ...itemToUpdate,
//       quantity: Number(quantities[cartId] || itemToUpdate.quantity)
//     };

//     await axiosInstance.put(`http://localhost:8080/api/cart/${cartId}`, updatedCart, {
//       withCredentials: true,
//     });
//     fetchCart();
//   } catch (err) {
//     console.error("Error updating quantity:", err);
//   }
// };


//   const handlePlaceOrder = async () => {
//   try {
//     const item = cartItems[0]; // take first item for this demo
//     if (!item) return alert("Cart is empty!");

//     const orderPayload = {
//       customerEmail: item.customerEmail, // this must exist
//       foodId: item.foodId,               // must exist
//       quantity: item.quantity,
//       totalPrice: item.price * item.quantity,
//       orderTime: new Date(),
//       status: "On the way",
//     };

//     const response = await axiosInstance.post("http://localhost:8080/api/orders", orderPayload, {
//       withCredentials: true,
//     });

//     const savedOrder = response.data;
//     console.log("✅ Order placed:", savedOrder);

//     navigate("/orderconfirmation", { state: savedOrder });

//   } catch (err) {
//     console.error("❌ Error placing order:", err);
//     alert("Failed to place order.");
//   }
// };


//   return (
//   <div
//     style={{
//       backgroundImage: `url(${cartBg})`,
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'center',
//       minHeight: '100vh',
//       paddingTop: '60px'
//     }}
//   >
//     <div className="container cart-container">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h3>Your Shopping Cart</h3>
//         <button
//           onClick={() => navigate('/customerhome')}
//           className="btn btn-secondary"
//         >
//           ← Back to Food Items
//         </button>
//       </div>

//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Food</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Update</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.length === 0 ? (
//             <tr>
//               <td colSpan="5" className="text-center">Your cart is empty</td>
//             </tr>
//           ) : (
//             cartItems.map((item) => (
//               <tr key={item.cartId}>
//                 <td>{item.foodName}</td>
//                 <td>₹{item.price}</td>
//                 <td>
//                   <input
//                     type="number"
//                     min="1"
//                     className="form-control form-control-sm"
//                     value={quantities[item.cartId] || item.quantity}
//                     onChange={(e) =>
//                       handleQuantityChange(item.cartId, e.target.value)
//                     }
//                   />
//                 </td>
//                 <td>
//                   <button
//                     className="btn btn-sm btn-success"
//                     onClick={() => handleUpdateQuantity(item.cartId)}
//                   >
//                     Update
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     className="btn btn-sm btn-danger"
//                     onClick={() => handleDelete(item.cartId)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       {cartItems.length > 0 && (
//         <div className="text-end mt-4">
//           <button
//             onClick={handlePlaceOrder}
//             className="btn btn-primary btn-lg"
//           >
//             Place Order
//           </button>
//         </div>
//       )}
//     </div>
//   </div> // ✅ This is the closing tag for the background wrapper
// );

// };

// export default Cart;

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from "../utils/axiosInstance";
import './Cart.css';
import cartBg from '../assets/ca.png';
import CustomerNavbar from './CustomerNavbar';
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";

const Cart = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const customerEmail = localStorage.getItem("email");
  const [cartItems, setCartItems] = useState([]);
const [quantities, setQuantities] = useState({});

useEffect(() => {
  fetchCart();
}, []);

const fetchCart = async () => {
  try {
    const customerEmail = localStorage.getItem("email"); // ✅ Get email from localStorage
    if (!customerEmail) {
      console.error("❌ No customer email found in localStorage");
      return;
    }

    const res = await axiosInstance.get(`cart/user/${customerEmail}`);
    const data = res.data;
    setCartItems(data);

    const qtyMap = {};
    data.forEach((item) => (qtyMap[item.cartId] = item.quantity));
    setQuantities(qtyMap);
  } catch (err) {
    console.error("❌ Error fetching cart:", err);
  }
};


  const handleDelete = async (cartId) => {
    try {
      await axiosInstance.delete(`/cart/${cartId}`);
      fetchCart();
    } catch (err) {
      console.error("❌ Error deleting cart item:", err);
    }
  };

  const handleQuantityChange = (cartId, value) => {
    setQuantities({ ...quantities, [cartId]: Number(value) });
  };

  const handleUpdateQuantity = async (cartId) => {
    try {
      const item = cartItems.find((i) => i.cartId === cartId);
      if (!item) return;
      const updated = { ...item, quantity: quantities[cartId] };
      await axiosInstance.put(`/cart/${cartId}`, updated);
      fetchCart();
    } catch (err) {
      console.error("❌ Error updating quantity:", err);
    }
  };

  // const handlePlaceOrder = async () => {
  //   try {
  //     for (const item of cartItems) {
  //       const orderPayload = {
  //         customerEmail: item.customerEmail,
  //         foodId: item.foodId,
  //         quantity: item.quantity,
  //         totalPrice: item.price * item.quantity,
  //         orderTime: new Date(),
  //         status: "On the way",
  //       };
  //       await axiosInstance.post(`/orders`, orderPayload);
  //       await axiosInstance.delete(`/cart/${item.cartId}`);
  //     }
  //     alert("✅ Order placed successfully!");
  //     // navigate("/orderconfirmation", { state: { customerEmail } });
  //      navigate("/ordersuccess");
  //   } catch (err) {
  //     console.error("❌ Error placing order:", err);
  //     alert("Order failed!");
  //   }
  // };
  const handlePlaceOrder = async () => {
  try {
    const placedOrders = [];

    for (const item of cartItems) {
      const orderPayload = {
        customerEmail: item.customerEmail,
        foodId: item.foodId,
        quantity: item.quantity,
        imagePath: item.imagePath,
        totalPrice: item.price * item.quantity,
        orderTime: new Date(),
        status: "On the way",
      };

      // ✅ Save created order
      const res = await axiosInstance.post(`/orders`, orderPayload);
      placedOrders.push(res.data); // assuming your backend returns the saved order object

      // ✅ Delete from cart after placing order
      await axiosInstance.delete(`/cart/${item.cartId}`);
    }

    alert("✅ Order placed successfully!");
    navigate("/ordersuccess", { state: { orderedItems: placedOrders } });

  } catch (err) {
    console.error("❌ Error placing order:", err);
    alert("Order failed!");
  }
};


  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (quantities[item.cartId] || item.quantity),
    0
  );


return (
    <div
      style={{
        backgroundImage: `url(${cartBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "150px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <CustomerNavbar />

      <div
        className="shadow"
        style={{
          backgroundColor: "#ffffff9f",
          borderRadius: "20px",
          padding: "30px 30px",
          width: "90%",
          maxWidth: "620px",
          maxHeight: "70vh",
          overflowY: "auto",
        }}
      >
        <h4 className="text-center mb-4 fw-bold text-danger">🛒 YOUR CART</h4>

        {cartItems.length === 0 ? (
          <p className="text-center text-muted">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.cartId}
                className="d-flex align-items-start mb-3 border-bottom pb-2"
                style={{ gap: "12px" }}
              >
                <img
                  src={item.imagePath}
                  alt={item.foodName}
                  style={{
                    width: "80px",
                    height: "90px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
                <div className="flex-grow-1">
                  <h6 className="fw-semibold mb-1" style={{ fontSize: "1.3rem" }}>
                    {item.foodName}
                    </h6>

                  <div className="text-muted mb-1" style={{ fontSize: "1.2rem" }}>
                    ₹{item.price}
                  </div>
                  <div className="d-flex align-items-center">
                    <input
                      type="number"
                      min="1"
                      value={quantities[item.cartId]}
                      onChange={(e) =>
                        handleQuantityChange(item.cartId, e.target.value)
                      }
                      className="form-control form-control-sm me-2"
                      style={{ width: "60px" }}
                    />
                    <button
                      className="btn btn-sm btn-success me-2 d-flex align-items-center"
                      onClick={() => handleUpdateQuantity(item.cartId)}
                    >
                      <FaCheckCircle className="me-1" /> Update
                    </button>
                    <button
                      className="btn btn-sm btn-danger d-flex align-items-center"
                      onClick={() => handleDelete(item.cartId)}
                    >
                      <FaTrashAlt className="me-1" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Subtotal Section */}
            <div className="mb-3 mt-3">
              <div className="d-flex justify-content-between">
                <span className="fw-semibold">Subtotal</span>
                <span className="fw-bold">₹{totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Buttons */}
            <button
              className="btn btn-danger w-100 fw-bold rounded-pill mb-2"
              onClick={handlePlaceOrder}
            >
              🚚 PROCEED TO CHECKOUT
            </button>
            <button
              className="btn btn-link w-100 text-decoration-none"
              onClick={() => navigate(-1)}
            >
              ← BACK TO MENU
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;