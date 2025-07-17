// src/components/RestaurantOrdersWrapper.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import RestaurantOrders from './RestaurantOrders';

const RestaurantOrdersWrapper = () => {
  const location = useLocation();
  const userEmail = location.state?.email || "Restaurant Owner"; // fallback just in case

  return <RestaurantOrders userEmail={userEmail} />;
};

export default RestaurantOrdersWrapper;
