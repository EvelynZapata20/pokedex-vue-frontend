<template>
    <div class="profile-container">
        <h1>{{ profile.name }}</h1>
        <div class="card-container">
          <p class="card">Altura:<br>{{ profile.height }}</p>
          <p class="card">Habilidad:<br>{{ profile.skill }}</p>
          <p class="card">ID del Contenedor:<br>{{ profile.containerId }}</p>
        </div>
    </div>
  </template>
  
  <script>
  import PokeneaService from '../services/PokeneaService';
  
  export default {
    name: 'ProfileView',
    data() {
      return {
        profile: {}
      };
    },
    async mounted() {
      try {
        const data = await PokeneaService.getProfile();
        this.profile = data;
      } catch (error) {
        console.error('Failed to load profile data:', error);
      }
    }
  };
  </script>