import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Discover the Beauty of</span>
            <span className="block text-blue-600">Incredible India</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explore the diverse landscapes, rich culture, and historical wonders across India's magnificent states.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/destinations"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Start Exploring
              </Link>
            </div>
            {/* Conditionally render Sign Up link */}
            {!isLoggedIn && (
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/register"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Sign Up Now
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Destinations</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Featured destinations */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://cdn.pixabay.com/photo/2020/06/05/21/09/cultural-tourism-5264542_1280.jpg"
                alt="Taj Mahal"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Taj Mahal</h3>
                <p className="mt-2 text-gray-600">
                  One of the world's most iconic monuments, symbolizing eternal love.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://cdn.pixabay.com/photo/2017/10/04/17/51/alleppey-2817032_640.jpg"
                alt="Kerala Backwaters"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Kerala Backwaters</h3>
                <p className="mt-2 text-gray-600">
                  Serene waterways surrounded by lush greenery and traditional houseboats.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://cdn.pixabay.com/photo/2022/07/13/15/25/ganges-7319480_640.jpg"
                alt="Varanasi"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Varanasi</h3>
                <p className="mt-2 text-gray-600">
                  The spiritual capital of India, where tradition meets eternity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
