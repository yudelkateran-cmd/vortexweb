<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'

// Estado para controlar qué pregunta del FAQ está abierta
const activeFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

// Función para el efecto Spotlight en las tarjetas
const handleMouseMove = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  card.style.setProperty('--mouse-x', `${x}px`);
  card.style.setProperty('--mouse-y', `${y}px`);
};

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
      <!-- 1. SECCIÓN INICIO -->
      <section id="inicio" class="hero">
        <h2>Impulsa tu negocio al siguiente nivel con una página web que genera resultados</h2>
        <p class="hero-subtitle">En Vortex Web diseñamos y desarrollamos sitios web modernos, rápidos y optimizados para
          convertir visitantes en clientes fieles.</p>

        <a href="https://wa.me/56995970968?text=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20los%20servicios%20de%20Vortex"
          target="_blank" rel="noopener noreferrer" class="cta-button whatsapp-link">
          <i class="fa-brands fa-whatsapp"></i> Hablemos por WhatsApp
        </a>
      </section>

      <section class="panels-grid">
        <!-- Tarjeta 1: Diseño 100% Personalizado -->
        <div class="panel" @mousemove="handleMouseMove">
          <div class="card-image-container">
            <img src="./assets/personalizado.jpg" alt="Diseño 100% Personalizado" />
          </div>
          <h3>Diseño 100% Personalizado</h3>
          <p>No usamos plantillas aburridas. Creamos una identidad visual única que refleja la esencia de tu marca y
            conecta con tu audiencia.</p>
        </div>

        <!-- Tarjeta 2: Optimización y Velocidad -->
        <div class="panel" @mousemove="handleMouseMove">
          <div class="card-image-container">
            <img src="./assets/optimizacion.jpeg" alt="Optimización y Velocidad" />
          </div>
          <h3>Optimización y Velocidad</h3>
          <p>Sitios web ultrarrápidos y adaptados perfectamente a celulares, tablets y computadoras para garantizar la
            mejor experiencia de usuario.</p>
        </div>

        <!-- Tarjeta 3: Enfoque en Ventas -->
        <div class="panel" @mousemove="handleMouseMove">
          <div class="card-image-container">
            <img src="./assets/enfoque.jpeg" alt="Enfoque en Ventas" />
          </div>
          <h3>Estrategia Comercial</h3>
          <p>Estructuras pensadas estratégicamente para aparecer en Google y guiar al usuario de la mano hacia la compra
            o contratación.</p>
        </div>

        <!-- Tarjeta 4: Soporte y Acompañamiento -->
        <div class="panel" @mousemove="handleMouseMove">
          <div class="card-image-container">
            <img src="./assets/soporte.jpeg" alt="Soporte y Acompañamiento" />
          </div>
          <h3>Soporte Técnico</h3>
          <p>No te dejamos solo tras la entrega; te enseñamos a usar tu web y te apoyamos ante cualquier duda o
            actualización.</p>
        </div>
      </section>

      <!-- 2. SECCIÓN ¿POR QUÉ VORTEX? (Comparativa) -->
      <section id="comparativa" class="services-comparison" >
        <h2 class="section-title">El Antes y el Después de tu Negocio</h2>

        <div class="comparison-grid" @mousemove="handleMouseMove">
          <!-- Columna: Sin Vortex -->
          <div class="comparison-card without-vortex" @mousemove="handleMouseMove">
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
          <div class="comparison-card with-vortex" @mousemove="handleMouseMove">
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

      <!-- --- SECCIÓN: INSIGNIAS, TECNOLOGÍAS Y GARANTÍAS --- -->
      <section class="trust-section" @mousemove="handleMouseMove">
        <h2 class="section-title">Respaldado por Tecnología de Vanguardia</h2>
        <p class="trust-subtitle">Construido bajo los más altos estándares de rendimiento y seguridad</p>

        <div class="trust-grid">
          <!-- Insignia 1: Rendimiento -->
          <div class="trust-card" @mousemove="handleMouseMove">
            <div class="trust-icon">
              <i class="fa-solid fa-gauge-high"></i>
            </div>
            <h3>Alto Rendimiento</h3>
            <p>Velocidad de carga optimizada para retener visitantes y mejorar conversiones.</p>
          </div>

          <!-- Insignia 2: Seguridad SSL -->
          <div class="trust-card" @mousemove="handleMouseMove">
            <div class="trust-icon">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Sitio 100% Seguro</h3>
            <p>Certificados SSL y protección avanzada de datos integrada en cada proyecto.</p>
          </div>

          <!-- Insignia 3: Stack Tecnológico -->
          <div class="trust-card" @mousemove="handleMouseMove">
            <div class="trust-icon">
              <i class="fa-solid fa-code"></i>
            </div>
            <h3>Stack Moderno</h3>
            <p>Desarrollado con tecnologías líderes como <strong>Vue 3</strong>, <strong>Vite</strong> y
              <strong>TypeScript</strong>.
            </p>
          </div>

          <!-- Insignia 4: Adaptabilidad -->
          <div class="trust-card" @mousemove="handleMouseMove">
            <div class="trust-icon">
              <i class="fa-solid fa-mobile-screen-button"></i>
            </div>
            <h3>Diseño Responsivo</h3>
            <p>Experiencia de usuario impecable en celulares, tablets y computadores.</p>
          </div>
        </div>
      </section>

      <!-- 3. SECCIÓN DE SERVICIOS -->
      <section id="servicios" class="services-section">
        <div class="services-header" @mousemove="handleMouseMove">
          <span class="badge-subtitle">NUESTRAS SOLUCIONES</span>
          <h2>Nuestros Servicios</h2>
          <p>Soluciones digitales diseñadas con precisión para llevar tu negocio al siguiente nivel de conversión y rentabilidad.</p>
        </div>

        <div class="services-grid">
          <!-- Servicio 1 -->
          <div class="service-card" @mousemove="handleMouseMove">
            <div class="service-icon-wrapper">
              <i class="fa-solid fa-laptop-code"></i>
            </div>
            <h3>Desarrollo Web Profesional</h3>
            <p>Sitios corporativos, landing pages y blogs estructurados con alto rendimiento, velocidad óptima y total seguridad para tu marca.</p>
          </div>

          <!-- Servicio 2 -->
          <div class="service-card" @mousemove="handleMouseMove">
            <div class="service-icon-wrapper">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <h3>Tiendas Online (E-commerce)</h3>
            <p>Tu negocio abierto 24/7. Configuramos pasarelas de pago seguras, catálogos eficientes y carritos diseñados para vender más.</p>
          </div>

          <!-- Servicio 3 -->
          <div class="service-card" @mousemove="handleMouseMove">
            <div class="service-icon-wrapper">
              <i class="fa-solid fa-rotate"></i>
            </div>
            <h3>Rediseño y Mantenimiento Web</h3>
            <p>¿Tu web actual se ve anticuada o es lenta? La renovamos por completo, mejorando su estética, velocidad y actualizándola de forma constante.</p>
          </div>
        </div>
      </section>

      <!-- Sección de Preguntas Frecuentes (FAQ) -->
      <section class="faq-section" @mousemove="handleMouseMove">
        <h2 class="section-title">Preguntas Frecuentes</h2>
        <p class="faq-subtitle">Resolvemos las dudas más comunes para que tomes la mejor decisión</p>

        <div class="faq-container" @mousemove="handleMouseMove">
          <div v-for="(item, index) in faqList" :key="index" class="faq-item" :class="{ active: activeFaq === index }">
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

      <!-- SECCIÓN: FILOSOFÍA Y COMPROMISO -->
      <section class="philosophy-section" @mousemove="handleMouseMove">
        <h2 class="section-title">Nuestra Promesa de Excelencia</h2>
        <p class="philosophy-subtitle">Rigor técnico y cumplimiento absoluto en cada etapa de desarrollo</p>

        <div class="philosophy-grid" @mousemove="handleMouseMove">
          <div class="philosophy-card" @mousemove="handleMouseMove">
            <div class="philosophy-number">01</div>
            <h3>Puntualidad Estricta</h3>
            <p>Entregas rigurosas en los plazos acordados, respetando el tiempo de tu negocio sin excepciones.</p>
          </div>

          <div class="philosophy-card" @mousemove="handleMouseMove">
            <div class="philosophy-number">02</div>
            <h3>Soporte Dedicado</h3>
            <p>Acompañamiento continuo y atención personalizada para garantizar el funcionamiento impecable de tu
              plataforma.</p>
          </div>

          <div class="philosophy-card" @mousemove="handleMouseMove">
            <div class="philosophy-number">03</div>
            <h3>Precisión Milimétrica</h3>
            <p>Código limpio, optimizado y diseñado bajo los más altos estándares de calidad estética y funcional.</p>
          </div>
        </div>
      </section>

      <!-- SECCIÓN: INFORMACIÓN LEGAL Y TÉRMINOS -->
       
      <!-- SECCIÓN: INFORMACIÓN LEGAL Y TÉRMINOS -->
      <section id="terminos" class="legal-section" @mousemove="handleMouseMove">
        <div class="legal-header">
          <span class="badge-subtitle">TRANSPARENCIA Y CONFIANZA</span>
          <h2>Información Legal del Sitio</h2>
          <p class="legal-subtitle">Términos, condiciones de uso y directrices de privacidad de Vortex Web.</p>
        </div>

        <div class="legal-card-container" @mousemove="handleMouseMove">
          <!-- Aviso Provisional -->
          <div class="legal-provisional-banner">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <div>
              <strong>Aviso de Prototipo:</strong> Los siguientes apartados contienen directrices preliminares para la revisión y desarrollo del servicio, y serán validados formalmente antes de su publicación definitiva.
            </div>
          </div>

          <!-- Grid o lista estructurada de puntos -->
          <div class="legal-grid">
            
            <div class="legal-item" @mousemove="handleMouseMove">
              <div class="legal-number" @mousemove="handleMouseMove">01</div>
              <div class="legal-text">
                <h3>Identificación y Contacto</h3>
                <p>Sitio operado por <strong>VORTEX DIGITAL & CONTROL SpA</strong>, RUT <strong>78.425.072-5</strong>, con domicilio en Santiago, Chile.</p>
                <p class="legal-detail"><i class="fa-solid fa-envelope"></i> camilito24520@gmail.com | <i class="fa-brands fa-whatsapp"></i> +56 9 9597 0968</p>
              </div>
            </div>

            <div class="legal-item" @mousemove="handleMouseMove">
              <div class="legal-number" @mousemove="handleMouseMove">02</div>
              <div class="legal-text">
                <h3>Uso y Alcance de los Servicios</h3>
                <p>Canal informativo y de captación de requerimientos. Los servicios publicados no generan transacciones automáticas en línea; su contratación se formaliza mediante la aceptación previa de propuestas comerciales o presupuestos específicos acordados con el cliente.</p>
              </div>
            </div>

            <div class="legal-item" @mousemove="handleMouseMove">
              <div class="legal-number" @mousemove="handleMouseMove">03</div>
              <div class="legal-text">
                <h3>Datos Personales y Privacidad</h3>
                <p>La información recopilada a través de formularios o canales de contacto (como nombre, correo o teléfono) se utiliza exclusivamente para responder solicitudes, cotizaciones y coordinar proyectos, garantizando absoluta confidencialidad.</p>
              </div>
            </div>

            <div class="legal-item" @mousemove="handleMouseMove">
              <div class="legal-number" @mousemove="handleMouseMove">04</div>
              <div class="legal-text">
                <h3>Proveedores y Seguridad</h3>
                <p>Infraestructura tecnológica optimizada bajo estándares modernos de desarrollo (Vue 3, Vite, TypeScript) y protocolos de seguridad SSL para proteger la navegación de los usuarios.</p>
              </div>
            </div>

            <div class="legal-item" @mousemove="handleMouseMove">
              <div class="legal-number" @mousemove="handleMouseMove">05</div>
              <div class="legal-text">
                <h3>Derechos del Usuario</h3>
                <p>Los usuarios pueden solicitar en cualquier momento la revisión, actualización o eliminación de sus datos de contacto escribiendo directamente a nuestro correo oficial.</p>
              </div>
            </div>

            <div class="legal-item" @mousemove="handleMouseMove">
              <div class="legal-number" @mousemove="handleMouseMove">06</div>
              <div class="legal-text">
                <h3>Cookies y Actualizaciones</h3>
                <p>El sitio utiliza tecnologías estándar de rendimiento web. Las presentes condiciones podrán ser actualizadas periódicamente para su adecuación operativa y normativa continua.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
    

    <!-- 4. SECCIÓN CONTACTO (Pie de página con ID para el menú) -->
    <Footer id="contacto" />
  </div>
</template>

<style>
/* Estilos globales y degradado de fondo animado */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, rgba(11, 37, 69, 0.85), rgba(0, 119, 182, 0.75)), url('./assets/image.png');
  background-size: 200% 200%;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  animation: gradientShift 20s ease infinite;
}

.main-content {
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.hero {
  background: rgba(11, 37, 69, 0.35);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  color: #ffffff;
  padding: 60px 20px;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 40px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

/* Efecto de brillo sutil superior en el Hero */
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
  transform: skewX(-20deg);
  pointer-events: none;
}

.hero h2 {
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  font-size: 1.9rem;
  max-width: 800px;
  margin: 0 auto 30px auto;
  line-height: 1.4;
}

.cta-button {
  background-color: #134074;
  color: white;
  border: 2px solid #8da9c4;
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  background-color: #0077b6;
  border-color: #38bdf8;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 119, 182, 0.4);
}

/* --- ESTILOS REFINADOS PARA LOS PANELES E IMÁGENES --- */
.panels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
}

.panel {
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.6);
  padding: 24px 20px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.panel:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 45px rgba(0, 119, 182, 0.2);
  border-color: rgba(0, 119, 182, 0.4);
  background: rgba(255, 255, 255, 0.98);
}

.card-image-container {
  width: 100%;
  height: 150px;
  margin-bottom: 18px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
}

.card-image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.panel:hover .card-image-container img {
  transform: scale(1.06);
}

.panel h3 {
  color: #0b2545;
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.panel p {
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

/* Sección de Comparación */
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.comparison-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
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

/* Sección de Insignias y Tecnologías */
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
  box-shadow: 0 12px 30px rgba(0, 119, 182, 0.2);
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
  transition: all 0.3s ease;
}

.trust-card:hover .trust-icon {
  background-color: #0077b6;
  color: #ffffff;
  transform: scale(1.1);
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

/* Sección FAQ */
.faq-section {
  margin: 60px 0;
  padding-top: 20px;
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

/* --- ESTILOS PARA LA SECCIÓN DE FILOSOFÍA Y COMPROMISO --- */
.philosophy-section {
  margin: 60px 0;
}

.philosophy-subtitle {
  text-align: center;
  color: #e2e8f0;
  font-size: 1.1rem;
  margin-top: -30px;
  margin-bottom: 40px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.philosophy-card {
  background: rgba(255, 255, 255, 0.90);
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 30px 25px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.philosophy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: rgba(0, 119, 182, 0.3);
}

.philosophy-number {
  font-size: 2.2rem;
  font-weight: 700;
  color: rgba(0, 119, 182, 0.15);
  margin-bottom: 10px;
  line-height: 1;
}

.philosophy-card h3 {
  font-size: 1.2rem;
  color: #0b2545;
  margin-bottom: 10px;
  font-weight: 600;
}

.philosophy-card p {
  color: #475569;
  font-size: 0.92rem;
  line-height: 1.6;
  margin: 0;
}

/* =========================================
   ESTILOS OPTIMIZADOS - SECCIÓN DE SERVICIOS
   ========================================= */

.services-section {
  padding: 80px 20px;
  background: radial-gradient(circle at center, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.98) 100%);
  position: relative;
  z-index: 1;
  margin: 60px 0;
  border-radius: 16px;
  border: 1px solid rgba(56, 189, 248, 0.15);
}

.services-header {
  max-width: 750px;
  margin: 0 auto 50px auto;
  text-align: center;
}

.badge-subtitle {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.15);
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.services-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 15px;
  letter-spacing: -0.5px;
}

.services-header p {
  font-size: 1.1rem;
  color: #cbd5e1;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: stretch;
}

.service-card {
  background: rgba(30, 41, 59, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(56, 189, 248, 0.25);
  border-radius: 16px;
  padding: 40px 30px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-6px);
  border-color: rgba(56, 189, 248, 0.6);
  box-shadow: 0 20px 40px rgba(14, 165, 233, 0.25);
  background: rgba(30, 41, 59, 0.95);
}

.service-card h3 {
  color: #ffffff !important;
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.service-card p {
  color: #e2e8f0 !important;
  font-size: 0.98rem;
  line-height: 1.7;
  margin: 0;
}

.service-icon-wrapper {
  width: 60px;
  height: 60px;
  background: rgba(56, 189, 248, 0.15);
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: #38bdf8;
  margin-bottom: 22px;
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon-wrapper {
  transform: scale(1.1);
  background: rgba(56, 189, 248, 0.25);
}

/* =========================================
   ESTILOS - SECCIÓN INFORMACIÓN LEGAL MEJORADA
   ========================================= */

.legal-section {
  margin: 80px 0;
  position: relative;
  z-index: 2;
}

.legal-subtitle {
  color: #e2e8f0;
  font-size: 1.1rem;
  margin: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
}

.legal-card-container {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.legal-provisional-banner {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  background-color: rgba(234, 179, 8, 0.15);
  border-left: 4px solid #eab308;
  color: #854d0e;
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 0.92rem;
  line-height: 1.5;
  margin-bottom: 30px;
}

.legal-provisional-banner i {
  font-size: 1.2rem;
  margin-top: 2px;
}

/* Cuadrícula de 2 columnas para organizar los puntos perfectamente */
.legal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
}

.legal-item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.legal-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border-color: #cbd5e1;
}

.legal-number {
  font-size: 1.4rem;
  font-weight: 800;
  color: #024062;
  background: rgba(0, 119, 182, 0.1);
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.legal-text h3 {
  color: #0b2545;
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 6px 0;
}

.legal-text p {
  color: #475569;
  font-size: 0.88rem;
  line-height: 1.5;
  margin: 0 0 6px 0;
}

.legal-detail {
  font-size: 0.82rem !important;
  color: #64748b !important;
  font-weight: 500;
}

.legal-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
}

.legal-header h2 {
  font-size: 2.2rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 10px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
}
/* --- EFECTO SPOTLIGHT INTERACTIVO PARA TARJETAS --- */
.panel, .service-card, .trust-card, .philosophy-card, .comparison-card {
  position: relative;
  overflow: hidden;
}

/* Capa del brillo que sigue al mouse */
.panel::before, .service-card::before, .trust-card::before, .philosophy-card::before, .comparison-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(56, 189, 248, 0.12),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
}

/* Mostrar el brillo al pasar el mouse por encima */
.panel:hover::before, .service-card:hover::before, .trust-card:hover::before, .philosophy-card:hover::before, .comparison-card:hover::before {
  opacity: 1;
}

/* Asegurar que el contenido interno de la tarjeta esté por encima del brillo */
.panel > *, .service-card > *, .trust-card > *, .philosophy-card > *, .comparison-card > * {
  position: relative;
  z-index: 2;
}
/*  MICROINTERACCIONES EN BOTONES E ICONOS --- */

/* 1. Animación de pulso suave para el botón de WhatsApp */
@keyframes softPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 119, 182, 0.4);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(0, 119, 182, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 119, 182, 0);
  }
}

.cta-button {
  animation: softPulse 3s infinite;
}

.cta-button:hover {
  animation: none; /* Detiene el pulso al hacer hover para dar paso a la elevación */
  transform: translateY(-3px) scale(1.02);
}

/* 2. Microinteracción en iconos generales dentro de tarjetas */
.panel i, 
.service-card i, 
.trust-card i, 
.philosophy-card i {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
}

.panel:hover i, 
.service-card:hover i, 
.trust-card:hover i, 
.philosophy-card:hover i {
  transform: scale(1.15) rotate(3deg);
}

/* 3. Transición fluida para las imágenes de las tarjetas de servicios/paneles */
.card-image-container img {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.panel:hover .card-image-container img {
  transform: scale(1.08);
}

</style>