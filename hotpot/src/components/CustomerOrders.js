import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerOrders = () => {
  const [orders, setOrders] = useState([]);
  const customerEmail = sessionStorage.getItem('email');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`/orders/customer/${customerEmail}`);
        setOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      }
    };

    fetchOrders();
  }, [customerEmail]);

  return (
    <div className="container py-5" style={{ fontFamily: 'Segoe UI' }}>
      <h2 className="text-center mb-4">🛒 Your Orders</h2>

      {orders.length === 0 ? (
        <p className="text-center text-muted">You haven’t placed any orders yet.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {orders.map((order) => (
            <div className="col" key={order.orderId}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={order.imagePath}
                  alt={order.foodName}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{order.foodName}</h5>
                  <p className="card-text mb-1">📦 Quantity: {order.quantity}</p>
                  <p className="card-text mb-1">💰 Total: ₹{order.totalPrice}</p>
                  <p className="card-text mb-1">📅 {new Date(order.orderTime).toLocaleString()}</p>
                  <p className={`badge ${order.status === 'Delivered' ? 'bg-success' : 'bg-warning'} text-dark`}>
                    {order.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerOrders;
