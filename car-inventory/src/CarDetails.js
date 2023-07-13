import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarDetails({ carId }) {
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetchCar();
  }, [carId]);

  const fetchCar = async () => {
    try {
      const response = await axios.get(`https://mockapi.io/projects/64a8359cdca581464b857e07/cars/${carId}`); // Replace 'API_ENDPOINT' with your actual API endpoint
      setCar(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Car Details</h2>
      <p>{car.make}</p>
      <p>{car.model}</p>
      <p>{car.year}</p>
      {/* Add buttons for editing and deleting the car */}
    </div>
  );
}

export default CarDetails;
