import React, { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // jQuery demo: fade in the heading
    window.$('.overlay h1').hide().fadeIn(2000);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate('/restaurants', { state: { search: searchTerm } });
    }
  };

  return (
    <div className="home-container">
      <div className="banner">
        <div className="overlay">
          <h1>Discover the best food & drinks in your city</h1>
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      <div className="categories mt-5">
        <h2 className="text-center mb-4">Popular Categories</h2>
        <div className="category-cards d-flex justify-content-center gap-4 flex-wrap">
          <div className="card p-3">
            <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="Breakfast" />
            <p>Breakfast</p>
          </div>
          <div className="card p-3">
            <img src="https://cdn-icons-png.flaticon.com/512/3075/3075974.png" alt="Lunch" />
            <p>Lunch</p>
          </div>
          <div className="card p-3">
            <img src="https://cdn-icons-png.flaticon.com/512/3075/3075975.png" alt="Dinner" />
            <p>Dinner</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
