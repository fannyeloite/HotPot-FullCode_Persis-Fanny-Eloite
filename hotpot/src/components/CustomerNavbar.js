import { FaHome, FaInfoCircle, FaShoppingCart, FaBoxOpen, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CustomerNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 999,
      backgroundColor: '#000',
      color: '#fff',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Segoe UI'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>HOTPOT</div>
      <div style={{ display: 'flex', gap: '25px', fontSize: '1rem' }}>
        <span onClick={() => navigate('/select-category')} style={{ cursor: 'pointer' }}><FaHome /> Home</span>
        <span onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}><FaInfoCircle /> About</span>
        <span onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}><FaShoppingCart /> Cart</span>
        <span onClick={() => navigate('/orders')} style={{ cursor: 'pointer' }}><FaBoxOpen /> Orders</span>
        <span onClick={handleLogout} style={{ cursor: 'pointer', color: '#ffc107', fontWeight: 'bold' }}>
          <FaSignOutAlt /> Logout
        </span>
      </div>
    </nav>
  );
};

export default CustomerNavbar;
