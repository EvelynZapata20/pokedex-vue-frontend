<template>
    <div class="quote-container">
      <img :src="quote.image" class="image" />
      <div class="text-section">
        <h1>{{ quote.phrase }}</h1>
        <p>ID del Contenedor: {{ quote.containerId }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import PokeneaService from '../services/PokeneaService';
  
  export default {
    name: 'QuotePage',
    data() {
      return {
        quote: {}
      };
    },
    async mounted() {
      try {
        const data = await PokeneaService.getQuote();
        this.quote = data;
      } catch (error) {
        console.error('Failed to load quote data:', error);
      }
    }
  };
  </script>