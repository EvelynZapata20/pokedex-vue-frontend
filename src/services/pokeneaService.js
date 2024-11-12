import axios from "axios"

const API_URL = process.env.VUE_APP_EXPRESS_BACKEND_URL
console.log("API_URL:", API_URL)

class PokeneaService {
  async getBasicInfo() {
    try {
      const response = await axios.get(`${API_URL}basic-info`)
      return response.data
    } catch (error) {
      console.error("Error fetching basic info:", error)
      throw error
    }
  }

  async getInsight() {
    try {
      const response = await axios.get(`${API_URL}insight`)
      return response.data
    } catch (error) {
      console.error("Error fetching insight:", error)
      throw error
    }
  }
}

export default new PokeneaService()
