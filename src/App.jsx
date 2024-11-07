import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Destinations from './pages/Destinations';
// import StateDetails from './pages/StateDetails';
import BookTrip from './pages/BookTrip';
import { AuthProvider } from './context/AuthContext';
import StateDestination from './pages/stateDestinations';
import PlaceDetails from "./pages/PlaceDetails"; 
import StateDestinations from './pages/stateDestinations';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/destinations" element={<Destinations />} />
            {/* <Route path="/state/:stateId" element={<StateDetails />} /> */}
            <Route path="/state/:state" element={<StateDestinations />} />
        {/* <Route path="/place/:placeId" element={<PlaceDetails />} /> */}
            {/* <Route path="/place/:state/:name" element={<PlaceDetails />} /> */}
            {/* <Route path="/state/:state" element={<PlaceDetails />} /> */}
            <Route path="/state/:state/:name" element={<PlaceDetails />} />
            {/* <Route path="/destinations/:state" component={<PlaceDetails />} /> */}
            <Route path="/book/:name" element={<BookTrip />} />
          </Routes>
          <Toaster position="top-right" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;