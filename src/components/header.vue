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
  /* Efecto Glassmorphism moderno y elegante */
  background: rgba(15, 23, 42, 0.75) !important;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  
  color: #ffffff;
  padding: 12px 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  position: sticky;
  top: 0;
  z-index: 1000;
  border-radius: 0 0 16px 16px;
  margin-bottom: 2rem;
}

.logo-container {
  background: rgba(255, 255, 255, 0.95);
  padding: 6px 14px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.logo-img {
  height: 40px;
  width: auto;
  object-fit: contain;
  display: block;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

/* Enlaces del menú con texto blanco impecable */
.nav-links a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #38bdf8;
}

/* Botón especial de Contacto en el menú */
.btn-nav {
  background-color: #0ea5e9;
  color: #ffffff !important;
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  font-weight: 700 !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
}

.btn-nav:hover {
  background-color: #38bdf8;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(14, 165, 233, 0.5);
}

/* Responsivo para celulares */
@media (max-width: 768px) {
  .vortex-header {
    padding: 10px 15px;
    flex-direction: column;
    gap: 15px;
  }
  .nav-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>