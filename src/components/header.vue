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
  /* Fondo transparente o con sutil efecto glassmorphism 
  background: rgba(11, 37, 69, 0.15);*/
  /* Un azul ultra translúcido opcional, o 'transparent' puro 
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);*/
  background: transparent !important;
  background-color: transparent !important;

  /* Asegúrate de que el texto y los enlaces se vean blancos para destacar sobre la imagen */
  color: #ffffff;
  padding: 12px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Borde sutil inferior opcional para separar con elegancia 
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);*/
  border: none !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
}

/* Si tienes enlaces en el header, asegúrate de que sean blancos */
.vortex-header a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.vortex-header a:hover {
  color: #8da9c4;
  /* Tono celeste sutil al pasar el cursor */
}

.logo-container {
 background: rgba(11, 37, 69, 0.4);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  padding: 8px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
}

.logo-img {
  height: 45px;
  /* Subimos de 95px a 130px para que destaque bastante */
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
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
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