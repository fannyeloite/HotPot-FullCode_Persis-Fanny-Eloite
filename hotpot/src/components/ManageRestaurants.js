// import React, { useEffect, useState } from 'react';
// import axiosInstance from '../utils/axiosInstance';
// import './ManageRestaurants.css'; // optional
// import adminBg from '../assets/adminbg.jpg';

// const ManageRestaurants = () => {
//   const [foods, setFoods] = useState([]);

//   useEffect(() => {
//     axiosInstance.get('/foods')
//       .then((res) => setFoods(res.data))
//       .catch((err) => console.error('Error fetching foods', err));
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${adminBg})`,
//         backgroundSize: 'cover',
//         minHeight: '100vh',
//         padding: '30px',
//         fontFamily: "'Segoe UI', sans-serif",
//       }}
//     >
//       <div className="container bg-white p-4 rounded shadow">
//         <h2 className="text-danger fw-bold mb-4">Restaurants & Food Items</h2>
//         <table className="table table-striped table-hover table-bordered">
//           <thead className="table-dark">
//             <tr>
//               <th>Restaurant Name</th>
//               <th>Owner Email</th>
//               <th>Food Name</th>
//               <th>Price</th>
//               <th>Category</th>
//               <th>Image</th>
//             </tr>
//           </thead>
//           <tbody>
//             {foods.length > 0 ? (
//               foods.map((item) => (
//                 <tr key={item.foodId}>
//                   <td>{item.hotel}</td>
//                   <td>{item.restaurantownerEmail}</td>
//                   <td>{item.foodName}</td>
//                   <td>₹{item.price}</td>
//                   <td>{item.category}</td>
//                   <td>
//                     <img
//                       src={item.imagePath}
//                       alt={item.foodName}
//                       style={{ width: '80px', height: '60px', objectFit: 'cover' }}
//                     />
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center">No food items found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageRestaurants;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import './ManageRestaurants.css';
import managerestBg from '../assets/managerestbg.jpg';


const ManageRestaurants = () => {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = () => {
    axiosInstance.get('/foods')
      .then((res) => setFoods(res.data))
      .catch((err) => console.error('Error fetching foods', err));
  };

  const handleDelete = async (foodId) => {
  if (window.confirm('Are you sure you want to delete this food item?')) {
    try {
      await axiosInstance.delete(`/foods/${foodId}`);
      alert('Food item deleted successfully.');
      fetchFoods(); // Refresh list
    } catch (err) {
      console.error('Error deleting food:', err);
      alert('Error deleting food');
    }
  }
};


  const handleEdit = (foodId) => {
  navigate(`/edit-food/${foodId}`);// You must have a route and page for this
  };

  return (
    <div
  className="manage-restaurants-wrapper"
  style={{ backgroundImage: `url(${managerestBg})` }}
>
  <div className="restaurant-container">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="restaurant-title">Restaurants & Food Items</h2>
      <button className="btn btn-secondary" onClick={() => navigate('/admin/dashboard')}>
        ⬅ Back to Dashboard
      </button>
    </div>

    <table className="table table-striped table-hover table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Restaurant Name</th>
          <th>Owner Email</th>
          <th>Food Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {foods.length > 0 ? (
          foods.map((item) => (
            <tr key={item.foodId}>
              <td>{item.hotel}</td>
              <td>{item.restaurantownerEmail}</td>
              <td>{item.foodName}</td>
              <td>₹{item.price}</td>
              <td>{item.category}</td>
              <td>
                <img
                  src={item.imagePath}
                  alt={item.foodName}
                  style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                />
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(item.foodId)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(item.foodId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" className="text-center">No food items found.</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default ManageRestaurants;