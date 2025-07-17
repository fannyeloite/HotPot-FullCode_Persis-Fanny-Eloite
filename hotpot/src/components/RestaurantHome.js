// // src/components/RestaurantHome.js
// import React, { useState, useEffect } from 'react';
// import './RestaurantHome.css'; // CSS styles (see below)
// import restaurantBg from '../assets/restaurantbg.jpg'; // Background image (put in src/assets)

// const RestaurantHome = ({ userEmail }) => {
//   // Food form state
//   const [food, setFood] = useState({
//     foodId: null, // hidden, used for edit
//     foodName: '',
//     price: '',
//     hotel: '',
//     imagePath: '',
//     category: '',
//   });

//   const [categories, setCategories] = useState([]); // Categories from backend
//   const [foods, setFoods] = useState([]); // Foods from backend

//   // Fetch categories from category API
//   const fetchCategories = async () => {
//     try {
//       const res = await fetch('http://localhost:8080/api/categories');
//       const data = await res.json();
//       setCategories(data);
//     } catch (error) {
//       console.error('Failed to fetch categories:', error);
//     }
//   };

//   // Fetch foods from foods API
//   const fetchFoods = async () => {
//     try {
//       const res = await fetch('http://localhost:8080/api/foods');
//       const data = await res.json();
//       setFoods(data);
//     } catch (error) {
//       console.error('Failed to fetch foods:', error);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//     fetchFoods();
//   }, []);

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value, type } = e.target;

//     // For price input, parse float safely
//     setFood((prev) => ({
//       ...prev,
//       [name]: type === 'number' ? (value === '' ? '' : Number(value)) : value,
//     }));
//   };

//   // Handle category radio button change
//   const handleCategoryChange = (e) => {
//     setFood((prev) => ({
//       ...prev,
//       category: e.target.value,
//     }));
//   };

//   // Handle submit add/update
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const method = food.foodId ? 'PUT' : 'POST';
//       const url = food.foodId
//         ? `http://localhost:8080/api/foods/${food.foodId}`
//         : 'http://localhost:8080/api/foods';

//       // Food object to send - remove foodId if creating new
//       const bodyData = {
//         foodName: food.foodName,
//         price: food.price,
//         hotel: food.hotel,
//         imagePath: food.imagePath,
//         category: food.category,
//       };

//       if (method === 'PUT') {
//         bodyData.foodId = food.foodId; // Include id for update
//       }

//       const res = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(bodyData),
//       });

//       if (res.ok) {
//         alert('Food saved successfully!');
//         setFood({ foodId: null, foodName: '', price: '', hotel: '', imagePath: '', category: '' });
//         fetchFoods();
//       } else {
//         alert('Error saving food');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Network error');
//     }
//   };

//   // Handle reset form
//   const handleReset = () => {
//     setFood({ foodId: null, foodName: '', price: '', hotel: '', imagePath: '', category: '' });
//   };

//   // Handle delete food
//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this food item?')) {
//       try {
//         const res = await fetch(`http://localhost:8080/api/foods/${id}`, {
//           method: 'DELETE',
//         });
//         if (res.ok) {
//           alert('Food deleted');
//           fetchFoods();
//         } else {
//           alert('Food not found');
//         }
//       } catch (err) {
//         console.error(err);
//         alert('Network error');
//       }
//     }
//   };

//   // Handle edit food - load data into form
//   const handleEdit = (foodItem) => {
//     setFood({
//       foodId: foodItem.foodId,
//       foodName: foodItem.foodName,
//       price: foodItem.price,
//       hotel: foodItem.hotel,
//       imagePath: foodItem.imagePath,
//       category: foodItem.category,
//     });
//   };

// src/components/RestaurantHome.js
// import React, { useState, useEffect } from 'react';
// import './RestaurantHome.css';
// import restaurantBg from '../assets/restaurantbg.jpg';
// import axiosInstance from '../utils/axiosInstance'; // ✅ Import axios instance

// const RestaurantHome = ({ userEmail }) => {
//   const [food, setFood] = useState({
//     foodId: null,
//     foodName: '',
//     price: '',
//     hotel: '',
//     imagePath: '',
//     category: '',
//   });

//   const [categories, setCategories] = useState([]);
//   const [foods, setFoods] = useState([]);

//   // ✅ Fetch categories using axios
//   const fetchCategories = async () => {
//     try {
//       const res = await axiosInstance.get('/categories');
//       setCategories(res.data);
//     } catch (error) {
//       console.error('Failed to fetch categories:', error);
//     }
//   };

//   // ✅ Fetch foods using axios
//   const fetchFoods = async () => {
//   try {
//     const res = await axiosInstance.get(`/foods/owner/${userEmail}`);  // ✅ fetch based on email
//     setFoods(res.data);
//   } catch (error) {
//     console.error('Failed to fetch foods:', error);
//   }
// };


//   useEffect(() => {
//     fetchCategories();
//     fetchFoods();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     setFood((prev) => ({
//       ...prev,
//       [name]: type === 'number' ? (value === '' ? '' : Number(value)) : value,
//     }));
//   };

//   const handleCategoryChange = (e) => {
//     setFood((prev) => ({
//       ...prev,
//       category: e.target.value,
//     }));
//   };

//   // ✅ Submit using axios
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const method = food.foodId ? 'put' : 'post';
//       const url = food.foodId ? `/foods/${food.foodId}` : '/foods';

//       const bodyData = {
//   foodName: food.foodName,
//   price: food.price,
//   hotel: food.hotel,
//   imagePath: food.imagePath,
//   category: food.category,
//   restaurantownerEmail: userEmail  // ✅ include this
// };


//       if (method === 'put') {
//         bodyData.foodId = food.foodId;
//       }

//       await axiosInstance[method](url, bodyData);

//       alert('Food saved successfully!');
//       setFood({ foodId: null, foodName: '', price: '', hotel: '', imagePath: '', category: '' });
//       fetchFoods();
//     } catch (err) {
//       console.error(err);
//       alert('Error saving food');
//     }
//   };

//   const handleReset = () => {
//     setFood({ foodId: null, foodName: '', price: '', hotel: '', imagePath: '', category: '' });
//   };

//   // ✅ Delete using axios
//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this food item?')) {
//       try {
//         await axiosInstance.delete(`/foods/${id}`);
//         alert('Food deleted');
//         fetchFoods();
//       } catch (err) {
//         console.error(err);
//         alert('Error deleting food');
//       }
//     }
//   };

//   const handleEdit = (foodItem) => {
//     setFood({
//       foodId: foodItem.foodId,
//       foodName: foodItem.foodName,
//       price: foodItem.price,
//       hotel: foodItem.hotel,
//       imagePath: foodItem.imagePath,
//       category: foodItem.category,
//     });
//   };

//   // 🔽 The rest of the JSX remains the same...


//   return (
//            <div
//              className="restaurant-body"
//              style={{
//              backgroundImage: `url(${restaurantBg})`,
//              backgroundSize: 'cover',
//              backgroundRepeat: 'no-repeat',
//              backgroundPosition: 'center',
//              minHeight: '100vh',
//              fontFamily: "'Segoe UI', sans-serif",
//   }}
// >

//       {/* Navbar component if you have */}
//       {/* <Navbar /> */}

//       <div className="container-fluid mt-4">
//         <div className="row">
//           {/* Form */}
//           <div className="col-sm-5">
//             <div
//           style={{
//             backgroundColor: 'rgba(255, 255, 255, 0.6)',
//             borderRadius: '5px',
//             padding: '5px',
//             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
//           }}
//         >
//               <h3 style={{ color: '#8B0000', fontWeight: 'bold' }} className="mb-4">
//                  Add / Update Food
//                  </h3>

//               <form onSubmit={handleSubmit}>
//                 {/* Food ID is hidden and used only on edit */}
//                 {/* <input type="hidden" name="foodId" value={food.foodId || ''} /> */}

//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="foodName"
//                     placeholder="Food Name"
//                     value={food.foodName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="number"
//                     step="0.01"
//                     className="form-control"
//                     name="price"
//                     placeholder="Price"
//                     value={food.price}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="hotel"
//                     placeholder="Hotel"
//                     value={food.hotel}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="imagePath"
//                     placeholder="Image URL"
//                     value={food.imagePath}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">
//                     <strong>Category:</strong>
//                   </label>
//                   <br />
//                   {categories.length ? (
//                     categories.map((cat) => (
//                       <div className="form-check form-check-inline" key={cat.categoryId}>
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="category"
//                           value={cat.categoryName}
//                           checked={food.category === cat.categoryName}
//                           onChange={handleCategoryChange}
//                           required
//                         />
//                         <label className="form-check-label text-dark">{cat.categoryName}</label>
//                       </div>
//                     ))
//                   ) : (
//                     <p>Loading categories...</p>
//                   )}
//                 </div>

//                 <div className="mb-3 d-flex gap-2">
//                   <button type="submit" className="btn btn-success shadow">
//                     Save
//                   </button>
//                   <button type="button" className="btn btn-secondary shadow" onClick={handleReset}>
//                     Reset
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>

//           {/* Table */}
//           <div className="col-sm-7">
//             <div
//           style={{
//             backgroundColor: 'rgba(255, 255, 255, 0.6)',
//             borderRadius: '5px',
//             padding: '5px',
//             boxShadow: '0 4px 20px rgba(255, 211, 190, 0.25)'
//           }}
//         >
//               <h3 style={{ color: '#560404ff', fontWeight: 'bold' }} className="mb-4">
//                  My Food Items
//                  </h3>
//               <table className="table table-striped table-hover table-bordered bg-white text-dark">
//                 <thead className="table-danger">
//                   <tr>
//                     <th>Food ID</th>
//                     <th>Food Name</th>
//                     <th>Price</th>
//                     <th>Hotel</th>
//                     <th>Category</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {foods.length ? (
//                     foods.map((p) => (
//                       <tr key={p.foodId}>
//                         <td>{p.foodId}</td>
//                         <td>{p.foodName}</td>
//                         <td>{p.price}</td>
//                         <td>{p.hotel}</td>
//                         <td>{p.category}</td>
//                         <td>
//                           <button
//                             className="btn btn-warning btn-sm shadow me-2"
//                             onClick={() => handleEdit(p)}
//                           >
//                             Update
//                           </button>
//                           <button
//                             className="btn btn-danger btn-sm shadow"
//                             onClick={() => handleDelete(p.foodId)}
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="6" className="text-center">
//                         No food items found
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-4 text-light text-end pe-4 restaurant-footer">
//         <strong>User Home:</strong> {userEmail}
//         <br />
//         <a href="/" className="text-warning fw-bold">
//           Logout
//         </a>
//       </div>
//     </div>
//   );
// };

// export default RestaurantHome;

// src/components/RestaurantHome.js

// src/components/RestaurantHome.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RestaurantHome.css';
import menuBg from '../assets/car.bg.jpg';
import axiosInstance from '../utils/axiosInstance';
import { Link } from 'react-router-dom';


const RestaurantHome = () => {
  const userEmail = localStorage.getItem("restaurantOwnerEmail") || "Restaurant Owner";

  const navigate = useNavigate();

  const [food, setFood] = useState({
    foodId: null,
    foodName: '',
    price: '',
    hotel: '',
    imagePath: '',
    category: '',
  });

  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get('/categories');
      setCategories(res.data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const fetchFoods = async () => {
    try {
      const res = await axiosInstance.get(`/foods/owner/${userEmail}`);
      setFoods(res.data);
    } catch (error) {
      console.error('Failed to fetch foods:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchFoods();
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFood((prev) => ({
      ...prev,
      [name]: type === 'number' ? (value === '' ? '' : Number(value)) : value,
    }));
  };

  const handleCategoryChange = (e) => {
    setFood((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const method = food.foodId ? 'put' : 'post';
      const url = food.foodId ? `/foods/${food.foodId}` : '/foods';

      const bodyData = {
        foodName: food.foodName,
        price: food.price,
        hotel: food.hotel,
        imagePath: food.imagePath,
        category: food.category,
        restaurantownerEmail: userEmail,
      };

      if (method === 'put') {
        bodyData.foodId = food.foodId;
      }

      await axiosInstance[method](url, bodyData);

      alert('Food saved successfully!');
      setFood({ foodId: null, foodName: '', price: '', hotel: '', imagePath: '', category: '' });
      fetchFoods();
    } catch (err) {
      console.error(err);
      alert('Error saving food');
    }
  };

  const handleReset = () => {
    setFood({ foodId: null, foodName: '', price: '', hotel: '', imagePath: '', category: '' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this food item?')) {
      try {
        await axiosInstance.delete(`/foods/${id}`);
        alert('Food deleted');
        fetchFoods();
      } catch (err) {
        console.error(err);
        alert('Error deleting food');
      }
    }
  };

  const handleEdit = (foodItem) => {
    setFood({
      foodId: foodItem.foodId,
      foodName: foodItem.foodName,
      price: foodItem.price,
      hotel: foodItem.hotel,
      imagePath: foodItem.imagePath,
      category: foodItem.category,
    });
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
         <h1 className="text-white fw-bold display-5">🍽️ Manage Menu</h1>

          <Link to="/restaurant/dashboard" className="back-button">⬅ Back to Dashboard</Link>

        </div>

        <div className="row">
          <div className="col-sm-5">
            <div className="card-container"> {/* form section */}

              <h3 className="fw-bold mb-4" style={{ color: '#E6E6FA' }}>
                Add / Update Food
                </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" className="form-control" name="foodName" placeholder="Food Name" value={food.foodName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <input type="number" step="0.01" className="form-control" name="price" placeholder="Price" value={food.price} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" name="hotel" placeholder="Hotel" value={food.hotel} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" name="imagePath" placeholder="Image URL" value={food.imagePath} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white"><strong>Category:</strong></label>

                  <br />
                  {categories.length ? (
                    categories.map((cat) => (
                      <div className="form-check form-check-inline" key={cat.categoryId}>
                        <input className="form-check-input" type="radio" name="category" value={cat.categoryName} checked={food.category === cat.categoryName} onChange={handleCategoryChange} required />
                        <label className="form-check-label text-white">{cat.categoryName}</label>
                      </div>
                    ))
                  ) : (
                    <p>Loading categories...</p>
                  )}
                </div>
                <div className="mb-3 d-flex gap-2">
                  <button type="submit" className="btn btn-success shadow">Save</button>
                  <button type="button" className="btn btn-secondary shadow" onClick={handleReset}>Reset</button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-sm-7">
            <div
                      className="p-4 rounded shadow"
                     style={{
                     backgroundColor: 'rgba(255, 255, 255, 0.18)', // semi-transparent
                      backdropFilter: 'blur(10px)',                 // blur effect
                      WebkitBackdropFilter: 'blur(10px)',           // Safari support
                      border: '1px solid rgba(255, 255, 255, 0.3)',  // subtle border
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',    // soft shadow
             }}
              >
              <h3 className="fw-bold mb-4 text-white">My Food Items</h3>
              <table className="table table-striped table-hover table-bordered food-table">
                <thead className="table-dark">
                  <tr>
                    <th>Food ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Hotel</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {foods.length ? (
                    foods.map((p) => (
                      <tr key={p.foodId}>
                        <td>{p.foodId}</td>
                        <td>{p.foodName}</td>
                        <td>{p.price}</td>
                        <td>{p.hotel}</td>
                        <td>{p.category}</td>
                        <td>
                          <button className="btn btn-warning btn-sm shadow me-2" onClick={() => handleEdit(p)}>Update</button>
                          <button className="btn btn-danger btn-sm shadow" onClick={() => handleDelete(p.foodId)}>Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center">No food items found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-light text-end pe-4 restaurant-footer">
        <strong>User Home:</strong> {userEmail}
        <br />
        <a href="/" className="text-warning fw-bold">Logout</a>
      </div>
    </div>
  );
};

export default RestaurantHome;
