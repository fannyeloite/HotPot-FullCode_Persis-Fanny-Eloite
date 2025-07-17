// // src/components/CustomerHome.js
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axiosInstance from "../utils/axiosInstance";
// import customerbg from '../assets/customerbg.jpg';


// const CustomerHome = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const queryParams = new URLSearchParams(location.search);
//   const selectedCategory = queryParams.get('category');

//   const [foods, setFoods] = useState([]);
//   const [userName, setUserName] = useState("Customer"); // Replace with actual login state if available

//  useEffect(() => {
//   if (selectedCategory) {
//     fetchFoodsByCategory();
//   } else {
//     fetchAllFoods();
//   }
//   // Also set username from sessionStorage if available
//   const user = JSON.parse(sessionStorage.getItem("user"));
//   if (user?.name) setUserName(user.name);
// }, [selectedCategory]);

// const fetchAllFoods = async () => {
//   try {
//     const res = await axiosInstance.get(`http://localhost:8080/api/foods`); // Add this endpoint in backend to get all foods
//     setFoods(res.data);
//   } catch (err) {
//     console.error("Error fetching all foods", err);
//   }
// };

// const fetchFoodsByCategory = async () => {
//   try {
//     const res = await axiosInstance.get(`http://localhost:8080/api/foods/category/${selectedCategory}`);
//     setFoods(res.data);
//   } catch (err) {
//     console.error("Error fetching foods by category", err);
//   }
// };


//  const handleAddToCart = async (foodId) => {
//   try {
//     const foodItem = foods.find(f => f.foodId === foodId);
//     const user = JSON.parse(sessionStorage.getItem("user"));

//     if (!user || !user.email) {
//       alert("Please log in to add items to your cart.");
//       return;
//     }

//     const cartPayload = {
//       customerEmail: user.email,
//       foodId: foodItem.foodId,
//       foodName: foodItem.foodName,
//       price: foodItem.price,
//       quantity: 1
//     };

//     const response = await axiosInstance.post("http://localhost:8080/api/cart", cartPayload, {
//       withCredentials: true,
//     });

//     alert("Item added to cart!");
//     navigate("/cart");

//   } catch (err) {
//     console.error("Error adding to cart:", err);
//     alert("Failed to add to cart.");
//   }
// };



//   return (
//     <div
//       style={{
//         backgroundImage: `url(${customerbg})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         paddingTop: '60px',
//       }}
//     >
//       <div
//   className="container content-container"
//   style={{
//     backgroundColor: 'rgba(255, 255, 255, 0.6)',
//     borderRadius: '20px',
//     padding: '40px',
//     marginTop: '40px',
//     boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
//   }}
// >

//         <h2 style={{ fontWeight: '700', color: '#34495e', fontSize: '32px' }}>Welcome, {userName}!</h2>


//        <button
//          onClick={() => navigate('/select-category')}
//          className="btn mb-3"
//          style={{
//          backgroundColor: '#34495e',      // Dark slate-blue (same as Welcome text)
//          color: 'white',                  // White text for contrast
//          fontWeight: 'bold',              // Makes it elegant and clear
//          border: 'none',                  // Removes Bootstrap outline style
//          padding: '10px 20px',
//          borderRadius: '8px',
//          boxShadow: '0 4px 12px rgba(0,0,0,0.15)', // Optional subtle shadow
//          transition: '0.3s ease',
//   }}
//   onMouseEnter={(e) => (e.target.style.backgroundColor = '#2c3e50')}
//   onMouseLeave={(e) => (e.target.style.backgroundColor = '#34495e')}
// >
//   ← Choose another Category
// </button>


//        <p style={{ fontSize: '18px', color: '#2c3e50' }}>
//          Browse available food items and place your order.
//        </p>

//         <div className="row">
//           {foods.map((food) => (
//             <div className="col-md-4 mb-4" key={food.foodId}>
//               <div
//                 className="card"
//                 style={{
//                  borderRadius: '15px',
//                  boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
//                  backgroundColor: 'rgba(255,255,255,0.8)',
// }}

//               >
//                 <img
//                   src={food.imagePath}
//                   className="card-img-top"
//                   alt={food.foodName}
//                   style={{ maxHeight: '400px', objectFit: 'cover' }}
//                 />
//                 <div className="card-body" style={{ padding: '20px' }}>
//                   <h5 className="card-title" style={{ color: '#c0392b', fontWeight: '700' }}>
//                     {food.foodName}
//                   </h5>
//                   <p className="card-text">
//                     <strong>Hotel:</strong> {food.hotel}
//                     <br />
//                     <strong>Price:</strong> ₹{food.price}
//                     <br />
//                     <strong>Category:</strong> {food.category}
//                   </p>
//                   <button
//                     className="btn btn-warning btn-sm"
//                     onClick={() => handleAddToCart(food.foodId)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerHome;


import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from "../utils/axiosInstance";
import customerbg from '../assets/foodbg.jpg';
import CustomerNavbar from './CustomerNavbar';
import { Player } from '@lottiefiles/react-lottie-player';
import inventoryAnim from '../animations/Inventory.json'; // adjust path as needed


const CustomerHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get('category');
   const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const [foods, setFoods] = useState([]);
  const [userName, setUserName] = useState("Customer");
  const [showAnim, setShowAnim] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      fetchFoodsByCategory();
    } else {
      fetchAllFoods();
    }

    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user?.name) setUserName(user.name);
  }, [selectedCategory]);

  const fetchAllFoods = async () => {
    try {
      const res = await axiosInstance.get(`http://localhost:8080/api/foods`);
      setFoods(res.data);
    } catch (err) {
      console.error("Error fetching all foods", err);
    }
  };

  const fetchFoodsByCategory = async () => {
    try {
      const res = await axiosInstance.get(`http://localhost:8080/api/foods/category/${selectedCategory}`);
      setFoods(res.data);
    } catch (err) {
      console.error("Error fetching foods by category", err);
    }
  };

  const handleAddToCart = async (foodId) => {
  try {
    const foodItem = foods.find(f => f.foodId === foodId);
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (!user || !user.email) {
      alert("Please log in to add items to your cart.");
      return;
    }

    const cartPayload = {
      customerEmail: user.email,
      foodId: foodItem.foodId,
      foodName: foodItem.foodName,
      price: foodItem.price,
      quantity: 1,
      imagePath: foodItem.imagePath,
    };

    setShowAnim(true); // Show animation

    await axiosInstance.post("http://localhost:8080/api/cart", cartPayload, {
      withCredentials: true,
    });

    setTimeout(() => {
      setShowAnim(false);
      navigate("/cart");
    }, 2500); // 2.5 seconds delay before navigating

  } catch (err) {
    console.error("Error adding to cart:", err);
    alert("Failed to add to cart.");
    setShowAnim(false);
  }
};


//   return (
//     <>
//     {showAnim && (
//   <div
//     style={{
//       position: "fixed",
//       top: 0, left: 0,
//       width: "100%", height: "100%",
//       backgroundColor: "rgba(255,255,255,0.8)",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       zIndex: 9999
//     }}
//   >
//     <div style={{ textAlign: "center" }}>
//       <Player
//         autoplay
//         loop
//         src={inventoryAnim}
//         style={{ height: '300px', width: '300px' }}
//       />
//       <h4 style={{ marginTop: '20px', color: '#444' }}>
//         Adding to cart...
//       </h4>
//     </div>
//   </div>
// )}

    
//     <div
//       style={{
//         backgroundImage: `url(${customerbg})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         paddingTop: '60px',
//         fontFamily: "'Segoe UI', sans-serif"
//       }}
//     >
//       {/* Navbar */}
//       <CustomerNavbar />
      
//       <div
//         className="container"
//         style={{
//           backgroundColor: 'rgba(255, 255, 255, 0.6)',
//           borderRadius: '25px',
//           padding: '50px',
//           marginTop: '40px',
//           boxShadow: '0 10px 35px rgba(0, 0, 0, 0.2)',
//           backdropFilter: 'blur(12px)',
//         }}
//       >
//         <h2 style={{ fontWeight: '700', color: '#2c3e50', fontSize: '2.5rem', textAlign: 'center' }}>
//           Welcome, {userName}! 👋
//         </h2>

//         <p style={{ fontSize: '1.2rem', color: '#555', textAlign: 'center', marginBottom: '30px' }}>
//           Browse delicious food items and place your order with ease.
//         </p>

//         <div className="text-center mb-4">
//           <button
//             onClick={() => navigate('/select-category')}
//             className="btn"
//             style={{
//               backgroundColor: '#34495e',
//               color: '#fff',
//               fontWeight: '600',
//               padding: '12px 30px',
//               borderRadius: '30px',
//               fontSize: '1rem',
//               boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//               transition: '0.3s',
//             }}
//             onMouseEnter={(e) => e.target.style.backgroundColor = '#2c3e50'}
//             onMouseLeave={(e) => e.target.style.backgroundColor = '#34495e'}
//           >
//             ← Choose another Category
//           </button>
//         </div>

//         <div className="row">
//           {foods.map((food) => (
//             <div className="col-md-4 col-sm-6 mb-4" key={food.foodId}>
//               <div
//                 className="card h-100 shadow-lg border-0"
//                 style={{
//                   borderRadius: '40px',
//                   overflow: 'hidden',
//                   background: 'rgba(255, 255, 255, 0.8)',
//                   transition: 'transform 0.3s ease',
//                 }}
//                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
//                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
//               >
//                 <img
//                   src={food.imagePath}
//                   alt={food.foodName}
//                   className="card-img-top"
//                   style={{ height: '250px', objectFit: 'cover' }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title text-center text-danger fw-bold">{food.foodName}</h5>
//                   <p className="card-text text-center" style={{ fontSize: '0.95rem', color: '#555' }}>
//                     <strong>Hotel:</strong> {food.hotel}<br />
//                     <strong>Category:</strong> {food.category}<br />
//                     <strong>Price:</strong> ₹{food.price}
//                   </p>
//                   <div className="text-center mt-3">
//                     <button
//                       className="btn btn-warning px-4 py-2 fw-semibold rounded-pill"
//                       onClick={() => handleAddToCart(food.foodId)}
//                     >
//                       Add to Cart 🛒
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {foods.length === 0 && (
//           <div className="text-center text-muted mt-5" style={{ fontSize: '1.2rem' }}>
//             No food items available in this category yet 🍽️
//           </div>
//         )}
//       </div>
//     </div>
//     </>
//   );
return (
  <>
    {showAnim && (
      <div
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100%", height: "100%",
          backgroundColor: "rgba(255,255,255,0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Player
            autoplay
            loop
            src={inventoryAnim}
            style={{ height: '300px', width: '300px' }}
          />
          <h4 style={{ marginTop: '20px', color: '#444' }}>
            Adding to cart...
          </h4>
        </div>
      </div>
    )}

    <div
      style={{
        backgroundImage: `url(${customerbg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '60px',
        fontFamily: "'Segoe UI', sans-serif"
      }}
    >
      <CustomerNavbar />

      <div
        className="container"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          borderRadius: '25px',
          padding: '50px',
          marginTop: '40px',
          boxShadow: '0 10px 35px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <h2 style={{ fontWeight: '700', color: '#2c3e50', fontSize: '2.5rem', textAlign: 'center' }}>
          Welcome, {userName}! 👋
        </h2>

        <p style={{ fontSize: '1.2rem', color: '#555', textAlign: 'center', marginBottom: '30px' }}>
          Browse delicious food items and place your order with ease.
        </p>

        <div className="text-center mb-1">
          <button
            onClick={() => navigate('/select-category')}
            className="btn"
            style={{
              backgroundColor: '#34495e',
              color: '#fff',
              fontWeight: '600',
              padding: '12px 30px',
              borderRadius: '30px',
              fontSize: '1rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              transition: '0.3s',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#2c3e50'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#34495e'}
          >
            ← Choose another Category
          </button>
        </div>

        {/* 🔽 Price Filter Dropdown */}
        <div className="mb-4 d-flex justify-content-end">
          <select
            className="form-select w-auto"
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
            style={{
              padding: '10px 20px',
              borderRadius: '27px',
              border: '2px solid #ccc',
              backgroundColor: '#fff',
              fontWeight: '500',
              fontSize: '1rem',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            <option value="">Filter by Price </option>
            <option value="lt100">Below ₹100</option>
            <option value="100to250">₹100 – ₹250</option>
            <option value="250to500">₹250 – ₹500</option>
            <option value="gt500">Above ₹500</option>
          </select>
        </div>

        {/* 🧠 Filtered Food Cards */}
        <div className="row">
          {foods
            .filter((food) => {
              if (selectedPriceRange === 'lt100') return food.price < 100;
              if (selectedPriceRange === '100to250') return food.price >= 100 && food.price <= 250;
              if (selectedPriceRange === '250to500') return food.price > 250 && food.price <= 500;
              if (selectedPriceRange === 'gt500') return food.price > 500;
              return true;
            })
            .map((food) => (
              <div className="col-md-4 col-sm-6 mb-4" key={food.foodId}>
                <div
                  className="card h-100 shadow-lg border-0"
                  style={{
                    borderRadius: '40px',
                    overflow: 'hidden',
                    background: 'rgba(255, 255, 255, 0.8)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <img
                    src={food.imagePath}
                    alt={food.foodName}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center text-danger fw-bold">{food.foodName}</h5>
                    <p className="card-text text-center" style={{ fontSize: '0.95rem', color: '#555' }}>
                      <strong>Hotel:</strong> {food.hotel}<br />
                      <strong>Category:</strong> {food.category}<br />
                      <strong>Price:</strong> ₹{food.price}
                    </p>
                    <div className="text-center mt-3">
                      <button
                        className="btn btn-warning px-4 py-2 fw-semibold rounded-pill"
                        onClick={() => handleAddToCart(food.foodId)}
                      >
                        Add to Cart 🛒
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {foods.length === 0 && (
          <div className="text-center text-muted mt-5" style={{ fontSize: '1.2rem' }}>
            No food items available in this category yet 🍽️
          </div>
        )}
      </div>
    </div>
  </>
);

};

export default CustomerHome;

