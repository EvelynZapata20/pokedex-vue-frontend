<template>
  <div class="basic-info-container">
    <h1>{{ basicInfo.name }}</h1>
    <div class="card-container">
      <p class="card">Altura:<br>{{ basicInfo.height }}</p>
      <p class="card">Habilidad:<br>{{ basicInfo.skill }}</p>
      <p class="card">ID del Contenedor:<br>{{ basicInfo.containerId }}</p>
    </div>
  </div>
</template>
  
<script>
  import PokeneaService from '../services/PokeneaService';
  
  export default {
    name: 'BasicInfoView',
    data() {
      return {
        basicInfo: {}
      };
    },
    async mounted() {
      try {
        const data = await PokeneaService.getBasicInfo();
        this.basicInfo = data;
      } catch (error) {
        console.error('Failed to load basic info:', error);
      }
    }
  };
</script>