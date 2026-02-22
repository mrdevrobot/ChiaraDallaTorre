<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled, 'header--open': menuOpen }">
    <div class="container header__inner">
      <router-link to="/" class="header__logo" @click="closeMenu">
        <span class="header__logo-name">Chiara Dalla Torre</span>
        <span class="header__logo-sub">Maestro di Pianoforte</span>
      </router-link>

      <button
        class="header__toggle"
        :class="{ active: menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="header__nav" :class="{ open: menuOpen }">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="header__link"
          @click="closeMenu"
        >
          {{ link.label }}
        </router-link>
        <router-link to="/contatti" class="btn btn--primary header__cta" @click="closeMenu">
          Contattami
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/chi-sono', label: 'Chi Sono' },
  { to: '/lezioni', label: 'Lezioni' },
  { to: '/musica', label: 'Musica' },
  { to: '/contatti', label: 'Contatti' },
]

const closeMenu = () => {
  menuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition: all 0.3s ease;
  height: var(--nav-height);
}

.header--scrolled {
  background: rgba(250, 248, 245, 0.97);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(10px);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
}

.header__logo {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  line-height: 1.1;
}

.header__logo-name {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-text-on-dark);
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.header--scrolled .header__logo-name {
  color: var(--color-primary);
}

.header__logo-sub {
  font-size: 0.7rem;
  font-weight: 400;
  color: var(--color-accent);
  letter-spacing: 3px;
  text-transform: uppercase;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 1.8rem;
}

.header__link {
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(240, 236, 228, 0.9);
  text-decoration: none;
  position: relative;
  padding: 0.25rem 0;
  letter-spacing: 0.3px;
  transition: color 0.3s ease;
}

.header--scrolled .header__link {
  color: var(--color-text);
}

.header__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--color-accent);
  transition: width 0.3s ease;
}

.header__link:hover::after,
.header__link.router-link-active::after {
  width: 100%;
}

.header__link.router-link-active {
  color: var(--color-accent);
  font-weight: 500;
}

.header--scrolled .header__link.router-link-active {
  color: var(--color-secondary);
}

.header__cta {
  padding: 0.5rem 1.2rem;
  font-size: 0.85rem;
}

.header__toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 28px;
  height: 20px;
  position: relative;
  z-index: 1001;
}

.header__toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-text-on-dark);
  position: absolute;
  transition: all 0.3s ease;
}

.header--scrolled .header__toggle span {
  background: var(--color-primary);
}

.header__toggle span:nth-child(1) { top: 0; }
.header__toggle span:nth-child(2) { top: 9px; }
.header__toggle span:nth-child(3) { top: 18px; }

.header__toggle.active span:nth-child(1) {
  top: 9px;
  transform: rotate(45deg);
}

.header__toggle.active span:nth-child(2) {
  opacity: 0;
}

.header__toggle.active span:nth-child(3) {
  top: 9px;
  transform: rotate(-45deg);
}

@media (max-width: 768px) {
  .header__toggle {
    display: block;
  }

  .header__nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: var(--color-bg);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: right 0.3s ease;
    box-shadow: var(--shadow-lg);
  }

  .header__nav.open {
    right: 0;
  }

  .header--open::before {
    content: '';
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
  }

  .header__nav {
    z-index: 1000;
  }
}
</style>
