// // src/components/RestaurantOrders.js

// import React, { useEffect, useState } from 'react';
// import axiosInstance from '../utils/axiosInstance';
// import { format } from 'date-fns';
// import { useNavigate } from 'react-router-dom';

// const RestaurantOrders = ({ userEmail }) => {
//   const [orders, setOrders] = useState([]);
//   const navigate = useNavigate();

//   const userEmail = localStorage.getItem("restaurantOwnerEmail");

//   useEffect(() => {
//     fetchOrders();
//   }, []);

// //   const fetchOrders = async () => {
// //   try {
// //     // const res = await axiosInstance.get('/orders/with-food');
// //     const res = await axiosInstance.get(`/orders/with-food?email=${userEmail}`);

// //     console.log("FULL ORDER RESPONSE:", res.data); // 👈 Add this

// //     const filtered = res.data.filter(
// //       (o) => o.foodName && o.restaurantownerEmail === userEmail
// //     );
// //     console.log("FILTERED:", filtered); // 👈 Add this too

// //     setOrders(filtered);
// //   } catch (error) {
// //     console.error('Failed to fetch orders:', error);
// //   }
// // };


//     const fetchOrders = async () => {
//   try {
//     const res = await axiosInstance.get(`/orders/owner/${userEmail}`);
//     console.log("Orders fetched:", res.data); // ✅ DEBUG log

//     const orders = res.data;

//     const enrichedOrders = await Promise.all(
//       orders.map(async (order) => {
//         const foodRes = await axiosInstance.get(`/foods/${order.foodId}`);
//         const food = foodRes.data;

//         return {
//           ...order,
//           foodName: food.foodName,
//           hotel: food.hotel,
//           imagePath: food.imagePath,
//         };
//       })
//     );

//     console.log("Enriched Orders:", enrichedOrders); // ✅ DEBUG log
//     setOrders(enrichedOrders);
//   } catch (error) {
//     console.error("Failed to fetch orders:", error);
//   }
// };




//   return (
//     <div className="container-fluid py-4" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="text-danger">🧾 My Orders</h2>
//         <button className="btn btn-warning" onClick={() => navigate('/restaurant/dashboard')}>
//           ⬅ Back to Dashboard
//         </button>
//       </div>

//       <div className="card shadow">
//         <div className="card-body">
//           {orders.length ? (
//             <table className="table table-bordered table-hover">
//               <thead className="table-dark">
//                 <tr>
//                   <th>Order ID</th>
//                   <th>Customer</th>
//                   <th>Food</th>
//                   <th>Hotel</th>
//                   <th>Quantity</th>
//                   <th>Total Price</th>
//                   <th>Status</th>
//                   <th>Ordered At</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.map((o) => (
//                   <tr key={o.orderId}>
//                     <td>{o.orderId}</td>
//                     <td>{o.customerEmail}</td>
                   
//                     <td>
//                       <img src={o.imagePath} alt={o.foodName} width="50" className="me-2 rounded" />
//                       {o.foodName}
//                     </td>
//                     <td>{o.hotel}</td>
//                     <td>{o.quantity}</td>
//                     <td>₹{o.totalPrice.toFixed(2)}</td>
//                     <td><span className="badge bg-info text-dark">{o.status}</span></td>
//                     <td>{format(new Date(o.orderTime), 'dd MMM yyyy, hh:mm a')}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="text-center text-muted">No orders found for your restaurant.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantOrders;

// src/components/RestaurantOrders.js

import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import menuBg from '../assets/foodbg.jpg';

const RestaurantOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  // ✅ Get the restaurant owner's email from localStorage
  const userEmail = localStorage.getItem("restaurantOwnerEmail");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axiosInstance.get(`/orders/owner/${userEmail}`);
      console.log("Orders fetched:", res.data);

      const orders = res.data;

      const enrichedOrders = await Promise.all(
        orders.map(async (order) => {
          const foodRes = await axiosInstance.get(`/foods/${order.foodId}`);
          const food = foodRes.data;

          return {
            ...order,
            foodName: food.foodName,
            hotel: food.hotel,
            imagePath: food.imagePath,
          };
        })
      );

      console.log("Enriched Orders:", enrichedOrders);
      setOrders(enrichedOrders);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };



return (
    <div
      className="restaurant-body"
      style={{
        backgroundImage: `url(${menuBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        minHeight: '100vh',
        fontFamily: "'Segoe UI', sans-serif",
        paddingTop: '30px',
        paddingBottom: '30px'
      }}
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-white fw-bold display-5">🧾 My Orders</h1>
          <button className="btn btn-warning shadow" onClick={() => navigate('/restaurant/dashboard')}>
            ⬅ Back to Dashboard
          </button>
        </div>

       <div className="p-4 rounded shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(8px)' }}>

          {orders.length ? (
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Food</th>
                  <th>Hotel</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Status</th>
                  <th>Ordered At</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.orderId}>
                    <td>{o.orderId}</td>
                    <td>{o.customerEmail}</td>
                    <td>
                      <img
                        src={o.imagePath}
                        alt={o.foodName}
                        style={{ width: '45px', height: '45px', objectFit: 'cover' }}
                        className="me-2 rounded"
                      />
                      {o.foodName}
                    </td>
                    <td>{o.hotel}</td>
                    <td>{o.quantity}</td>
                    <td>₹{o.totalPrice.toFixed(2)}</td>
                    <td><span className="badge bg-info text-dark">{o.status}</span></td>
                    <td>{format(new Date(o.orderTime), 'dd MMM yyyy, hh:mm a')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-muted">No orders found for your restaurant.</p>
          )}
        </div>
      </div>

      <div className="mt-4 text-light text-end pe-4 restaurant-footer">
        <strong>User Home:</strong> [YourEmailHere]
        <br />
        <a href="/" className="text-warning fw-bold">Logout</a>
      </div>
    </div>
  );
};

export default RestaurantOrders;