// // StateDestinations.jsx
// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';

// function StateDestinations() {
//   const { state } = useParams(); // Get state name from URL
//   const [destinations, setDestinations] = useState([]);
//   const [destinationSearchQuery, setDestinationSearchQuery] = useState('');
//   const [filteredDestinations, setFilteredDestinations] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchDestinations(state);
//   }, [state]);

//   useEffect(() => {
//     setFilteredDestinations(
//       destinations.filter((dest) =>
//         dest.name.toLowerCase().includes(destinationSearchQuery.toLowerCase())
//       )
//     );
//   }, [destinations, destinationSearchQuery]);

//   const fetchDestinations = async (state) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:5000/api/destinations/state/${state}`);
//       setDestinations(response.data);
//     } catch (error) {
//       console.error('Error fetching destinations:', error);
//       setError('Failed to load destinations. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-4">Tourist Spots in {state}</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
      
//       <input
//         type="text"
//         placeholder="Search destinations..."
//         value={destinationSearchQuery}
//         onChange={(e) => setDestinationSearchQuery(e.target.value)}
//         className="mb-4 p-2 border border-gray-300 rounded"
//       />

//       {loading ? (
//         <p>Loading destinations...</p>
//       ) : (
//         <ul className="space-y-2">
//           {filteredDestinations.map((dest) => (
//             <li key={dest._id}>
//               <Link to={`/place/${dest._id}`} className="text-blue-600 hover:text-blue-800">
//                 {dest.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default StateDestinations;
// StateDestination.jsx
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// function StateDestinations() {
//   const { state } = useParams(); // Get state name from URL
//   const [destinations, setDestinations] = useState([]);
//   const [destinationSearchQuery, setDestinationSearchQuery] = useState('');
//   const [filteredDestinations, setFilteredDestinations] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [selectedPlace, setSelectedPlace] = useState(null); // State for selected place details

//   // Fetch destinations when component mounts or `state` changes
//   useEffect(() => {
//     fetchDestinations(state);
//   }, [state]);

//   // Filter destinations based on search query
//   useEffect(() => {
//     setFilteredDestinations(
//       destinations.filter((dest) =>
//         dest.name.toLowerCase().includes(destinationSearchQuery.toLowerCase())
//       )
//     );
//   }, [destinations, destinationSearchQuery]);

//   // Function to fetch destinations for the given state
//   const fetchDestinations = async (state) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:5000/api/destinations/state/${state}`);
//       console.log("API response:", response.data); // Debugging API response
//       setDestinations(response.data); // Set destinations from API response
//     } catch (error) {
//       console.error('Error fetching destinations:', error);
//       setError('Failed to load destinations. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Display loading or error messages if necessary
//   if (loading) return <div>Loading destinations...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-4">Tourist Spots in {state}</h1>
      
//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search destinations..."
//         value={destinationSearchQuery}
//         onChange={(e) => setDestinationSearchQuery(e.target.value)}
//         className="mb-4 p-2 border border-gray-300 rounded"
//       />

//       {/* No Destinations Message */}
//       {filteredDestinations.length === 0 ? (
//         <p>No tourist spots found for {state}.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredDestinations.map((dest) => (
//             <div
//               key={dest._id} // Use unique _id as key
//               className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
//               onClick={() => setSelectedPlace(dest)} // Set selected place on click
//             >
//               <img
//                 src={dest.images?.[0] || 'placeholder.jpg'} // Fallback to placeholder if no image is available
//                 alt={dest.name}
//                 className="w-full h-48 object-cover rounded-t-md mb-4"
//               />
//               <h2 className="text-xl font-semibold mb-2">{dest.name}</h2>
//               <p className="text-gray-700">{dest.description}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       Selected Place Details
//       {selectedPlace && (
//         <div className="mt-8">
//           <h1 className="text-3xl font-bold mb-6">{selectedPlace.name}</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               {/* About Section */}
//               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//                 <h2 className="text-xl font-semibold mb-4">About</h2>
//                 <p className="text-gray-700">{selectedPlace.description}</p>
//               </div>

//               {/* Popular Attractions Section */}
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h2 className="text-xl font-semibold mb-4">Popular Attractions</h2>
//                 <div className="space-y-4">
//                   {selectedPlace.attractions.map((attraction) => (
//                     <div key={attraction.id || attraction.name} className="border-b pb-4"> {/* Use unique ID or name as key */}
//                       <h3 className="font-medium">{attraction.name}</h3>
//                       <p className="text-gray-600">{attraction.description}</p>
//                       <p className="text-sm text-gray-500">Best time to visit: {attraction.bestTimeToVisit}</p>
//                       <p className="text-sm text-gray-500">Rating: {attraction.rating} ★</p>
//                       <p className="text-sm text-gray-500">Price: {attraction.priceRange}</p>
//                       <a
//                         href={attraction.googleMapLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-block"
//                     >
//                     <img
//                         src="https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309740_640.png" // Replace with the actual path to your logo
//                         alt="Google Maps Logo"
//                         className="h-6 w-6" // Adjust size as needed
//                     />
//                     </a>

//                       <button
//                         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-2"
//                         onClick={() => alert('Booking functionality is not implemented yet!')}
//                       >
//                         Book Now
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div>
//               {/* Location Section with Google Map */}
//               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//                 <h2 className="text-xl font-semibold mb-4">Location</h2>
//                 <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY_HERE"> {/* Replace with your actual API key */}
//                   <GoogleMap
//                     mapContainerClassName="w-full h-64 rounded-lg"
//                     center={{
//                       lat: selectedPlace.location.coordinates[1],
//                       lng: selectedPlace.location.coordinates[0]
//                     }}
//                     zoom={12}
//                   >
//                     <Marker
//                       position={{
//                         lat: selectedPlace.location.coordinates[1],
//                         lng: selectedPlace.location.coordinates[0]
//                       }}
//                     />
//                   </GoogleMap>
//                 </LoadScript>
//               </div>

//               Famous Hotels Section
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h2 className="text-xl font-semibold mb-4">Famous Hotels</h2>
//                 <div className="space-y-4">
//                   {selectedPlace.hotels.map((hotel) => (
//                     <div key={hotel.id || hotel.name} className="border-b pb-4"> {/* Use unique ID or name as key */}
//                       <h3 className="font-medium">{hotel.name}</h3>
//                       <p className="text-sm text-gray-500">Rating: {hotel.rating} ★</p>
//                       <p className="text-sm text-gray-500">Price Range: {hotel.priceRange}</p>
//                       <p className="text-sm text-gray-500">Contact: {hotel.contact}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Navigate Back Button */}
//           <button
//             className="mt-4 text-blue-600 hover:text-blue-800"
//             onClick={() => setSelectedPlace(null)} // Deselect the place
//           >
//             Back to Destinations
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StateDestinations;
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// function StateDestinations() {
//   const { state } = useParams(); // Get state name from URL
//   const [destinations, setDestinations] = useState([]);
//   const [destinationSearchQuery, setDestinationSearchQuery] = useState('');
//   const [filteredDestinations, setFilteredDestinations] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [selectedPlace, setSelectedPlace] = useState(null); // State for selected place details

//   // Fetch destinations when component mounts or state changes
//   useEffect(() => {
//     fetchDestinations(state);
//   }, [state]);

//   // Filter destinations based on search query
//   useEffect(() => {
//     setFilteredDestinations(
//       destinations.filter((dest) =>
//         dest.name.toLowerCase().includes(destinationSearchQuery.toLowerCase())
//       )
//     );
//   }, [destinations, destinationSearchQuery]);

//   // Function to fetch destinations for the given state
//   const fetchDestinations = async (state) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:5000/api/destinations/state/${state}`);
//       console.log("API response:", response.data); // Debugging API response
//       setDestinations(response.data); // Set destinations from API response
//     } catch (error) {
//       console.error('Error fetching destinations:', error);
//       setError('Failed to load destinations. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Display loading or error messages if necessary
//   if (loading) return <div>Loading destinations...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-4">Tourist Spots in {state}</h1>
      
//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search destinations..."
//         value={destinationSearchQuery}
//         onChange={(e) => setDestinationSearchQuery(e.target.value)}
//         className="mb-4 p-2 border border-gray-300 rounded"
//       />

//       {/* No Destinations Message */}
//       {filteredDestinations.length === 0 ? (
//         <p>No tourist spots found for {state}.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredDestinations.map((dest) => (
//             <div
//               key={dest._id} // Use unique _id as key
//               className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
//               onClick={() => setSelectedPlace(dest)} // Set selected place on click
//             >
//               <img
//                 src={dest.images?.[0] || 'placeholder.jpg'} // Fallback to placeholder if no image is available
//                 alt={dest.name}
//                 className="w-full h-48 object-cover rounded-t-md mb-4"
//               />
//               <h2 className="text-xl font-semibold mb-2">{dest.name}</h2>
//               <p className="text-gray-700">{dest.description}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Selected Place Details */}
//       {selectedPlace && (
//         <div className="mt-8">
//           <h1 className="text-3xl font-bold mb-6">{selectedPlace.name}</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               {/* About Section */}
//               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//                 <h2 className="text-xl font-semibold mb-4">About</h2>
//                 <p className="text-gray-700">{selectedPlace.description}</p>
//               </div>

//               {/* Popular Attractions Section */}
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h2 className="text-xl font-semibold mb-4">Popular Attractions</h2>
//                 <div className="space-y-4">
//                   {selectedPlace.attractions.map((attraction) => (
//                     <div key={attraction.id || attraction.name} className="border-b pb-4"> {/* Use unique ID or name as key */}
//                       <h3 className="font-medium">{attraction.name}</h3>
//                       <p className="text-gray-600">{attraction.description}</p>
//                       <p className="text-sm text-gray-500">Best time to visit: {attraction.bestTimeToVisit}</p>
//                       <p className="text-sm text-gray-500">Rating: {attraction.rating} ★</p>
//                       <p className="text-sm text-gray-500">Price: {attraction.priceRange}</p>
//                       <a
//                         href={attraction.googleMapLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-block"
//                     >
//                     <img
//                         src="https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309740_640.png" // Replace with the actual path to your logo
//                         alt="Google Maps Logo"
//                         className="h-6 w-6" // Adjust size as needed
//                     />
//                     </a>

//                       <button
//                         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-2"
//                         onClick={() => alert('Booking functionality is not implemented yet!')}
//                       >
//                         Book Now
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div>
//               {/* Location Section with Google Map */}
//               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//                 <h2 className="text-xl font-semibold mb-4">Location</h2>
//                 <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY_HERE"> {/* Replace with your actual API key */}
//                   <GoogleMap
//                     mapContainerClassName="w-full h-64 rounded-lg"
//                     center={{
//                       lat: selectedPlace.location.coordinates[1],
//                       lng: selectedPlace.location.coordinates[0]
//                     }}
//                     zoom={12}
//                   >
//                     <Marker
//                       position={{
//                         lat: selectedPlace.location.coordinates[1],
//                         lng: selectedPlace.location.coordinates[0]
//                       }}
//                     />
//                   </GoogleMap>
//                 </LoadScript>
//               </div>

//               {/* Famous Hotels Section */}
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h2 className="text-xl font-semibold mb-4">Famous Hotels</h2>
//                 <div className="space-y-4">
//                   {selectedPlace.hotels.map((hotel) => (
//                     <div key={hotel.id || hotel.name} className="border-b pb-4"> {/* Use unique ID or name as key */}
//                       <h3 className="font-medium">{hotel.name}</h3>
//                       <p className="text-sm text-gray-500">Rating: {hotel.rating} ★</p>
//                       <p className="text-sm text-gray-500">Price Range: {hotel.priceRange}</p>
//                       <p className="text-sm text-gray-500">Contact: {hotel.contact}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Navigate Back Button */}
//           <button
//             className="mt-4 text-blue-600 hover:text-blue-800"
//             onClick={() => setSelectedPlace(null)} // Deselect the place
//           >
//             Back to Destinations
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StateDestinations;

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function StateDestinations() {
  const { state } = useParams(); // Get state name from URL
  const [destinations, setDestinations] = useState([]);
  const [destinationSearchQuery, setDestinationSearchQuery] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch destinations when component mounts or `state` changes
  useEffect(() => {
    fetchDestinations(state);
  }, [state]);

  // Filter destinations based on search query
  useEffect(() => {
    setFilteredDestinations(
      destinations.filter((dest) =>
        dest.name.toLowerCase().includes(destinationSearchQuery.toLowerCase())
      )
    );
  }, [destinations, destinationSearchQuery]);

  // Function to fetch destinations for the given state
  const fetchDestinations = async (state) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/destinations/state/${state}`);
      setDestinations(response.data); // Set destinations from API response
    } catch (error) {
      console.error('Error fetching destinations:', error);
      setError('Failed to load destinations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Display loading or error messages if necessary
  if (loading) return <div>Loading destinations...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Tourist Spots in {state}</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search destinations..."
        value={destinationSearchQuery}
        onChange={(e) => setDestinationSearchQuery(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      {/* No Destinations Message */}
      {filteredDestinations.length === 0 ? (
        <p>No tourist spots found for {state}.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest) => (
            <Link
            to={`/state/${state}/${dest.name}`} // Link to PlaceDetails page
              key={dest._id} // Use unique _id as key
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={dest.images?.[0] || 'placeholder.jpg'} // Fallback to placeholder if no image is available
                alt={dest.name}
                className="w-full h-48 object-cover rounded-t-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{dest.name}</h2>
              {/* <p className="text-gray-700">{dest.description}</p> */}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default StateDestinations;
