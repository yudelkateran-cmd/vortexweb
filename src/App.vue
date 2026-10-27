<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'

// Estado para controlar qué pregunta del FAQ está abierta
const activeFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const faqList = [
  {
    question: '¿Cuánto tiempo toma tener mi página web de Vortex lista?',
    answer: 'El tiempo promedio de desarrollo y entrega es de 5 a 10 días hábiles, dependiendo de la complejidad y el plan seleccionado, asegurando siempre una calidad profesional y optimizada.'
  },
  {
    question: '¿Necesito conocimientos técnicos avanzados para administrarla?',
    answer: 'Para nada. Diseñamos plataformas intuitivas y fáciles de usar. Además, te entregamos el sitio listo y te orientamos para que puedas gestionarlo sin complicaciones.'
  },
  {
    question: '¿La página web incluye el dominio y el hosting?',
    answer: 'Te asesoramos en la adquisición de tu dominio personalizado y la configuración del mejor hosting para que tu sitio web tenga una velocidad superior y seguridad avanzada 24/7.'
  },
  {
    question: '¿Los sitios web están optimizados para celulares y tablets?',
    answer: 'Sí, absolutamente todos nuestros desarrollos cuentan con diseño 100% responsivo, garantizando una experiencia de navegación perfecta en smartphones, tablets y computadores.'
  }
]
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

      <!-- --- NUEVA SECCIÓN: INSIGNIAS, TECNOLOGÍAS Y GARANTÍAS --- -->
      <section class="trust-section">
        <h2 class="section-title">Respaldado por Tecnología de Vanguardia</h2>
        <p class="trust-subtitle">Construido bajo los más altos estándares de rendimiento y seguridad</p>

        <div class="trust-grid">
          <!-- Insignia 1: Rendimiento -->
          <div class="trust-card">
            <div class="trust-icon">
              <i class="fa-solid fa-gauge-high"></i>
            </div>
            <h3>Alto Rendimiento</h3>
            <p>Velocidad de carga optimizada para retener visitantes y mejorar conversiones.</p>
          </div>

          <!-- Insignia 2: Seguridad SSL -->
          <div class="trust-card">
            <div class="trust-icon">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Sitio 100% Seguro</h3>
            <p>Certificados SSL y protección avanzada de datos integrada en cada proyecto.</p>
          </div>

          <!-- Insignia 3: Stack Tecnológico -->
          <div class="trust-card">
            <div class="trust-icon">
              <i class="fa-solid fa-code"></i>
            </div>
            <h3>Stack Moderno</h3>
            <p>Desarrollado con tecnologías líderes como <strong>Vue 3</strong>, <strong>Vite</strong> y <strong>TypeScript</strong>.</p>
          </div>

          <!-- Insignia 4: Adaptabilidad -->
          <div class="trust-card">
            <div class="trust-icon">
              <i class="fa-solid fa-mobile-screen-button"></i>
            </div>
            <h3>Diseño Responsivo</h3>
            <p>Experiencia de usuario impecable en celulares, tablets y computadores.</p>
          </div>
        </div>
      </section>

      <!-- Sección de Preguntas Frecuentes (FAQ) -->
      <section class="faq-section">
        <h2 class="section-title">Preguntas Frecuentes</h2>
        <p class="faq-subtitle">Resolvemos las dudas más comunes para que tomes la mejor decisión</p>

        <div class="faq-container">
          <div 
            v-for="(item, index) in faqList" 
            :key="index" 
            class="faq-item"
            :class="{ active: activeFaq === index }"
          >
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ item.question }}</span>
              <i class="fa-solid fa-chevron-down faq-icon"></i>
            </button>
            <div class="faq-answer-wrapper">
              <div class="faq-answer">
                <p>{{ item.answer }}</p>
              </div>
            </div>
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
  background-size: cover;          
  background-position: center;     
  background-attachment: fixed;    
  background-repeat: no-repeat;    
}

.main-content {
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.hero {
  background: rgba(11, 37, 69, 0.25); 
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

.without-vortex h3 {
  color: #c53030; 
}

.without-vortex i {
  color: #e53e3e;
  background-color: rgba(229, 62, 62, 0.1);
}

.with-vortex {
  background: linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%);
  border: 2px solid #0077b6;
}

.with-vortex h3 {
  color: #0b2545; 
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

/* --- ESTILOS PARA LA SECCIÓN DE INSIGNIAS Y TECNOLOGÍAS --- */
.trust-section {
  margin: 60px 0;
}

.trust-subtitle {
  text-align: center;
  color: #e2e8f0;
  font-size: 1.1rem;
  margin-top: -30px;
  margin-bottom: 40px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.trust-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 25px 20px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.trust-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

.trust-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(0, 119, 182, 0.1);
  color: #0077b6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin: 0 auto 15px auto;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.trust-card:hover .trust-icon {
  background-color: #0077b6;
  color: #ffffff;
}

.trust-card h3 {
  font-size: 1.15rem;
  color: #0b2545;
  margin-bottom: 10px;
}

.trust-card p {
  color: #475569;
  font-size: 0.92rem;
  line-height: 1.5;
  margin: 0;
}

/* Estilos de la sección FAQ */
.faq-section {
  margin: 60px 0;
}

.faq-subtitle {
  text-align: center;
  color: #e2e8f0;
  font-size: 1.1rem;
  margin-top: -30px;
  margin-bottom: 40px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.faq-item {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.faq-question {
  width: 100%;
  background: none;
  border: none;
  padding: 20px 25px;
  font-size: 1.05rem;
  font-weight: 600;
  color: #0b2545;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 15px;
}

.faq-icon {
  color: #0077b6;
  font-size: 14px;
  transition: transform 0.3s ease;
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
}

.faq-answer-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.faq-item.active .faq-answer-wrapper {
  grid-template-rows: 1fr;
}

.faq-answer {
  overflow: hidden;
}

.faq-answer p {
  padding: 0 25px 20px 25px;
  margin: 0;
  color: #475569;
  font-size: 0.98rem;
  line-height: 1.6;
}
</style>