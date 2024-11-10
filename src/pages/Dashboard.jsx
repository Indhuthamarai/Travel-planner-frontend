import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';

function Dashboard() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/bookings/my-bookings');
      setBookings(response.data);
    } catch (error) {
      toast.error('Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    try {
      await axios.patch(`http://localhost:5000/api/bookings/${bookingId}/cancel`);
      toast.success('Booking cancelled successfully');
      fetchBookings();
    } catch (error) {
      toast.error('Failed to cancel booking');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome, {user?.name}!</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
        {bookings.length === 0 ? (
          <p className="text-gray-600">No bookings found.</p>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="border-b pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{booking.destination}</h3>
                    <p className="text-sm text-gray-600">
                      {new Date(booking.startDate).toLocaleDateString()} - 
                      {new Date(booking.endDate).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      {booking.numberOfPeople} people • {booking.transportMode}
                    </p>
                    <p className="text-sm font-medium mt-1">
                      Total: ₹{booking.totalPrice}
                    </p>
                  </div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                    {booking.status === 'confirmed' && (
                      <button
                        onClick={() => handleCancelBooking(booking._id)}
                        className="block mt-2 text-sm text-red-600 hover:text-red-800"
                      >
                        Cancel Booking
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;



// import { useState, useEffect } from 'react';
// import { useAuth } from '../context/AuthContext';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// function Dashboard() {
//   const { user } = useAuth();
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/bookings/my-bookings');
//       setBookings(response.data);
//     } catch (error) {
//       toast.error('Failed to fetch bookings');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCancelBooking = async (bookingId) => {
//     try {
//       await axios.patch(`http://localhost:5000/api/bookings/${bookingId}/cancel`);
//       toast.success('Booking cancelled successfully');
//       fetchBookings();
//     } catch (error) {
//       toast.error('Failed to cancel booking');
//     }
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Welcome, {user?.name}!</h1>
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
//         {bookings.length === 0 ? (
//           <p className="text-gray-600">No bookings found.</p>
//         ) : (
//           <div className="space-y-4">
//             {bookings.map((booking) => (
//               <div key={booking._id} className="border-b pb-4 last:border-b-0 last:pb-0">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="font-medium">{booking.destination}</h3>
//                     <p className="text-sm text-gray-600">
//                       {new Date(booking.startDate).toLocaleDateString()} - 
//                       {new Date(booking.endDate).toLocaleDateString()}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       {booking.numberOfPeople} people • {booking.transportMode}
//                     </p>
//                     <p className="text-sm font-medium mt-1">
//                       Total: ₹{booking.totalPrice}
//                     </p>
//                   </div>
//                   <div>
//                     <span className={`px-2 py-1 rounded-full text-xs ${
//                       booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
//                       booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
//                       'bg-yellow-100 text-yellow-800'
//                     }`}>
//                       {booking.status}
//                     </span>
//                     {booking.status === 'confirmed' && (
//                       <button
//                         onClick={() => handleCancelBooking(booking._id)}
//                         className="block mt-2 text-sm text-red-600 hover:text-red-800"
//                       >
//                         Cancel Booking
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
