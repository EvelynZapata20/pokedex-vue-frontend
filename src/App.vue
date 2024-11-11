<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <header>
      <nav>
        <RouterLink to="/">FRASES</RouterLink>
        <RouterLink to="/basic-info">POKENEAS</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>