// import { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import axios from 'axios';
// import toast from 'react-hot-toast';

// function BookTrip() {
//   const { name } = useParams();
//   // console.log('Destination ID:', destinationId);
//   const navigate = useNavigate();
//   const { user } = useAuth();
  
//   const [formData, setFormData] = useState({
//     startDate: null,
//     endDate: null,
//     tripType: 'family',
//     adults: 1,
//     children: 0,
//     transportMode: 'bus'
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.startDate || !formData.endDate) {
//       return toast.error('Please select both start and end dates');
//     }

//     try {
//       await axios.post('http://localhost:5000/api/bookings', {
//         destination: name,
//         ...formData,
//         totalPrice: calculatePrice()
//       });
      
//       toast.success('Trip booked successfully!');
//       navigate('/dashboard');
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Booking failed');
//     }
//   };

//   const calculatePrice = () => {
//     const days = Math.ceil(
//       (formData.endDate - formData.startDate) / (1000 * 60 * 60 * 24)
//     );
//     const basePrice = 2000;
//     const transportCost = formData.transportMode === 'train' ? 1500 : 1000;

//     return (basePrice * days * (formData.adults + formData.children * 0.5)) + transportCost;
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-2xl font-bold mb-6">Book Your Trip</h1>
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Start Date */}
//           <div>
//             <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
//             <DatePicker
//               selected={formData.startDate}
//               onChange={(date) => setFormData({ ...formData, startDate: date })}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               dateFormat="yyyy/MM/dd"
//             />
//           </div>

//           {/* End Date */}
//           <div>
//             <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
//             <DatePicker
//               selected={formData.endDate}
//               onChange={(date) => setFormData({ ...formData, endDate: date })}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               dateFormat="yyyy/MM/dd"
//             />
//           </div>

//           {/* Trip Type */}
//           <div>
//             <label htmlFor="tripType" className="block text-sm font-medium text-gray-700">Trip Type</label>
//             <select
//               id="tripType"
//               value={formData.tripType}
//               onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option value="family">Family</option>
//               <option value="friends">Friends</option>
//               <option value="solo">Solo</option>
//             </select>
//           </div>

//           {/* Adults */}
//           <div>
//             <label htmlFor="adults" className="block text-sm font-medium text-gray-700">Adults</label>
//             <input
//               type="number"
//               id="adults"
//               value={formData.adults}
//               onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               min="1"
//             />
//           </div>

//           {/* Children */}
//           <div>
//             <label htmlFor="children" className="block text-sm font-medium text-gray-700">Children</label>
//             <input
//               type="number"
//               id="children"
//               value={formData.children}
//               onChange={(e) => setFormData({ ...formData, children: e.target.value })}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               min="0"
//             />
//           </div>

//           {/* Transport Mode */}
//           <div>
//             <label htmlFor="transportMode" className="block text-sm font-medium text-gray-700">Transport Mode</label>
//             <select
//               id="transportMode"
//               value={formData.transportMode}
//               onChange={(e) => setFormData({ ...formData, transportMode: e.target.value })}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option value="bus">Bus</option>
//               <option value="train">Train</option>
//               <option value="plane">Plane</option>
//             </select>
//           </div>

//           {/* Estimated Price */}
//           {formData.startDate && formData.endDate && (
//             <div className="bg-gray-50 p-4 rounded-md">
//               <h3 className="font-medium mb-2">Estimated Price</h3>
//               <p className="text-2xl font-bold">₹{calculatePrice()}</p>
//             </div>
//           )}

//           <button 
//             type="submit" 
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
//           >
//             Book Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default BookTrip;
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

function BookTrip() {
  const { name } = useParams(); // Destination name from URL
  const navigate = useNavigate();
  const { user } = useAuth(); // Auth context to get logged-in user

  const [formData, setFormData] = useState({
    startDate: null,
    endDate: null,
    tripType: 'family',
    adults: 1,
    children: 0,
    transportMode: 'bus',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for startDate and endDate
    if (!formData.startDate || !formData.endDate) {
      alert('Please select both start and end dates');
      return;
    }

    // Validation for endDate being after startDate
    if (formData.endDate <= formData.startDate) {
      alert('End date should be after the start date');
      return;
    }

    try {
      const token = localStorage.getItem('token'); // Retrieve token from storage
      if (!token) throw new Error("Authorization token not found.");
      
      const destination = name; // Destination name from URL

      const totalPrice = calculatePrice(); // Assuming 'calculatePrice' is your function
      
      const requestBody = {
        destination: destination,
        ...formData,
        totalPrice: totalPrice
      };

      // Send the POST request with token in the headers and the body data
      const response = await axios.post('http://localhost:5000/api/bookings', requestBody, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in the request headers
        },
      });

      console.log('Booking successful:', response.data);
      alert('Booking successful!');
      navigate('/dashboard'); // Redirect after successful booking
    } catch (error) {
      console.log('Error response:', error.response);
      if (error.response && error.response.status === 401) {
        alert("Authorization error: Please log in again.");
      } else {
        alert("Booking failed. Please try again.");
        console.log(error);
      }
    }
  };

  const calculatePrice = () => {
    const days = Math.ceil(
      (formData.endDate - formData.startDate) / (1000 * 60 * 60 * 24)
    );
    const basePrice = 2000;
    const transportCost = formData.transportMode === 'train' ? 1500 : 1000;

    return (basePrice * days * (formData.adults + formData.children * 0.5)) + transportCost;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Book Your Trip</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Start Date */}
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
            <DatePicker
              selected={formData.startDate}
              onChange={(date) => setFormData({ ...formData, startDate: date })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              dateFormat="yyyy/MM/dd"
            />
          </div>

          {/* End Date */}
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
            <DatePicker
              selected={formData.endDate}
              onChange={(date) => setFormData({ ...formData, endDate: date })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              dateFormat="yyyy/MM/dd"
            />
          </div>

          {/* Trip Type */}
          <div>
            <label htmlFor="tripType" className="block text-sm font-medium text-gray-700">Trip Type</label>
            <select
              id="tripType"
              value={formData.tripType}
              onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="family">Family</option>
              <option value="friends">Friends</option>
              <option value="solo">Solo</option>
            </select>
          </div>

          {/* Adults */}
          <div>
            <label htmlFor="adults" className="block text-sm font-medium text-gray-700">Adults</label>
            <input
              type="number"
              id="adults"
              value={formData.adults}
              onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              min="1"
            />
          </div>

          {/* Children */}
          <div>
            <label htmlFor="children" className="block text-sm font-medium text-gray-700">Children</label>
            <input
              type="number"
              id="children"
              value={formData.children}
              onChange={(e) => setFormData({ ...formData, children: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              min="0"
            />
          </div>

          {/* Transport Mode */}
          <div>
            <label htmlFor="transportMode" className="block text-sm font-medium text-gray-700">Transport Mode</label>
            <select
              id="transportMode"
              value={formData.transportMode}
              onChange={(e) => setFormData({ ...formData, transportMode: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="bus">Bus</option>
              <option value="train">Train</option>
              <option value="plane">Plane</option>
            </select>
          </div>

          {/* Estimated Price */}
          {formData.startDate && formData.endDate && (
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Estimated Price</h3>
              <p className="text-2xl font-bold">₹{calculatePrice()}</p>
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookTrip;
