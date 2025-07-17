

// // src/components/AdminHome.js
// import React, { useState, useEffect } from 'react';
// import './AdminHome.css';
// import adminBg from '../assets/adminbg.jpg';
// import axiosInstance from "../utils/axiosInstance";

// const AdminHome = ({ userEmail }) => {
//   const [inputs, setInputs] = useState({ categoryId: '', categoryName: '' });
//   const [categories, setCategories] = useState([]);
//   const [editMode, setEditMode] = useState(false);

//   // Fetch categories from backend
//   const fetchCategories = async () => {
//     try {
//       const response = await axiosInstance.get('/categories');
//       setCategories(response.data);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//       alert("Failed to load categories.");
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEdit = (category) => {
//     setInputs(category);
//     setEditMode(true);
//   };

//   const handleDelete = async (categoryId) => {
//     if (window.confirm('Are you sure you want to delete this category?')) {
//       try {
//         await axiosInstance.delete(`/categories/${categoryId}`);
//         fetchCategories();
//       } catch (error) {
//         console.error("Error deleting category:", error);
//         alert("Failed to delete category.");
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editMode) {
//         await axiosInstance.put(`/categories/${inputs.categoryId}`, inputs);
//       } else {
//         await axiosInstance.post('/categories', inputs);
//       }

//       alert('Category saved successfully!');
//       setInputs({ categoryId: '', categoryName: '' });
//       setEditMode(false);
//       fetchCategories();
//     } catch (error) {
//       console.error("Error saving category:", error);
//       alert("Error saving category");
//     }
//   };

//   const handleReset = () => {
//     setInputs({ categoryId: '', categoryName: '' });
//     setEditMode(false);
//   };

  

//   return (
//     <div
//       className="admin-body"
//       style={{
//         backgroundImage: `url(${adminBg})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         fontFamily: "'Segoe UI', sans-serif",
//       }}
//     >
//       <div className="container content-wrapper">
//         <div className="row">
//           {/* Form Section */}
//           <div className="col-md-4">
//             <h3>Add / Update Category</h3>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <input
//                   type="number"
//                   className="form-control"
//                   name="categoryId"
//                   placeholder="Category ID"
//                   value={inputs.categoryId}
//                   onChange={handleChange}
//                   required
//                   disabled={editMode}
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="categoryName"
//                   placeholder="Category Name"
//                   value={inputs.categoryName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mb-3 d-flex gap-2">
//                 <button type="submit" className="btn btn-primary">Save</button>
//                 <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
//               </div>
//             </form>
//           </div>

//           {/* Table Section */}
//           <div className="col-md-8">
//             <h3>Category List</h3>
//             <table className="table table-bordered table-hover">
//               <thead>
//                 <tr>
//                   <th>Category ID</th>
//                   <th>Category Name</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {categories.length ? (
//                   categories.map((cat) => (
//                     <tr key={cat.categoryId}>
//                       <td>{cat.categoryId}</td>
//                       <td>{cat.categoryName}</td>
//                       <td>
//                         <button className="btn btn-sm btn-info me-2" onClick={() => handleEdit(cat)}>Update</button>
//                         <button className="btn btn-sm btn-danger" onClick={() => handleDelete(cat.categoryId)}>Delete</button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="3" className="text-center">No categories found</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="admin-footer">
//         <p>
//           User: <strong>{userEmail}</strong> | <a href="/">Logout</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;

// import React, { useState, useEffect } from 'react';
// import './AdminHome.css';
// import adminBg from '../assets/adminbg.jpg';
// import axiosInstance from '../utils/axiosInstance';

// const AdminHome = ({ userEmail }) => {
// const [inputs, setInputs] = useState({
// categoryId: '',
// categoryName: '',
// imagePath: ''
// });
// const [categories, setCategories] = useState([]);
// const [editMode, setEditMode] = useState(false);

// useEffect(() => {
// fetchCategories();
// }, []);

// const fetchCategories = async () => {
// try {
// const response = await axiosInstance.get('/categories');
// setCategories(response.data);
// } catch (error) {
// console.error('Error fetching categories:', error);
// alert('Failed to load categories.');
// }
// };

// const handleChange = (e) => {
// const { name, value } = e.target;
// setInputs((prev) => ({ ...prev, [name]: value }));
// };

// const handleEdit = (category) => {
// setInputs(category);
// setEditMode(true);
// };

// const handleDelete = async (categoryId) => {
//   if (window.confirm('Are you sure you want to delete this category?')) {
//     try {
//       await axiosInstance.delete(`/categories/${categoryId}`);
//       fetchCategories(); // Refresh list after delete
//     } catch (error) {
//       console.error("Error deleting category:", error);
//       alert("Failed to delete category.");
//     }
//   }
// };



// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     if (editMode) {
//       // ✅ Update the category
//       await axiosInstance.put(`/categories/${inputs.categoryId}`, inputs);
//     } else {
//       // ✅ Add new category
//       await axiosInstance.post('/categories', inputs);
//     }

//     alert('Category saved successfully!');
//     setInputs({ categoryId: '', categoryName: '', imagePath: '' });
//     setEditMode(false);
//     fetchCategories();
//   } catch (error) {
//     console.error('Error saving category:', error);
//     alert('Error saving category');
//   }
// };


// const handleReset = () => {
// setInputs({ categoryId: '', categoryName: '', imagePath: '' });
// setEditMode(false);
// };

// return (
// <div
// className="admin-body"
// style={{
// backgroundImage: `url(${adminBg})`,
// backgroundSize: 'cover',
// backgroundRepeat: 'no-repeat',
// backgroundPosition: 'center',
// minHeight: '100vh',
// fontFamily: "'Segoe UI', sans-serif"
// }}

// >
//   <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
//   <div className="container-fluid">
//     <a className="navbar-brand fw-bold" href="/admin">HotPot Admin</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNavbar">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="adminNavbar">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link" href="/admin/categories">Manage Categories</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/admin/restaurants">Manage Restaurants</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/admin/customers">Manage Users</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/admin/orders">View Orders</a>
//         </li>
//         {/* Optional Future Link */}
//         {/* <li className="nav-item">
//           <a className="nav-link" href="/admin/reports">Reports</a>
//         </li> */}
//       </ul>
//       <span className="navbar-text text-light me-3">
//         Admin: {userEmail}
//       </span>
//       <a href="/" className="btn btn-warning">Logout</a>
//     </div>
//   </div>
// </nav>

// <div className="container content-wrapper">
// <div className="row">
// {/* Form Section */}
// <div className="col-md-4">
// <h3>Add / Update Category</h3>
// <form onSubmit={handleSubmit}>
// <div className="mb-3">
// <input type="number" className="form-control" name="categoryId" placeholder="Category ID" value={inputs.categoryId} onChange={handleChange} required disabled={editMode} />
// </div>
// <div className="mb-3">
// <input type="text" className="form-control" name="categoryName" placeholder="Category Name" value={inputs.categoryName} onChange={handleChange} required />
// </div>
// <div className="mb-3">
// <input type="text" className="form-control" name="imagePath" placeholder="Image Path (e.g. images/savories.jpg)" value={inputs.imagePath} onChange={handleChange} required />
// </div>
// <div className="mb-3 d-flex gap-2">
// <button type="submit" className="btn btn-primary">Save</button>
// <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
// </div>
// </form>
// </div>


//       {/* Table Section */}
//       <div className="col-md-8">
//         <h3>Category List</h3>
//         <table className="table table-bordered table-hover text-center align-middle">
//           <thead className="table-light">
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Image</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {categories.length ? (
//               categories.map((cat) => (
//                 <tr key={cat.categoryId}>
//                   <td>{cat.categoryId}</td>
//                   <td>{cat.categoryName}</td>
//                   <td>
//                     <img
//                       src={cat.imagePath}
//                       alt={cat.categoryName}
//                       style={{ width: '50px', height: '50px', objectFit: 'contain' }}
//                     />
//                   </td>
//                   <td>
//   <button
//     type="button"
//     className="btn btn-sm btn-info me-2"
//     onClick={() => handleEdit(cat)}
//   >
//     Update
//   </button>
//   <button
//   className="btn btn-sm btn-danger"
//   onClick={() => handleDelete(cat.categoryId)}
// >
//   Delete
// </button>

// </td>

//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center">No categories found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>

//   {/* Footer */}
//   <div className="admin-footer text-white text-center mt-4">
//     <p>
//       Logged in as: <strong>{userEmail}</strong> | <a href="/" className="text-white">Logout</a>
//     </p>
//   </div>
// </div>
// );
// };


// export default AdminHome;

// import React, { useState, useEffect } from 'react';

// import axiosInstance from '../utils/axiosInstance';
// import AdminSidebarLayout from './AdminSidebarLayout';
// import adminBg from '../assets/adminbg.jpg';



// const AdminHome = ({ userEmail }) => {
//   const [inputs, setInputs] = useState({
//     categoryId: '',
//     categoryName: '',
//     imagePath: ''
//   });

//   const [categories, setCategories] = useState([]);
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await axiosInstance.get('/categories');
//       setCategories(response.data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//       alert('Failed to load categories.');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEdit = (category) => {
//     setInputs(category);
//     setEditMode(true);
//   };

//   const handleDelete = async (categoryId) => {
//     if (window.confirm('Are you sure you want to delete this category?')) {
//       try {
//         await axiosInstance.delete(`/categories/${categoryId}`);
//         fetchCategories();
//       } catch (error) {
//         console.error('Error deleting category:', error);
//         alert('Failed to delete category.');
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editMode) {
//         await axiosInstance.put(`/categories/${inputs.categoryId}`, inputs);
//       } else {
//         await axiosInstance.post('/categories', inputs);
//       }

//       alert('Category saved successfully!');
//       setInputs({ categoryId: '', categoryName: '', imagePath: '' });
//       setEditMode(false);
//       fetchCategories();
//     } catch (error) {
//       console.error('Error saving category:', error);
//       alert('Error saving category');
//     }
//   };

//   const handleReset = () => {
//     setInputs({ categoryId: '', categoryName: '', imagePath: '' });
//     setEditMode(false);
//   };

//   return (
//     <AdminSidebarLayout userEmail={userEmail}>
//       <div className="row">
//         {/* Form Section */}
//         <div className="col-md-4 mb-4">
//           <div className="bg-white p-4 shadow rounded-3">
//             <h4 className="text-center mb-4 text-primary fw-bold">Add / Update Category</h4>
//             <form onSubmit={handleSubmit}>
//               <input type="number" className="form-control mb-3" name="categoryId" placeholder="Category ID" value={inputs.categoryId} onChange={handleChange} required disabled={editMode} />
//               <input type="text" className="form-control mb-3" name="categoryName" placeholder="Category Name" value={inputs.categoryName} onChange={handleChange} required />
//               <input type="text" className="form-control mb-3" name="imagePath" placeholder="Image Path (URL or relative path)" value={inputs.imagePath} onChange={handleChange} required />
//               <div className="d-flex justify-content-between">
//                 <button type="submit" className="btn btn-success">Save</button>
//                 <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* Table Section */}
//         <div className="col-md-8">
//           <div className="bg-white p-4 shadow rounded-3">
//             <h4 className="text-center mb-4 text-primary fw-bold">Category List</h4>
//             <table className="table table-bordered table-hover text-center align-middle">
//               <thead className="table-dark text-white">
//                 <tr>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>Image</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {categories.length ? categories.map((cat) => (
//                   <tr key={cat.categoryId}>
//                     <td>{cat.categoryId}</td>
//                     <td>{cat.categoryName}</td>
//                     <td>
//                       <img src={cat.imagePath} alt={cat.categoryName} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px' }} />
//                     </td>
//                     <td>
//                       <button className="btn btn-sm btn-info me-2" onClick={() => handleEdit(cat)}>Update</button>
//                       <button className="btn btn-sm btn-danger" onClick={() => handleDelete(cat.categoryId)}>Delete</button>
//                     </td>
//                   </tr>
//                 )) : (
//                   <tr><td colSpan="4">No categories found</td></tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </AdminSidebarLayout>
//   );
// };

// export default AdminHome;

import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import AdminSidebarLayout from './AdminSidebarLayout';
import adminBg from '../assets/plate.jpg';
import './AdminHome.css'; 
import { useNavigate } from 'react-router-dom';


const AdminHome = ({ userEmail }) => {
  const [inputs, setInputs] = useState({
    categoryId: '',
    categoryName: '',
    imagePath: ''
  });

  const [categories, setCategories] = useState([]);
  const [editMode, setEditMode] = useState(false);
   const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      alert('Failed to load categories.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (category) => {
    setInputs(category);
    setEditMode(true);
  };

  const handleDelete = async (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await axiosInstance.delete(`/categories/${categoryId}`);
        fetchCategories();
      } catch (error) {
        console.error('Error deleting category:', error);
        alert('Failed to delete category.');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axiosInstance.put(`/categories/${inputs.categoryId}`, inputs);
      } else {
        await axiosInstance.post('/categories', inputs);
      }

      alert('Category saved successfully!');
      setInputs({ categoryId: '', categoryName: '', imagePath: '' });
      setEditMode(false);
      fetchCategories();
    } catch (error) {
      console.error('Error saving category:', error);
      alert('Error saving category');
    }
  };

  const handleReset = () => {
    setInputs({ categoryId: '', categoryName: '', imagePath: '' });
    setEditMode(false);
  };



// return (
//     <div
//       className="admin-home-wrapper"
//       style={{
//         backgroundImage: `url(${adminBg})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         margin: -25,
//         padding: '40px'
//       }}
//     >
//       <div className="container bg-light bg-opacity-75 p-5 rounded shadow-lg">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h2 className="text-primary fw-bold">📂 Category Management</h2>
//           <button className="btn btn-secondary" onClick={() => navigate('/admin/dashboard')}>
//             ⬅ Back to Dashboard
//           </button>
//         </div>

//         <div className="row">
//           {/* Form Section */}
//           <div className="col-md-4 mb-4">
//             <div className="bg-white bg-opacity-75 p-4 shadow rounded-3">
//               <h4 className="text-center mb-4 fw-bold" style={{ color: '#00056dd2' }}>
//                 Add / Update Category
//               </h4>

//               <form onSubmit={handleSubmit}>
//                 <input
//                   type="number"
//                   className="form-control mb-3"
//                   name="categoryId"
//                   placeholder="Category ID"
//                   value={inputs.categoryId}
//                   onChange={handleChange}
//                   required
//                   disabled={editMode}
//                 />
//                 <input
//                   type="text"
//                   className="form-control mb-3"
//                   name="categoryName"
//                   placeholder="Category Name"
//                   value={inputs.categoryName}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="text"
//                   className="form-control mb-3"
//                   name="imagePath"
//                   placeholder="Image Path (URL or relative path)"
//                   value={inputs.imagePath}
//                   onChange={handleChange}
//                   required
//                 />
//                 <div className="d-flex justify-content-between">
//                   <button type="submit" className="btn btn-success">Save</button>
//                   <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
//                 </div>
//               </form>
//             </div>
//           </div>

//           {/* Table Section */}
//           <div className="col-md-8">
//             <div className="bg-white bg-opacity-75 p-4 shadow rounded-3">
//               <h4 className="text-center mb-4 fw-bold" style={{ color: '#00056dd2' }}>
//                 Category List
//               </h4>

//               <table className="table table-bordered table-hover text-center align-middle">
//                 <thead className="table-dark text-white">
//                   <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Image</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {categories.length ? categories.map((cat) => (
//                     <tr key={cat.categoryId}>
//                       <td>{cat.categoryId}</td>
//                       <td>{cat.categoryName}</td>
//                       <td>
//                         <img
//                           src={cat.imagePath}
//                           alt={cat.categoryName}
//                           style={{
//                             width: '60px',
//                             height: '60px',
//                             objectFit: 'cover',
//                             borderRadius: '8px'
//                           }}
//                         />
//                       </td>
//                       <td>
//                         <button className="btn btn-sm btn-info me-2" onClick={() => handleEdit(cat)}>Update</button>
//                         <button className="btn btn-sm btn-danger" onClick={() => handleDelete(cat.categoryId)}>Delete</button>
//                       </td>
//                     </tr>
//                   )) : (
//                     <tr><td colSpan="4">No categories found</td></tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;
return (
    <div
      className="restaurant-body"
      style={{
        backgroundImage: `url(${adminBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        minHeight: '100vh',
        fontFamily: "'Segoe UI', sans-serif",
        paddingTop: '30px',
        paddingBottom: '30px',
      }}
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="text-white fw-bold display-5">Manage Categories</h1>
          <button className="back-button" onClick={() => navigate('/admin/dashboard')}>
            ⬅ Back to Dashboard
          </button>
        </div>

        <div className="row">
          {/* Form Section */}
          <div className="col-sm-5">
            <div className="card-container">
              <h3 className="fw-bold mb-4" style={{ color: '#faf3e6ff' }}>
                Add / Update Category
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    name="categoryId"
                    placeholder="Category ID"
                    value={inputs.categoryId}
                    onChange={handleChange}
                    required
                    disabled={editMode}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="categoryName"
                    placeholder="Category Name"
                    value={inputs.categoryName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="imagePath"
                    placeholder="Image URL or Path"
                    value={inputs.imagePath}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex gap-2">
                  <button type="submit" className="btn btn-success shadow">Save</button>
                  <button type="button" className="btn btn-secondary shadow" onClick={handleReset}>Reset</button>
                </div>
              </form>
            </div>
          </div>

          {/* Table Section */}
          <div className="col-sm-7">
            <div
                      className="p-4 rounded shadow"
                     style={{
                     backgroundColor: 'rgba(255, 255, 255, 0.19)', // semi-transparent
                      backdropFilter: 'blur(10px)',                 // blur effect
                      WebkitBackdropFilter: 'blur(10px)',           // Safari support
                      border: '1px solid rgba(255, 255, 255, 0.3)',  // subtle border
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',    // soft shadow
             }}
              >
              <h3 className="fw-bold mb-4 text-white">📋 Category List</h3>
              <table className="table table-striped table-hover table-bordered food-table">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.length ? (
                    categories.map((cat) => (
                      <tr key={cat.categoryId}>
                        <td>{cat.categoryId}</td>
                        <td>{cat.categoryName}</td>
                        <td>
                          <img
                            src={cat.imagePath}
                            alt={cat.categoryName}
                            style={{
                              width: '60px',
                              height: '60px',
                              objectFit: 'cover',
                              borderRadius: '8px',
                            }}
                          />
                        </td>
                        <td>
                          <button className="btn btn-warning btn-sm shadow me-2" onClick={() => handleEdit(cat)}>Update</button>
                          <button className="btn btn-danger btn-sm shadow" onClick={() => handleDelete(cat.categoryId)}>Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">No categories found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;