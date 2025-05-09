import React, { useEffect, useState } from 'react';
import './RestaurantList.css';
import { useLocation, Link } from 'react-router-dom';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  useEffect(() => {
    // ✅ AJAX call using fetch to load restaurant data
    fetch('/restaurants.json')
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error('Error loading data:', err));

    // Set search term from location state if exists
    if (location.state?.search) {
      setSearchTerm(location.state.search);
    }
  }, [location.state]);

  // Filter restaurants based on search term
  const filteredRestaurants = restaurants.filter((rest) =>
    rest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rest.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="restaurant-list container mt-4">
      <h2 className="mb-4">Restaurants Near You</h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by name or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="row">
        {filteredRestaurants.length ? (
          filteredRestaurants.map((rest) => (
            <div className="col-md-4 mb-4" key={rest.id}>
              <div className="card">
                <img src={rest.image} className="card-img-top" alt={rest.name} />
                <div className="card-body">
                  <h5 className="card-title">{rest.name}</h5>
                  <p className="card-text">{rest.location}</p>
                  <p className="card-text">⭐ {rest.rating}</p>
                  <Link to={`/restaurant/${rest.id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
}

export default RestaurantList;
