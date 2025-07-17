// import React, { useEffect, useState } from 'react';

// import { useNavigate } from 'react-router-dom';
// import category from '../assets/category.jpg';
// import axiosInstance from "../utils/axiosInstance";


// const SelectCategory = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const res = await axiosInstance.get('http://localhost:8080/api/categories');

//       setCategories(res.data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!selectedCategory) return;
//     navigate(`/customerhome?category=${selectedCategory}`);

//   };

//  return (
//   <div
//     style={{
//       backgroundImage: `url(${category})`,
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'center',
//       minHeight: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center'
//     }}
//   >
//     <div
//       className="container p-5 rounded shadow"
//       style={{
//         maxWidth: '900px',
//         background: 'rgba(255, 255, 255, 0.15)',
//         backdropFilter: 'blur(10px)',
//         WebkitBackdropFilter: 'blur(10px)',
//         border: '1px solid rgba(253, 240, 221, 0.5)',
//         color: '#fff',
//         fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
//       }}
//     >
//       <h2 className="mb-4 text-center fw-bold" style={{ fontSize: '2rem' }}>
//         Select a Category
//       </h2>
//       <form onSubmit={handleSubmit} className="text-center">
//         <div className="mb-4">
//           <select
//             name="category"
//             className="form-select w-75 mx-auto"
//             required
//             style={{
//               padding: '10px',
//               fontSize: '1rem',
//               borderRadius: '10px',
//               border: 'none',
//             }}
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//           >
//             <option value="" disabled>Select Category</option>
//             {categories.map((cat) => (
//               <option
//                 key={cat.categoryId || cat.categoryName}
//                 value={cat.categoryName}
//                 style={{ color: '#000' }}
//               >
//                 {cat.categoryName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button
//           type="submit"
//           className="btn btn-danger px-4 py-2 fw-bold"
//           style={{
//             fontSize: '1.1rem',
//             borderRadius: '10px',
//             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
//           }}
//         >
//           Show Foods
//         </button>
//       </form>
//     </div>
//   </div>
// );

// };

// export default SelectCategory;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../utils/axiosInstance';
// import categoryBg from '../assets/category.jpg';
// import './SelectCategory.css';

// const SelectCategory = () => {
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const res = await axiosInstance.get('/categories');
//       setCategories(res.data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   const handleCategoryClick = (categoryName) => {
//     navigate(`/customerhome?category=${categoryName}`);
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${categoryBg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         padding: '50px 20px',
//       }}
//     >
//       <div className="container text-center">
//         <h2 className="text-white mb-5 fw-bold" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.76)' }}>
//           Explore Categories
//         </h2>

//         <div className="row justify-content-center g-4">
//           {categories.map((cat, index) => (
//             <div
//               key={index}
//               className="col-6 col-sm-4 col-md-3 col-lg-2"
//               onClick={() => handleCategoryClick(cat.categoryName)}
//               style={{ cursor: 'pointer' }}
//             >
//               <div
//   className="category-card p-3 rounded-4 shadow-lg"
//   style={{
//     background: 'rgba(0, 0, 0, 0.25)',
//     backdropFilter: 'blur(8px)',
//     WebkitBackdropFilter: 'blur(8px)',
//     border: '1px solid rgba(255, 255, 255, 0.18)',
//     minHeight: '200px',
//     transition: 'transform 0.3s ease',
//     cursor: 'pointer',
//   }}
//   onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
//   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.00)'}
// >
//   <img
//     src={cat.imagePath}
//     alt={cat.categoryName}
//     className="img-fluid mb-3"
//     style={{
//       width: '100%',
//       height: '100px',
//       objectFit: 'cover',
//       borderRadius: '12px',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//     }}
//   />
//   <h5 className="fw-bold text-dark text-center mb-0" style={{ fontFamily: 'Segoe UI' }}>
//     {cat.categoryName}
//   </h5>
// </div>

//               {/* <div className="category-card p-2 shadow-sm rounded-4 bg-white h-100">
//                 <img
//                   src={cat.imagePath}
//                   alt={cat.categoryName}
//                   className="img-fluid mb-2"
//                   style={{ width: '150px', height: '80px', objectFit: 'contain' }}
//                 />
//                 <h6 className="fw-semibold">{cat.categoryName}</h6>
//               </div> */}

//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SelectCategory;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../utils/axiosInstance';
// import categoryBg from '../assets/custombg.jpg';
// import './SelectCategory.css';

// import CustomerNavbar from './CustomerNavbar';

// const SelectCategory = () => {
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const res = await axiosInstance.get('/categories');
//       setCategories(res.data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   const handleCategoryClick = (categoryName) => {
//     navigate(`/customerhome?category=${categoryName}`);
//   };

//   return (
//     <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: '#f5f5f5' }}>
//       {/* ✅ Include reusable navbar at the top */}
//       <CustomerNavbar />

//       {/* HERO SECTION */}
//       <div
//         style={{
//           backgroundImage: `url(${categoryBg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           padding: '100px 20px 60px',
//           color: '#fff',
//           textAlign: 'center',
//         }}
//       > 
//         <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', textShadow: '2px 2px 8px #000' }}>
//           It is even better than <br /> an expensive cookery book
//         </h1>
//         <p style={{ fontSize: '1.5rem', marginTop: '10px', textShadow: '1px 1px 5px rgba(99, 74, 74, 0.81)' }}>
//           Learn how to make your favorite restaurant’s dishes
//         </p>

//         {/* Optional Search Bar Section */}
//         <div className="d-flex justify-content-center align-items-center mt-4">
//           <input
//             type="text"
//             className="form-control w-50 me-2 rounded-pill"
//             placeholder="I want to make..."
//             style={{ maxWidth: '300px' }}
//           />
//           <select className="form-select rounded-pill" style={{ maxWidth: '180px' }}>
//             <option>Categories</option>
//             {categories.map((cat, i) => (
//               <option key={i} value={cat.categoryName}>{cat.categoryName}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* CATEGORIES SECTION */}
//       <div
//         className="container py-5"
//         style={{
//         background: 'rgba(120, 96, 96, 0.9)',
//         backdropFilter: 'blur(10px)',
//         WebkitBackdropFilter: 'blur(10px)',
//         borderRadius: '20px',
//         padding: '40px 30px',
//         boxShadow: '0 8px 32px rgba(57, 32, 32, 0.53)',
//         marginTop: '40px',
//        }}
//       >

//        <h2 className="text-center mb-4 fw-bold category-title">
//           Recipes By Category
//          </h2>

//         <p
//             className="text-center text-muted mb-5"
//             style={{ fontSize: '1.1rem' }} // or try '1.2rem'
//              >
//             Explore mouth-watering delights sorted for your cravings!
//         </p>

//         <div className="row justify-content-center g-4">
//           {categories.map((cat, index) => (
//             <div
//               key={index}
//               className="col-6 col-sm-4 col-md-3 col-lg-2"
//               onClick={() => handleCategoryClick(cat.categoryName)}
//               style={{ cursor: 'pointer' }}
//             >
//               <div
//                 className="category-card text-center p-3 rounded-4 shadow-sm"
//                 // style={{
//                 //   background: '#fff',
//                 //   border: '1px solid #ddd',
//                 //   transition: 'transform 0.3s ease',
//                 // }}
//                 onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
//                 onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.00)'}
//               >
//                 <img
//                   src={cat.imagePath}
//                   alt={cat.categoryName}
//                   className="img-fluid mb-2"
//                   style={{
//                     width: '100%',
//                     height: '100px',
//                     objectFit: 'cover',
//                     borderRadius: '10px',
//                   }}
//                 />
//                 <h6 className="fw-semibold mt-2">{cat.categoryName}</h6>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SelectCategory;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

import categoryBg from '../assets/custombg.jpg';
import woodenBg from '../assets/woodbg.jpg';
import promo1 from '../assets/promo1.jpg';
import promo2 from '../assets/promo2.jpg';
import promo3 from '../assets/promo3.jpg';

import './SelectCategory.css';
import CustomerNavbar from './CustomerNavbar';

const SelectCategory = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get('/categories');
      setCategories(res.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/customerhome?category=${categoryName}`);
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        backgroundImage: `url(${woodenBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      {/* Navbar */}
      <CustomerNavbar />

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${categoryBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 20px 60px',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', textShadow: '2px 2px 8px #000' }}>
          It is even better than <br /> an expensive cookery book
        </h1>
        <p style={{ fontSize: '1.5rem', marginTop: '10px', textShadow: '1px 1px 5px rgba(99, 74, 74, 0.81)' }}>
          Learn how to make your favorite restaurant’s dishes
        </p>

        {/* Search Bar */}
        <div className="d-flex justify-content-center align-items-center mt-4">
          <input
            type="text"
            className="form-control w-50 me-2 rounded-pill"
            placeholder="I want to make..."
            style={{ maxWidth: '300px' }}
          />
          <select className="form-select rounded-pill" style={{ maxWidth: '180px' }}>
            <option>Categories</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat.categoryName}>
                {cat.categoryName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ⭐ Middle Promo Boxes */}
      <div className="container my-5">
        <div className="row justify-content-center text-center g-4">
          <div className="col-md-4">
            <div className="p-4 bg-white rounded-4 shadow">
              <img src={promo1} alt="Fast Delivery" className="img-fluid mb-3 rounded" />
              <h5 className="fw-bold">Fast Delivery</h5>
              <p>Hot meals, faster than ever — served within 30 minutes!</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white rounded-4 shadow">
              <img src={promo2} alt="Expert Recipes" className="img-fluid mb-3 rounded" />
              <h5 className="fw-bold">Expert Recipes</h5>
              <p>Cook like a pro with curated recipes from master chefs.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white rounded-4 shadow">
              <img src={promo3} alt="Budget Friendly" className="img-fluid mb-3 rounded" />
              <h5 className="fw-bold">Budget Friendly</h5>
              <p>Wholesome meals without breaking the bank. Yum & easy!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div
        className="container py-5"
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '40px 30px',
          boxShadow: '0 8px 32px rgba(57, 32, 32, 0.53)',
        }}
      >
        <h2 className="text-center mb-4 fw-bold category-title" style={{ fontSize: '2.2rem', color: '#2f1d1d' }}>
          🍽️ Recipes By Category! <span style={{ color: '#d94f00' }}>Explore and enjoy eating!</span>
        </h2>

        <p className="text-center text-muted mb-5" style={{ fontSize: '1.4rem' }}>
          Explore mouth-watering delights sorted for your cravings!
        </p>

        <div className="row justify-content-center g-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              onClick={() => handleCategoryClick(cat.categoryName)}
              style={{ cursor: 'pointer' }}
            >
              <div
                className="category-card text-center p-3 rounded-4 shadow-sm"
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.00)')}
              >
                <img
                  src={cat.imagePath}
                  alt={cat.categoryName}
                  className="img-fluid mb-2"
                  style={{
                    width: '100%',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
                <h6 className="fw-semibold mt-2">{cat.categoryName}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* SPECIALITIES SECTION (End Section) */}
<div style={{ backgroundColor: '#000', color: '#fff', padding: '60px 0', textAlign: 'center', marginTop: '80px' }}>
      <h3 style={{ fontSize: '2rem', marginBottom: '30px', fontWeight: 'bold', color: '#585858e6' }}>
        OUR SPECIALITIES
     </h3>

  <div className="d-flex justify-content-center flex-wrap gap-5">
    <div>
      <div style={{ fontSize: '2.5rem' }}>🌐</div>
      <h5 className="mt-2">Seamless Browsing</h5>
      <p style={{ maxWidth: '220px', margin: 'auto', fontSize: '0.9rem' }}>
        Enjoy a smooth, responsive, and immersive web experience.
      </p>
    </div>
    <div>
      <div style={{ fontSize: '2.5rem' }}>💡</div>
      <h5 className="mt-2">Smart Search</h5>
      <p style={{ maxWidth: '220px', margin: 'auto', fontSize: '0.9rem' }}>
        Quickly discover recipes and filter categories at ease.
      </p>
    </div>
    <div>
      <div style={{ fontSize: '2.5rem' }}>🚚</div>
      <h5 className="mt-2">Home Delivery</h5>
      <p style={{ maxWidth: '220px', margin: 'auto', fontSize: '0.9rem' }}>
        Fast and hot food delivered directly to your doorstep.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default SelectCategory;
