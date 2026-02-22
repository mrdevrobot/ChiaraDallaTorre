<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <h3 class="footer__name">Chiara Dalla Torre</h3>
          <p class="footer__tagline">Maestro di Pianoforte</p>
          <p class="footer__desc">
            Diplomata al Conservatorio "A. Steffani" di Castelfranco Veneto.
            Lezioni per tutti i livelli nella zona di San Donà di Piave.
          </p>
        </div>
        <div class="footer__links">
          <h4>Navigazione</h4>
          <router-link to="/">Home</router-link>
          <router-link to="/chi-sono">Chi Sono</router-link>
          <router-link to="/lezioni">Lezioni</router-link>
          <router-link to="/musica">Musica</router-link>
          <router-link to="/contatti">Contatti</router-link>
        </div>
        <div class="footer__contact">
          <h4>Contatti</h4>
          <p>San Donà di Piave (VE)</p>
          <p>
            <a href="mailto:info@chiaradallatorre.it">info@chiaradallatorre.it</a>
          </p>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; {{ year }} Chiara Dalla Torre. Tutti i diritti riservati.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--color-bg-dark);
  color: var(--color-text-on-dark);
  padding: 4rem 0 1.5rem;
}

.footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer__name {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
}

.footer__tagline {
  font-size: 0.85rem;
  color: var(--color-accent);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 300;
}

.footer__desc {
  font-size: 0.9rem;
  color: rgba(240, 236, 228, 0.7);
  max-width: 350px;
  line-height: 1.6;
}

.footer__links h4,
.footer__contact h4 {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.footer__links a {
  display: block;
  color: rgba(240, 236, 228, 0.7);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

.footer__links a:hover {
  color: var(--color-accent);
}

.footer__contact p {
  font-size: 0.9rem;
  color: rgba(240, 236, 228, 0.7);
  margin-bottom: 0.5rem;
}

.footer__contact a {
  color: rgba(240, 236, 228, 0.7);
}

.footer__contact a:hover {
  color: var(--color-accent);
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
}

.footer__bottom p {
  font-size: 0.8rem;
  color: rgba(240, 236, 228, 0.4);
}

@media (max-width: 768px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer__desc {
    margin: 0 auto;
  }
}
</style>
