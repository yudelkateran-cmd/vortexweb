<script setup lang="ts">
// Componente de Pie de página
</script>

<template>
  <footer class="vortex-footer">
    <div class="footer-content">
      <!-- Columna de Marca y Descripción -->
      <div class="footer-brand">
        <h3>VORTEX</h3>
        <p>No pagues por una página que solo esté ahí ocupando espacio. Invierte en una plataforma web diseñada para hacer crecer tu negocio.</p>
      </div>

      <!-- Columna de Contacto -->
      <div class="footer-section">
        <h4>Contacto</h4>
        <ul class="contact-list">
          <li>
            <i class="fa-solid fa-location-dot"></i>
            <span>160, San Bernardo, Chile, 8071333</span>
          </li>
          <li>
            <i class="fa-solid fa-phone"></i>
            <a href="tel:+56995970968">9 9597 0968</a>
          </li>
          <li>
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:camilito24520@gmail.com">camilito24520@gmail.com</a>
          </li>
        </ul>
      </div>

      <!-- Columna de Redes Sociales -->
      <div class="footer-section">
        <h4>Síguenos</h4>
        <a href="https://www.facebook.com/profile.php?id=61595730183082" target="_blank" rel="noopener noreferrer" class="facebook-link">
          <i class="fa-brands fa-facebook"></i> Facebook
        </a>
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
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}

.footer-brand h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #8da9c4;
}

.footer-brand p {
  color: #cbd5e1;
  line-height: 1.5;
  max-width: 400px;
}

.footer-section h4 {
  color: #8da9c4;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 0.75rem;
  color: #cbd5e1;
  font-size: 0.95rem;
}

.contact-list i {
  color: #0077b6;
  margin-top: 3px;
}

.contact-list a {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.2s;
}

.contact-list a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.facebook-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.facebook-link i {
  font-size: 1.2rem;
  color: #1877f2;
}

.facebook-link:hover {
  color: #ffffff;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #134074;
  padding-top: 1.5rem;
  font-size: 0.85rem;
  color: #94a3b8;
}
</style>