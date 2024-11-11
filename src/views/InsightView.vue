<template>
  <div class="insight-container">
    <img :src="insight.image" class="image" />
    <div class="text-section">
      <h1>{{ insight.phrase }}</h1>
      <p>ID del Contenedor: {{ insight.containerId }}</p>
    </div>
  </div>
</template>
  
<script>
  import PokeneaService from '../services/PokeneaService';
  
  export default {
    name: 'InsightView',
    data() {
      return {
        insight: {}
      };
    },
    async mounted() {
      try {
        const data = await PokeneaService.getInsight();
        this.insight = data;
      } catch (error) {
        console.error('Failed to load insight:', error);
      }
    }
  };
</script>