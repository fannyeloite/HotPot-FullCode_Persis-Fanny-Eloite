import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import adminBg from '../assets/adminbg.jpg';
import { Link } from 'react-router-dom';

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axiosInstance.get('/orders/with-food')

      .then((res) => setOrders(res.data))
      .catch((err) => console.error('Failed to load orders', err));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${adminBg})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '30px',
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div className="p-4 rounded shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(8px)' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold" style={{ color: '#003366' }}>Order Details</h2>

          <Link to="/admin/dashboard" className="btn btn-secondary">Back to Dashboard</Link>
        </div>

        <table className="table table-bordered table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th>Order ID</th>
              <th>Customer Email</th>
              <th>Food ID</th>
              <th>Food Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Order Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.customerEmail}</td>
                  <td>{order.foodId}</td>
                  <td>{order.foodName}</td>
                  <td>
                    <img
                      src={order.imagePath}
                      alt={order.foodName}
                      style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                    />
                  </td>
                  <td>{order.quantity}</td>
                  <td>₹{order.totalPrice}</td>
                  <td>{order.status}</td>
                  <td>{new Date(order.orderTime).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOrders;
