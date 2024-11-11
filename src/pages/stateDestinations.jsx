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
      <button
            className="mt-4 text-blue-600 hover:text-blue-800"
            onClick={() => window.history.back()}
          >
            Back to Destinations
          </button>
    </div>
  );
}

export default StateDestinations;
