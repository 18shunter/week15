import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('https://mockapi.io/projects/64a8359cdca581464b857e07/cars'); // Replace 'API_ENDPOINT' with your actual API endpoint
      setCars(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Car Inventory</h1>
      {cars.map((car) => (
        <div key={car.id}>
          <p>{car.make}</p>
          <p>{car.model}</p>
          <p>{car.year}</p>
          {/* Add buttons for editing and deleting cars */}
        </div>
      ))}
    </div>
  );
}

export default CarList;
