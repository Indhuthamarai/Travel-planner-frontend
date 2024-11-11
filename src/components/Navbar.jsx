import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); 
      navigate('/');  
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
            India Travel Planner
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/destinations" className="text-gray-700 hover:text-blue-600">
              Destinations
            </Link>
            
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
                  Dashboard
                </Link>
                <Link
              to="/About"
              className="text-gray-700 hover:text-blue-600"
            >About Us
            </Link>
            <Link
              to="/Contact"
              className="text-gray-700 hover:text-blue-600"
            >Contact Us
            </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-blue-600" 
                >Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-gray-700 hover:text-blue-600"
                >Sign Up
                </Link>
              <Link
              to="/About"
              className="text-gray-700 hover:text-blue-600"
            >About Us
            </Link>
            <Link
              to="/Contact"
              className="text-gray-700 hover:text-blue-600"
            >Contact Us
            </Link>
            </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;