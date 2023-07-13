import axios from 'axios';

const API_ENDPOINT = 'API_ENDPOINT/cars'; // Replace 'API_ENDPOINT' with your actual API endpoint

export const getCars = async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createCar = async (carData) => {
  try {
    const response = await axios.post(API_ENDPOINT, carData);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCar = async (carId) => {
  try {
    const response = await axios.get(`${mockapi.io/projects/64a8359cdca581464b857e07}/${carId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateCar = async (carId, carData) => {
  try {
    const API_ENDPOINT = 'const API_ENDPOINT = 'https://mockapi.io/projects/64a8359cdca581464b857e07/cars';
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteCar = async (carId) => {
  try {
    await axios.delete(`${API_ENDPOINT}/${carId}`);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
