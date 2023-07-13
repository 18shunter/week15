import React, { useState } from 'react';
import axios from 'axios';

function CarForm() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://mockapi.io/projects/64a8359cdca581464b857e07/cars', { make, model, year }); // Replace 'API_ENDPOINT' with your actual API endpoint
      // Call a function to update the car list or navigate to the updated car list page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Make:
          <input type="text" value={make} onChange={(e) => setMake(e.target.value)} />
        </label>
        <br />
        <label>
          Model:
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
        </label>
        <br />
        <label>
          Year:
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CarForm;
