<script setup lang="ts">
// Componente de Pie de página
</script>

<template>
  <footer class="vortex-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>VORTEX</h3>
        <p>No pagues por una página que solo esté ahí ocupando espacio. Invierte en una plataforma web diseñada para hacer crecer tu negocio.</p>
      </div>
      <div class="footer-links">
        <h4>Navegación</h4>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Vortex - Diseño & Creación Web. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.vortex-footer {
  background-color: #0b2545;
  color: #ffffff;
  padding: 3rem 2rem 1rem 2rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-brand h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #8da9c4;
}

.footer-brand p {
  color: #cbd5e1;
  line-height: 1.5;
  max-width: 500px;
}

.footer-links h4 {
  color: #8da9c4;
  margin-bottom: 1rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #ffffff;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #134074;
  padding-top: 1rem;
  font-size: 0.85rem;
  color: #94a3b8;
}
</style>