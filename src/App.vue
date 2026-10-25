<script setup lang="ts">
import header from './components/header.vue'
import footer from './components/footer.vue'
</script>

<template>
  <div id="app-container">
    <!-- Encabezado -->
    <Header />

    <!-- Contenido Principal -->
    <main class="main-content">
      <section class="hero">
        <h2>Tu página web con Vortex no es un folleto digital, es el vendedor estrella y el centro de control de tu negocio 24/7.</h2>
        <button class="cta-button">¡COMIENZA HOY MISMO!</button>
      </section>

      <section class="panels-grid">
        <!-- Tarjeta 1 -->
        <div class="panel">
          <div class="card-icon">
            <i class="fa-solid fa-chart-line"></i>
          </div>
          <h3>Cerrando Ventas</h3>
          <p>Automatización de ventas y atención al cliente.</p>
        </div>

        <!-- Tarjeta 2 -->
        <div class="panel">
          <div class="card-icon">
            <i class="fa-solid fa-list-check"></i>
          </div>
          <h3>Gestión de Control</h3>
          <p>Plataforma dinámica 24/7 para tu negocio.</p>
        </div>

        <!-- Tarjeta 3 -->
        <div class="panel">
          <div class="card-icon">
            <i class="fa-solid fa-calendar-check"></i>
          </div>
          <h3>Agendado 24/7</h3>
          <p>Procesos optimizados sin depender de horarios manuales.</p>
        </div>

        <!-- Tarjeta 4 -->
        <div class="panel">
          <div class="card-icon">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <h3>Automatizado</h3>
          <p>Velocidad superior y seguridad avanzada.</p>
        </div>
      </section>
    </main>

    <!-- Pie de página -->
    <Footer />
  </div>
</template>

<style>
/* Estilos globales para quitar márgenes por defecto de la página */
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  background-image: url('./assets/image.png');
  background-size: cover;          /* Cubre toda la pantalla */
  background-position: center;     /* Centra la imagen */
  background-attachment: fixed;    /* El fondo se queda quieto al hacer scroll */
  background-repeat: no-repeat;    
}

.main-content {
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.hero {
  /* Fondo azul muy translúcido */
  background: rgba(11, 37, 69, 0.25); 
  
  /* El efecto mágico de vidrio desenfocado */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  
  color: #ffffff;
  padding: 50px 20px;
  border-radius: 16px;
  text-align: center;
  margin-bottom: 40px;
  
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

.hero h2 {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  font-size: 1.8rem;
  max-width: 800px;
  margin: 0 auto 30px auto;
  line-height: 1.4;
}

.cta-button {
  background-color: #134074;
  color: white;
  border: 2px solid #8da9c4;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #0b2545;
}

.panels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.panel {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.panel:hover {
  transform: translateY(-5px);
}

/* --- ESTILOS NUEVOS PARA LOS ÍCONOS --- */
.card-icon {
  width: 55px;
  height: 55px;
  background-color: rgba(0, 180, 216, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px auto;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.card-icon i {
  font-size: 24px;
  color: #0077b6;
}

.panel:hover .card-icon {
  transform: scale(1.1);
  background-color: #0077b6;
}

.panel:hover .card-icon i {
  color: #ffffff;
}
</style>