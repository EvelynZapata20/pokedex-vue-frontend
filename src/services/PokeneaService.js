import axios from 'axios';

const API_URL = process.env.VUE_APP_URL;
console.log("API_URL:", API_URL);

class PokeneaService {
  
  async getProfile() {
    try {
      const response = await axios.get(`${API_URL}basic-info`);
      return response.data;
    } catch (error) {
      console.error('Error fetching profile data:', error);
      throw error;
    }
  }

  async getQuote() {
    try {
      const response = await axios.get(`${API_URL}insight`);
      return response.data;
    } catch (error) {
      console.error('Error fetching additional data:', error);
      throw error;
    }
  }
}

export default new PokeneaService();
