// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function Destinations() {
//   const [states, setStates] = useState([]);
//   const [selectedState, setSelectedState] = useState(null);
//   const [destinations, setDestinations] = useState([]);
//   const [stateSearchQuery, setStateSearchQuery] = useState(''); // State for searching states
//   const [filteredStates, setFilteredStates] = useState([]); // State for filtered states
//   const [destinationSearchQuery, setDestinationSearchQuery] = useState(''); // State for searching destinations
//   const [filteredDestinations, setFilteredDestinations] = useState([]); // State for filtered destinations

//   useEffect(() => {
//     fetchStates();
//   }, []);

//   useEffect(() => {
//     // Update filtered states based on the search query
//     setFilteredStates(
//       states.filter((state) =>
//         state.state.toLowerCase().includes(stateSearchQuery.toLowerCase())
//       )
//     );
//   }, [states, stateSearchQuery]);

//   useEffect(() => {
//     // Update filtered destinations whenever the destinations or destinationSearchQuery changes
//     setFilteredDestinations(
//       destinations.filter((dest) =>
//         dest.name.toLowerCase().includes(destinationSearchQuery.toLowerCase())
//       )
//     );
//   }, [destinations, destinationSearchQuery]);

//   const fetchStates = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/states'); // Adjust to your endpoint
//       setStates(response.data);
//       setFilteredStates(response.data); // Initialize filteredStates with all states
//     } catch (error) {
//       console.error('Error fetching states:', error);
//     }
//   };

//   const fetchDestinations = async (state) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/destinations/state/${state}`);
//       setDestinations(response.data);
//       setSelectedState(state); // Set the selected state to display its attractions
//       setDestinationSearchQuery(''); // Reset destination search query when fetching new destinations
//     } catch (error) {
//       console.error('Error fetching destinations:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Explore Indian States</h1>

//       {/* Search Input for States */}
//       <input
//         type="text"
//         placeholder="Search states..."
//         value={stateSearchQuery}
//         onChange={(e) => setStateSearchQuery(e.target.value)}
//         className="mb-4 p-2 border border-gray-300 rounded"
//       />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {filteredStates.map((state) => (
//           <div
//             key={state.state}
//             className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => fetchDestinations(state.state)}
//           >
//             <img 
//               src={state.image} 
//               alt={state.state} 
//               className="w-full h-32 object-cover rounded-t-md mb-4" // Image for each state
//             />
//             <h2 className="text-xl font-semibold">{state.state}</h2>
//           </div>
//         ))}
//       </div>

//       {selectedState && destinations.length > 0 && (
//         <div className="mt-8">
//           <h3 className="text-lg font-medium mb-2">Famous Tourist Spots in {selectedState}:</h3>
          
//           {/* Search Input for Destinations */}
//           <input
//             type="text"
//             placeholder="Search destinations..."
//             value={destinationSearchQuery}
//             onChange={(e) => setDestinationSearchQuery(e.target.value)}
//             className="mb-4 p-2 border border-gray-300 rounded"
//           />

//           <ul className="space-y-2">
//             {filteredDestinations.map((dest) => (
//               <li key={dest._id}>
//                 <Link
//                   to={`/place/${dest._id}`}
//                   className="text-blue-600 hover:text-blue-800"
//                 >
//                   {dest.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Destinations;
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function Destinations() {
//   const [states, setStates] = useState([]);
//   const [selectedState, setSelectedState] = useState(null);
//   const [destinations, setDestinations] = useState([]);
//   const [stateSearchQuery, setStateSearchQuery] = useState('');
//   const [filteredStates, setFilteredStates] = useState([]);
//   const [destinationSearchQuery, setDestinationSearchQuery] = useState('');
//   const [filteredDestinations, setFilteredDestinations] = useState([]);

//   useEffect(() => {
//     fetchStates();
//   }, []);

//   useEffect(() => {
//     setFilteredStates(
//       states.filter((state) =>
//         state.state.toLowerCase().includes(stateSearchQuery.toLowerCase())
//       )
//     );
//   }, [states, stateSearchQuery]);

//   useEffect(() => {
//     // Filter destinations based on search query whenever destinations change
//     setFilteredDestinations(
//       destinations.filter((dest) =>
//         dest.name.toLowerCase().includes(destinationSearchQuery.toLowerCase())
//       )
//     );
//   }, [destinations, destinationSearchQuery]);

//   const fetchStates = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/states');
//       setStates(response.data);
//       setFilteredStates(response.data);
//     } catch (error) {
//       console.error('Error fetching states:', error);
//       // Optionally display an error message to the user
//     }
//   };

//   const fetchDestinations = async (state) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/destinations/state/${state}`);
//       setDestinations(response.data);
//       setSelectedState(state);
//       setDestinationSearchQuery(''); // Reset the destination search query
//     } catch (error) {
//       console.error('Error fetching destinations:', error);
//       // Optionally display an error message to the user
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Explore Indian States</h1>

//       <input
//         type="text"
//         placeholder="Search states..."
//         value={stateSearchQuery}
//         onChange={(e) => setStateSearchQuery(e.target.value)}
//         className="mb-4 p-2 border border-gray-300 rounded"
//       />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {filteredStates.map((state) => (
//           <div
//             key={state.state}
//             className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => fetchDestinations(state.state)}
//           >
//             <img 
//               src={state.image} 
//               alt={state.state} 
//               className="w-full h-32 object-cover rounded-t-md mb-4"
//             />
//             <h2 className="text-xl font-semibold">{state.state}</h2>
//           </div>
//         ))}
//       </div>

//       {selectedState && destinations.length > 0 && (
//         <div className="mt-8">
//           <h3 className="text-lg font-medium mb-2">Famous Tourist Spots in {selectedState}:</h3>

//           <input
//             type="text"
//             placeholder="Search destinations..."
//             value={destinationSearchQuery}
//             onChange={(e) => setDestinationSearchQuery(e.target.value)}
//             className="mb-4 p-2 border border-gray-300 rounded"
//           />

//           <ul className="space-y-2">
//             {filteredDestinations.map((dest) => (
//               <li key={dest._id}>
//                 <Link to={`/place/${dest._id}`} className="text-blue-600 hover:text-blue-800">
//                   {dest.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Destinations;

// // Destinations.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Destinations() {
  const [states, setStates] = useState([]);
  const [stateSearchQuery, setStateSearchQuery] = useState('');
  const [filteredStates, setFilteredStates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    setFilteredStates(
      states.filter((state) =>
        state.state.toLowerCase().includes(stateSearchQuery.toLowerCase())
      )
    );
  }, [states, stateSearchQuery]);

  const fetchStates = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/states');
      setStates(response.data);
      setFilteredStates(response.data);
    } catch (error) {
      console.error('Error fetching states:', error);
      setError('Failed to load states. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleStateClick = (state) => {
    navigate(`/state/${state}`); // Navigate to the state destinations page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Explore Indian States</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <input
        type="text"
        placeholder="Search states..."
        value={stateSearchQuery}
        onChange={(e) => setStateSearchQuery(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStates.map((state) => (
            <div
              key={state.state}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleStateClick(state.state)} // Updated onClick
            >
              <img 
                src={state.image} 
                alt={state.state} 
                className="w-full h-32 object-cover rounded-t-md mb-4"
              />
              <h2 className="text-xl font-semibold">{state.state}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Destinations;
