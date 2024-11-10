// export default PlaceDetails;
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import axios from 'axios';

// function PlaceDetails() {
//   const { placeId } = useParams(); // Get placeId from URL parameters
//   const navigate = useNavigate(); // For navigation
//   const [place, setPlace] = useState(null); // State for the place details
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(''); // Error state

//   // Fetch place details on component mount or when placeId changes
//   useEffect(() => {
//     fetchPlaceDetails();
//   }, [placeId]);

//   // Function to fetch place details from the API
//   const fetchPlaceDetails = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/destinations/${placeId}`);
//       setPlace(response.data); // Set place data from response
//     } catch (error) {
//       console.error('Error fetching place details:', error);
//       setError('Failed to load place details. Please try again.'); // Set error message
//     } finally {
//       setLoading(false); // Set loading to false after fetch
//     }
//   };

//   // Display loading or error messages if necessary
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!place) return <div>Place not found</div>; // Check if place exists

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">{place.name}</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <h2 className="text-xl font-semibold mb-4">About</h2>
//             <p className="text-gray-700">{place.description}</p>
//           </div>

//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-4">Popular Attractions</h2>
//             <div className="space-y-4">
//               {place.attractions.map((attraction, index) => (
//                 <div key={index} className="border-b pb-4">
//                   <h3 className="font-medium">{attraction.name}</h3>
//                   <p className="text-gray-600">{attraction.description}</p>
//                   <p className="text-sm text-gray-500">Best time to visit: {attraction.bestTimeToVisit}</p>
//                   <p className="text-sm text-gray-500">Rating: {attraction.rating} ★</p>
//                   <p className="text-sm text-gray-500">Price: {attraction.priceRange}</p>
//                   <a
//                     href={attraction.googleMapLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 hover:underline"
//                   >
//                     View on Google Maps
//                   </a>
//                   <button
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-2"
//                     onClick={() => alert('Booking functionality is not implemented yet!')}
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <h2 className="text-xl font-semibold mb-4">Location</h2>
//             <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
//               <GoogleMap
//                 mapContainerClassName="w-full h-64 rounded-lg"
//                 center={{
//                   lat: place.location.coordinates[1],
//                   lng: place.location.coordinates[0]
//                 }}
//                 zoom={12}
//               >
//                 <Marker
//                   position={{
//                     lat: place.location.coordinates[1],
//                     lng: place.location.coordinates[0]
//                   }}
//                 />
//               </GoogleMap>
//             </LoadScript>
//           </div>

//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-4">Famous Hotels</h2>
//             <div className="space-y-4">
//               {place.hotels.map((hotel, index) => (
//                 <div key={index} className="border-b pb-4">
//                   <h3 className="font-medium">{hotel.name}</h3>
//                   <p className="text-sm text-gray-500">Rating: {hotel.rating} ★</p>
//                   <p className="text-sm text-gray-500">Price Range: {hotel.priceRange}</p>
//                   <p className="text-sm text-gray-500">Contact: {hotel.contact}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <button
//         className="mt-4 text-blue-600 hover:text-blue-800"
//         onClick={() => navigate(-1)} // Navigate back to the previous page
//       >
//         Back to Destinations
//       </button>
//     </div>
//   );
// }

// export default PlaceDetails;

// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// function PlaceDetails() {
//   const { state } = useParams();
//   const [place, setPlace] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchPlaceDetails(state);
//   }, [state]);

//   const fetchPlaceDetails = async (stateName) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:5000/api/destinations/state/${state}`);
//       console.log("API response:", response.data); // Debugging API response
//       setPlace(response.data);
//     } catch (error) {
//       console.error('Error fetching place details:', error);
//       setError('Failed to load place details. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <div>Loading place details...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div className="mt-8 p-4">
//       <h1 className="text-3xl font-bold mb-6">{place?.name}</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           {/* About Section */}
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <h2 className="text-xl font-semibold mb-4">About</h2>
//             <p className="text-gray-700">{place?.description}</p>
//           </div>

//           {/* Popular Attractions Section */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-4">Popular Attractions</h2>
//             <div className="space-y-4">
//               {place?.attractions?.map((attraction) => (
//                 <div key={attraction.id || attraction.name} className="border-b pb-4">
//                   <h3 className="font-medium">{attraction.name}</h3>
//                   <p className="text-gray-600">{attraction.description}</p>
//                   <p className="text-sm text-gray-500">Best time to visit: {attraction.bestTimeToVisit}</p>
//                   <p className="text-sm text-gray-500">Rating: {attraction.rating} ★</p>
//                   <p className="text-sm text-gray-500">Price: {attraction.priceRange}</p>
//                   <a
//                     href={attraction.googleMapLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block"
//                   >
//                     <img
//                       src="https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309740_640.png"
//                       alt="Google Maps Logo"
//                       className="h-6 w-6"
//                     />
//                   </a>
//                   <button
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-2"
//                     onClick={() => alert('Booking functionality is not implemented yet!')}
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div>
//           {/* Location Section with Google Map */}
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <h2 className="text-xl font-semibold mb-4">Location</h2>
//             {place?.location?.coordinates && (
//               <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY_HERE">
//                 <GoogleMap
//                   mapContainerClassName="w-full h-64 rounded-lg"
//                   center={{
//                     lat: place.location.coordinates[1],
//                     lng: place.location.coordinates[0],
//                   }}
//                   zoom={12}
//                 >
//                   <Marker
//                     position={{
//                       lat: place.location.coordinates[1],
//                       lng: place.location.coordinates[0],
//                     }}
//                   />
//                 </GoogleMap>
//               </LoadScript>
//             )}
//           </div>

//           {/* Famous Hotels Section */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-4">Famous Hotels</h2>
//             <div className="space-y-4">
//               {place?.hotels?.map((hotel) => (
//                 <div key={hotel.id || hotel.name} className="border-b pb-4">
//                   <h3 className="font-medium">{hotel.name}</h3>
//                   <p className="text-sm text-gray-500">Rating: {hotel.rating} ★</p>
//                   <p className="text-sm text-gray-500">Price Range: {hotel.priceRange}</p>
//                   <p className="text-sm text-gray-500">Contact: {hotel.contact}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigate Back Button */}
//       <button
//         className="mt-4 text-blue-600 hover:text-blue-800"
//         onClick={() => navigate(-1)}
//       >
//         Back to Destinations
//       </button>
//     </div>
//   );
// }

// export default PlaceDetails;
// import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const API_KEY = 'fceef314925ca55ebbc4407afc8d3717'; // Replace with your actual weather API key

// StarRating Component to display stars based on decimal rating
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-500 h-5 w-5" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500 h-5 w-5" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} className="text-gray-300 h-5 w-5" />
      ))}
      <span className="text-gray-600 ml-2">{rating.toFixed(1)}</span>
    </div>
  );
};

function PlaceDetails() {
  const { state, name } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [weather, setWeather] = useState(null); // State for weather data

  useEffect(() => {
    fetchDestination(state, name);
    fetchWeather(name); // Fetch weather when component mounts
  }, [state, name]);

  const fetchDestination = async (state, name) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/destinations/state/${state}/${name}`);
      setDestination(response.data);
    } catch (error) {
      console.error('Error fetching destination:', error);
      setError('Failed to load destination. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // const fetchWeather = async (name) => {
  //   try {
  //     const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
  //       params: {
  //         q: name,
  //         units: 'metric', // Use metric units (Celsius)
  //         appid: API_KEY,
  //       },
  //     });
  //     console.log('Weather data:', weatherResponse.data);
  //     setWeather(weatherResponse.data);
  //   } catch (error) {
  //     console.error('Error fetching weather:', error);
  //     setWeather(null); // Set weather to null if fetching fails
  //     toast.error('Unable to retrieve weather data. Please check the API key or try again later.');
  //   }
  // };

  const fetchWeather = async (name) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`;
    try {
      const weatherResponse = await fetch(url);
      const weatherData = await weatherResponse.json();
      // console.log('Weather Response:', weatherData);

      if (weatherData.cod === 200) {
        setWeather(weatherData); // Set weather data if request is successful
      } else {
        console.error('Error fetching weather:', weatherData);
        toast.error('Unable to retrieve weather data.');
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
      toast.error('Unable to retrieve weather data. Please try again later.');
    }
  };

  const handleBookNowClick = (name) => {
    if (!user) {
      toast.error("Please log in to book a trip");
      navigate('/login');
      return;
    }
    navigate(`/book/${name}`);
  };

  if (loading) return <div>Loading destination...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {destination && (
        <>
          <h1 className="text-3xl font-bold mb-4">Details for {destination.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Destination Info Section */}
              <div className="bg-white rounded-lg shadow-md p-5 mb-7">
                <h2 className="text-xl font-semibold mb-2">{destination.name}</h2>
                <img
                  src={destination.images?.[0] || 'placeholder.jpg'}
                  alt={destination.name}
                  className="w-full h-48 object-cover rounded-t-md mb-4"
                />
                <p className="text-gray-700 mb-4">{destination.description}</p>
                
                <div className="flex justify-between items-center">
                  {/* Book Now Button */}
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    onClick={() => handleBookNowClick(destination.name)}
                  >
                    Book Now
                  </button>

                  {/* Google Maps Link */}
                  <a
                    href={destination.googleMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309740_640.png"
                      alt="Google Maps Logo"
                      className="h-6 w-6"
                    />
                    <span className="text-lg">View on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Attractions Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Popular Attractions</h2>
                <div className="space-y-4">
                  {destination.attractions.map((attraction, index) => (
                    <div key={index} className="border-b pb-4">
                      <h3 className="font-medium">{attraction.name}</h3>
                      <p className="text-gray-600">{attraction.description}</p>
                      <p className="text-sm text-gray-500">Best time to visit: {attraction.bestTimeToVisit}</p>
                      <StarRating rating={attraction.rating} />
                      <p className="text-sm text-gray-500">Price: {attraction.priceRange}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hotels Section */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Famous Hotels</h2>
                <div className="space-y-4">
                  {destination.hotels.map((hotel, index) => (
                    <div key={index} className="border-b pb-4">
                      <h3 className="font-medium">{hotel.name}</h3>
                      <StarRating rating={hotel.rating} />
                      <p className="text-sm text-gray-500">Price Range: {hotel.priceRange}</p>
                      <p className="text-sm text-gray-500">Contact: {hotel.contact}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Weather Section (Below Famous Hotels) */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Current Weather</h2>
            {weather ? (
              <div className="space-y-2">
                <p>Temperature: {weather.main?.temp ? `${weather.main.temp}°C` : 'N/A'}</p>
                <p>Condition: {weather.weather?.[0]?.description || 'N/A'}</p>
                <p>Humidity: {weather.main?.humidity || 'N/A'}%</p>
                <p>Wind Speed: {weather.wind?.speed || 'N/A'} m/s</p>
                <p>Cloud Coverage: {weather.clouds?.all ? `${weather.clouds.all}%` : 'N/A'}</p>
              </div>
            ) : (
              <p>Weather data not available.</p>
            )}
          </div>
            </div>
            
          </div>

          

          {/* Back Button */}
          <button
            className="mt-4 text-blue-600 hover:text-blue-800"
            onClick={() => window.history.back()}
          >
            Back to Destinations
          </button>
        </>
      )}
    </div>
  );
}

export default PlaceDetails;
