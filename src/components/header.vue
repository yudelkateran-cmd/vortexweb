<script setup lang="ts">
import logoVortex from '../assets/vortex.jpeg'
</script>

<template>
  <header class="vortex-header">
    <div class="logo-container">
      <img :src="logoVortex" alt="Logo Vortex" class="logo-img" />
    </div>
    <nav class="nav-links">
      <a href="#inicio">Inicio</a>
      <a href="#servicios">Servicios</a>
      <a href="#comparativa">¿Por qué Vortex?</a>
      <a href="#contacto" class="btn-nav">Contacto</a>
    </nav>
  </header>
</template>

<style scoped>
.vortex-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 100px; /* Subimos de 95px a 130px para que destaque bastante */
  width: auto;
  object-fit: contain;
  display: block;
 
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #1e293b;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #00b4d8;
}

.btn-nav {
  background-color: #0b2545;
  color: #ffffff !important;
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  font-weight: 700 !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 2px 8px rgba(11, 37, 69, 0.2);
}

.btn-nav:hover {
  background-color: #00b4d8;
  color: #0b2545 !important;
  transform: translateY(-1px);
}
</style>