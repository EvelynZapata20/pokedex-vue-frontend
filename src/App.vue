<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <!-- Header with Navigation -->
    <header>
      <nav>
        <RouterLink to="/">FRASES</RouterLink>
        <RouterLink to="/profile">POKENEAS</RouterLink>
      </nav>
    </header>

    <!-- Main Content Area for Dynamic Routing -->
    <main>
      <RouterView />
    </main>
  </div>
</template>