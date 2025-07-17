// src/components/RestaurantHomeWrapper.js
import React from "react";
import { useLocation } from "react-router-dom";
import RestaurantHome from "./RestaurantHome";

const RestaurantHomeWrapper = () => {
  const location = useLocation();
  const userEmail = location.state?.email || "Restaurant Owner";
  return <RestaurantHome userEmail={userEmail} />;
};

export default RestaurantHomeWrapper;
