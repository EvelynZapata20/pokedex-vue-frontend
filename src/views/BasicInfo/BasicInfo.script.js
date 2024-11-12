import pokeneaService from "../../services/pokeneaService"

export default {
  name: "BasicInfoView",
  data() {
    return {
      basicInfo: {},
    }
  },
  async mounted() {
    try {
      const data = await pokeneaService.getBasicInfo()
      this.basicInfo = data
    } catch (error) {
      console.error("Failed to load basic info:", error)
    }
  },
}
