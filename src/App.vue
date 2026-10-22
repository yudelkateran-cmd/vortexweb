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
        <div class="panel">
          <h3>Cerrando Ventas</h3>
          <p>Automatización de ventas y atención al cliente.</p>
        </div>
        <div class="panel">
          <h3>Gestión de Control</h3>
          <p>Plataforma dinámica 24/7 para tu negocio.</p>
        </div>
        <div class="panel">
          <h3>Agendado 24/7</h3>
          <p>Procesos optimizados sin depender de horarios manuales.</p>
        </div>
        <div class="panel">
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
  
  /* --- AGREGA ESTAS LÍNEAS PARA EL FONDO --- */
  background-image: url('./assets/image.png');
  background-size: cover;          /* Cubre toda la pantalla */
  background-position: center;     /* Centra la imagen */
  background-attachment: fixed;    /* El fondo se queda quieto al hacer scroll (opcional, queda muy bien) */
  background-repeat: no-repeat;    
}

.main-content {
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.hero {
  /* Fondo azul muy translúcido (solo 25% de opacidad para que sea casi transparente) */
  background: rgba(11, 37, 69, 0.25); 
  
  /* El efecto mágico de vidrio desenfocado */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  
  color: #ffffff;
  padding: 50px 20px;
  border-radius: 16px;
  text-align: center;
  margin-bottom: 40px;
  
  /* Borde fino estilo cristal brillante */
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  /* Sombra suave para darle profundidad sobre el fondo */
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
}



</style>