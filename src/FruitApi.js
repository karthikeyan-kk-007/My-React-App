// api.js

import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const loginApi= async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/user`, formData);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.response.data };
  }
};
