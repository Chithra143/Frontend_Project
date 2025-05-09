import React from 'react';
import { useParams } from 'react-router-dom';

const restaurantData = [
  {
    id: 1,
    name: "Spice Garden",
    location: "Koramangala, Bangalore",
    rating: 4.5,
    image: "https://th.bing.com/th/id/OIP.Be21OiU8l1Mpe_6sAOKL9AHaGF?w=200&h=180&c=7&r=0&o=5&cb=iwc1&dpr=2.5&pid=1.7",
    dishes: [
      { id: '1a', name: 'Paneer Butter Masala', price: 180 },
      { id: '1b', name: 'Garlic Naan', price: 40 },
      { id: '1c', name: 'Veg Biryani', price: 150 }
    ]
  },
  {
    id: 2,
    name: "Urban Tadka",
    location: "MG Road, Bangalore",
    rating: 4.2,
    image: "https://th.bing.com/th/id/OIP.WlOoNvRZ0ROys8NsERKvGAHaE8?w=264&h=180&c=7&r=0&o=5&cb=iwc1&dpr=2.5&pid=1.7",
    dishes: [
      { id: '2a', name: 'Butter Chicken', price: 220 },
      { id: '2b', name: 'Tandoori Roti', price: 30 },
      { id: '2c', name: 'Jeera Rice', price: 100 }
    ]
  },
  {
    id: 3,
    name: "Burger Point",
    location: "Indiranagar, Bangalore",
    rating: 4.0,
    image: "https://th.bing.com/th/id/OIP.8NWLhRU6ltMf_VS6GvRaWAHaEw?w=292&h=188&c=7&r=0&o=5&cb=iwc1&dpr=2.5&pid=1.7",
    dishes: [
      { id: '3a', name: 'Cheese Burger', price: 120 },
      { id: '3b', name: 'French Fries', price: 80 },
      { id: '3c', name: 'Cold Drink', price: 40 }
    ]
  }
];

function RestaurantDetail() {
  const { id } = useParams();
  const restaurant = restaurantData.find((rest) => rest.id === parseInt(id));

  return (
    <div className="container mt-4">
      {restaurant ? (
        <>
          <div className="text-center mb-4">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.location} | ⭐ {restaurant.rating}</p>
            <img src={restaurant.image} alt={restaurant.name} className="img-fluid rounded" />
          </div>

          <h4 className="mb-3">Available Dishes</h4>
          <div className="row">
            {restaurant.dishes.map((dish) => (
              <div className="col-md-4 mb-3" key={dish.id}>
                <div className="card h-100 p-3">
                  <h5>{dish.name}</h5>
                  <p>₹{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Restaurant not found.</p>
      )}
    </div>
  );
}

export default RestaurantDetail;
