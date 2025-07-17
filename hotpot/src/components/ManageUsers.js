import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import adminBg from '../assets/adminbg.jpg';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const res = await axiosInstance.get('/users');
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (email) => {
    if (window.confirm(`Delete user ${email}?`)) {
      try {
        await axiosInstance.delete(`/users/${email}`);
        alert('User deleted');
        fetchUsers();
      } catch (err) {
        console.error('Error deleting user:', err);
        alert('Failed to delete user');
      }
    }
  };

  const handleRoleChange = async (email, newRole) => {
    try {
      await axiosInstance.put(`/users/${email}/role`, { role: newRole });
      alert('Role updated');
      fetchUsers();
    } catch (err) {
      console.error('Error updating role:', err);
      alert('Failed to update role');
    }
  };

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

          <button className="btn btn-secondary" onClick={() => navigate('/admin/dashboard')}>
            ⬅ Back to Dashboard
          </button>
        </div>

        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Email</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Name</th>
              
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.email}>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.gender}</td>
                  <td>{user.name}</td>
                  
                  <td>{user.phone}</td>
                  <td>
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.email, e.target.value)}
                      className="form-select"
                    >
                      <option value="Customer">Customer</option>
                      <option value="restaurantowner">Restaurant Owner</option>
                      <option value="ADMIN">Admin</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user.email)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
