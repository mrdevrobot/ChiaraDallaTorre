<template>
  <div class="contatti">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>Contatti</h1>
        <div class="section__divider" style="margin-top: 1rem;"></div>
        <p class="page-hero__sub">
          Inizia il tuo percorso musicale: scrivimi per qualsiasi informazione
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact">
      <div class="container">
        <div class="contact__grid">
          <!-- Form -->
          <div class="contact__form-wrapper">
            <h2>Scrivimi un Messaggio</h2>
            <div class="section__divider" style="margin-left: 0;"></div>
            <p class="contact__form-intro">
              Compila il modulo per richiedere informazioni sulle lezioni,
              prenotare una lezione di prova o semplicemente per conoscerci.
              Ti risponderò il prima possibile!
            </p>

            <form class="contact__form" @submit.prevent="handleSubmit">
              <div class="form__group">
                <label for="name">Nome e Cognome *</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Il tuo nome"
                />
              </div>

              <div class="form__row">
                <div class="form__group">
                  <label for="email">Email *</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="la.tua@email.it"
                  />
                </div>
                <div class="form__group">
                  <label for="phone">Telefono</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    placeholder="+39 ..."
                  />
                </div>
              </div>

              <div class="form__group">
                <label for="level">Livello di esperienza</label>
                <select id="level" v-model="form.level">
                  <option value="">Seleziona il tuo livello</option>
                  <option value="principiante">Principiante — Non ho mai suonato</option>
                  <option value="base">Base — Ho qualche nozione</option>
                  <option value="intermedio">Intermedio — Studio da qualche anno</option>
                  <option value="avanzato">Avanzato — Preparazione conservatorio/concorsi</option>
                </select>
              </div>

              <div class="form__group">
                <label for="interest">Sono interessato/a a:</label>
                <select id="interest" v-model="form.interest">
                  <option value="">Seleziona</option>
                  <option value="prova">Lezione di prova</option>
                  <option value="scoperta">Pacchetto Scoperta (4 lezioni)</option>
                  <option value="percorso">Pacchetto Percorso (12 lezioni)</option>
                  <option value="intensivo">Pacchetto Intensivo (24 lezioni)</option>
                  <option value="info">Solo informazioni generali</option>
                </select>
              </div>

              <div class="form__group">
                <label for="message">Messaggio *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  placeholder="Raccontami qualcosa di te e dei tuoi obiettivi musicali..."
                ></textarea>
              </div>

              <div class="form__privacy">
                <label class="form__checkbox">
                  <input type="checkbox" v-model="form.privacy" required />
                  <span>
                    Acconsento al trattamento dei miei dati personali ai sensi del
                    Regolamento UE 2016/679 (GDPR) *
                  </span>
                </label>
              </div>

              <button type="submit" class="btn btn--primary" :disabled="submitted">
                {{ submitted ? 'Messaggio Inviato' : 'Invia Messaggio' }}
              </button>
            </form>
          </div>

          <!-- Info Sidebar -->
          <div class="contact__info">
            <div class="contact__card">
              <h3>Informazioni</h3>
              <div class="contact__details">
                <div class="contact__detail">
                  <span class="contact__icon"><SiteIcon name="mapPin" :size="20" /></span>
                  <div>
                    <strong>Studio</strong>
                    <p>San Donà di Piave (VE)<br />Veneto, Italia</p>
                  </div>
                </div>
                <div class="contact__detail">
                  <span class="contact__icon"><SiteIcon name="mail" :size="20" /></span>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:info@chiaradallatorre.it">info@chiaradallatorre.it</a></p>
                  </div>
                </div>
                <div class="contact__detail">
                  <span class="contact__icon"><SiteIcon name="clock" :size="20" /></span>
                  <div>
                    <strong>Disponibilità</strong>
                    <p>Lunedì – Sabato<br />Pomeriggio e sera</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="contact__card contact__card--accent">
              <h3>Lezione di Prova</h3>
              <p>
                La prima lezione conoscitiva è <strong>senza impegno</strong>.
                È un'occasione per conoscerci, valutare il tuo livello e capire
                insieme quale percorso sia più adatto a te.
              </p>
            </div>

            <div class="contact__card">
              <h3>Domande Frequenti</h3>
              <div class="faq">
                <details class="faq__item">
                  <summary>A che età si può iniziare?</summary>
                  <p>
                    Si può iniziare dai 6 anni in su. Non c'è un limite di età massimo:
                    molti adulti iniziano il pianoforte con grande soddisfazione.
                  </p>
                </details>
                <details class="faq__item">
                  <summary>Serve avere un pianoforte a casa?</summary>
                  <p>
                    È consigliato per poter esercitarsi tra una lezione e l'altra.
                    All'inizio anche una tastiera pesata può andare bene. Posso
                    consigliarti nella scelta dello strumento.
                  </p>
                </details>
                <details class="faq__item">
                  <summary>Con quale frequenza si svolgono le lezioni?</summary>
                  <p>
                    Il ritmo consigliato è una lezione a settimana, ma è possibile
                    concordare frequenze diverse in base alle esigenze.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useHead } from '@unhead/vue'
import SiteIcon from '@/components/SiteIcon.vue'

useHead({
  title: 'Contatti | Chiara Dalla Torre - Maestro di Pianoforte',
  meta: [
    {
      name: 'description',
      content:
        'Contatta Chiara Dalla Torre per informazioni sulle lezioni di pianoforte a San Donà di Piave. Prima lezione conoscitiva senza impegno.',
    },
    {
      name: 'keywords',
      content:
        'contatti insegnante pianoforte, lezioni pianoforte San Donà di Piave, prenota lezione pianoforte, informazioni corsi pianoforte',
    },
  ],
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  level: '',
  interest: '',
  message: '',
  privacy: false,
})

const submitted = ref(false)

const handleSubmit = () => {
  // In production, this would send the form data to a backend
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    Object.assign(form, {
      name: '',
      email: '',
      phone: '',
      level: '',
      interest: '',
      message: '',
      privacy: false,
    })
  }, 3000)
}
</script>

<style scoped>
/* Page Hero */
.page-hero {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, var(--color-bg-dark) 0%, #3d2317 100%);
  text-align: center;
  color: var(--color-text-on-dark);
}

.page-hero h1 {
  color: var(--color-text-on-dark);
  font-weight: 300;
  letter-spacing: 2px;
}

.page-hero__sub {
  color: rgba(240, 236, 228, 0.7);
  font-size: 1.1rem;
  font-weight: 300;
  margin-top: 1rem;
}

/* Contact Grid */
.contact__grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact__form-wrapper h2 {
  margin-bottom: 0.5rem;
}

.contact__form-intro {
  color: var(--color-text-light);
  margin-bottom: 2rem;
  font-size: 1rem;
}

/* Form */
.form__group {
  margin-bottom: 1.25rem;
}

.form__group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-primary);
  margin-bottom: 0.4rem;
}

.form__group input,
.form__group select,
.form__group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--color-text);
  background: var(--color-white);
  transition: border-color 0.3s;
}

.form__group input:focus,
.form__group select:focus,
.form__group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(196, 151, 59, 0.1);
}

.form__group textarea {
  resize: vertical;
  min-height: 120px;
}

.form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form__privacy {
  margin-bottom: 1.5rem;
}

.form__checkbox {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-text-light);
  cursor: pointer;
}

.form__checkbox input {
  margin-top: 0.15rem;
  flex-shrink: 0;
}

/* Contact Cards */
.contact__info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact__card {
  background: var(--color-bg-alt);
  padding: 2rem;
  border-radius: var(--radius);
}

.contact__card--accent {
  background: linear-gradient(135deg, var(--color-secondary), #a07a1a);
  color: var(--color-white);
}

.contact__card--accent h3 {
  color: var(--color-white);
}

.contact__card--accent p {
  color: rgba(255, 255, 255, 0.9);
}

.contact__card h3 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.contact__details {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact__detail {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contact__icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.contact__detail strong {
  display: block;
  font-size: 0.9rem;
  color: var(--color-primary);
  margin-bottom: 0.15rem;
}

.contact__detail p {
  font-size: 0.88rem;
  color: var(--color-text-light);
  margin: 0;
  line-height: 1.5;
}

.contact__detail a {
  color: var(--color-secondary);
}

/* FAQ */
.faq {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.faq__item {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.75rem;
}

.faq__item summary {
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-primary);
  padding: 0.5rem 0;
  list-style: none;
}

.faq__item summary::-webkit-details-marker {
  display: none;
}

.faq__item summary::before {
  content: '+ ';
  color: var(--color-accent);
  font-weight: 600;
}

.faq__item[open] summary::before {
  content: '− ';
}

.faq__item p {
  font-size: 0.88rem;
  color: var(--color-text-light);
  padding: 0.5rem 0 0 1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .contact__grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .form__row {
    grid-template-columns: 1fr;
  }
}
</style>
