<script setup lang="ts">
import Header from './components/header.vue'
import Footer from './components/footer.vue'
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
          <p>Automatización de Ventas y Atención al Cliente.</p>
        </div>

        <!-- Tarjeta 2 -->
        <div class="panel">
          <div class="card-icon">
            <i class="fa-solid fa-list-check"></i>
          </div>
          <h3>Gestión de Control</h3>
          <p>Plataforma Dinámica 24/7 para tu Negocio.</p>
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
          <p>Velocidad Superior y Seguridad Avanzada.</p>
        </div>
      </section>
      <!-- Sección de Comparación / Servicios -->
      <section class="services-comparison">
        <h2 class="section-title">El Antes y el Después de tu Negocio</h2>
        
        <div class="comparison-grid">
          <!-- Columna: Sin Vortex -->
          <div class="comparison-card without-vortex">
            <h3>Sin una Web de Vortex</h3>
            <ul>
              <li>
                <i class="fa-solid fa-xmark"></i>
                <span>Dependes solo del "boca a boca" o redes sociales.</span>
              </li>
              <li>
                <i class="fa-solid fa-xmark"></i>
                <span>Tu marca no transmite el verdadero valor de tu trabajo.</span>
              </li>
              <li>
                <i class="fa-solid fa-xmark"></i>
                <span>Pierdes tiempo respondiendo dudas básicas por chat.</span>
              </li>
              <li>
                <i class="fa-solid fa-xmark"></i>
                <span>Sitios lentos, desactualizados o propensos a fallas.</span>
              </li>
            </ul>
          </div>

          <!-- Columna: Con Vortex -->
          <div class="comparison-card with-vortex">
            <h3>Con una Web de Vortex</h3>
            <ul>
              <li>
                <i class="fa-solid fa-check"></i>
                <span>Tienes un canal propio que atrae y captura clientes todos los días.</span>
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <span>Proyectas una imagen de alto nivel que justifica el valor de tus servicios.</span>
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <span>Tu plataforma explica, califica y guía al cliente antes de que hable contigo.</span>
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <span>Una infraestructura rápida, moderna y optimizada que no falla.</span>
              </li>
            </ul>
          </div>
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
/* --- ESTILOS PARA LA SECCIÓN DE COMPARACIÓN --- */
.services-comparison {
  margin: 60px 0;
}

.section-title {
  text-align: center;
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 40px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.comparison-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.comparison-card:hover {
  transform: translateY(-5px);
}

.comparison-card h3 {
  font-size: 1.4rem;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #e2e8f0;
}

/* Estilo para la tarjeta "Sin Vortex" (tono sutilmente más sobrio) */
.without-vortex h3 {
  color: #c53030; /* Rojo moderado para indicar problema */
}

.without-vortex i {
  color: #e53e3e;
  background-color: rgba(229, 62, 62, 0.1);
}

/* Estilo para la tarjeta "Con Vortex" (destacada con los colores de tu marca) */
.with-vortex {
  background: linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%);
  border: 2px solid #0077b6;
}

.with-vortex h3 {
  color: #0b2545; /* Azul corporativo Vortex */
}

.with-vortex i {
  color: #0077b6;
  background-color: rgba(0, 119, 182, 0.1);
}

.comparison-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.comparison-card li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 20px;
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
}

.comparison-card li i {
  width: 26px;
  height: 26px;
  min-width: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  margin-top: 2px;
}
</style>