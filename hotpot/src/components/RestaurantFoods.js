// import React, { useEffect, useState } from 'react';
// import axiosInstance from '../utils/axiosInstance';
// import { useNavigate } from 'react-router-dom';

// const RestaurantFoods = () => {
//   const [foods, setFoods] = useState([]);
//   const navigate = useNavigate();
//   const userEmail = localStorage.getItem("restaurantOwnerEmail");

//   const fetchMyFoods = async () => {
//     try {
//       const res = await axiosInstance.get(`/foods/owner/${userEmail}`);
//       setFoods(res.data);
//     } catch (error) {
//       console.error("Failed to fetch your foods:", error);
//     }
//   };

//   useEffect(() => {
//     fetchMyFoods();
//   }, []);

//   return (
//     <div className="container py-4" style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="text-primary fw-bold">🍛 My Food Items</h2>
//         <button className="btn btn-outline-secondary" onClick={() => navigate('/restaurant/dashboard')}>
//           ⬅ Back to Dashboard
//         </button>
//       </div>

//       {foods.length ? (
//         <div className="row">
//           {foods.map((food) => (
//             <div className="col-md-4 col-sm-6 mb-4" key={food.foodId}>
//               <div className="card h-100 shadow-sm">
//                 <img
//                   src={food.imagePath}
//                   className="card-img-top"
//                   alt={food.foodName}
//                   style={{ height: '200px', objectFit: 'cover' }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title text-dark fw-bold">{food.foodName}</h5>
//                   <p className="card-text mb-1"><strong>Price:</strong> ₹{food.price}</p>
//                   <p className="card-text mb-1"><strong>Hotel:</strong> {food.hotel}</p>
//                   <p className="card-text"><strong>Category:</strong> {food.category}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center text-muted">
//           <p>No food items found for your restaurant.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RestaurantFoods;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import menuBg from '../assets/beryy.jpg';

const RestaurantFoods = () => {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('restaurantOwnerEmail');

  useEffect(() => {
    const fetchMyFoods = async () => {
      try {
        const res = await axiosInstance.get(`/foods/owner/${userEmail}`);
        setFoods(res.data);
      } catch (err) {
        console.error('Error fetching foods:', err);
      }
    };

    if (userEmail) {
      fetchMyFoods();
    }
  }, [userEmail]);

  return (
    <div
      className="restaurant-body"
      style={{
        backgroundImage: `url(${menuBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        minHeight: '100vh',
        fontFamily: "'Segoe UI', sans-serif",
        paddingTop: '30px',
        paddingBottom: '30px'
      }}
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-white fw-bold display-5">🍛 My Food Items</h1>
          <button className="btn btn-warning shadow" onClick={() => navigate('/restaurant/dashboard')}>
            ⬅ Back to Dashboard
          </button>
        </div>

        <div className="p-4 rounded shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(8px)' }}>
          {foods.length ? (
            <div className="row">
              {foods.map((food) => (
                <div className="col-md-4 col-sm-6 mb-4" key={food.foodId}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={food.imagePath}
                      alt={food.foodName}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-dark fw-bold">{food.foodName}</h5>
                      <p className="card-text mb-1"><strong>Price:</strong> ₹{food.price}</p>
                      <p className="card-text mb-1"><strong>Hotel:</strong> {food.hotel}</p>
                      <p className="card-text"><strong>Category:</strong> {food.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted">No food items found for your restaurant.</p>
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

export default RestaurantFoods;