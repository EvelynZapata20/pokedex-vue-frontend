import pokeneaService from "../../services/pokeneaService"

export default {
  name: "InsightView",
  data() {
    return {
      insight: {},
    }
  },
  async mounted() {
    try {
      const data = await pokeneaService.getInsight()
      this.insight = data
    } catch (error) {
      console.error("Failed to load insight:", error)
    }
  },
}
