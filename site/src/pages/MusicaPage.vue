<template>
  <div class="musica">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>La Musica</h1>
        <div class="section__divider" style="margin-top: 1rem;"></div>
        <p class="page-hero__sub">
          Repertorio, compositrici dimenticate e musicisti che hanno segnato il mio percorso
        </p>
      </div>
    </section>

    <!-- Repertorio Femminile -->
    <section class="section women">
      <div class="container">
        <h2 class="section__title">Voci dal Silenzio: Le Compositrici Dimenticate</h2>
        <div class="section__divider"></div>
        <p class="section__subtitle">
          Per secoli, donne straordinarie hanno composto musica di altissimo valore,
          spesso ai margini della storia. Riscoprirle è un atto di giustizia e di arricchimento musicale.
        </p>

        <div class="women__intro">
          <p>
            Durante il mio percorso di formazione, ho avuto l'opportunità di approfondire
            il tema della <strong>donna-musicista</strong> attraverso un corso dedicato,
            dove sono state prese in esame le vite e le opere di compositrici che hanno vissuto
            ai margini in un periodo storico di enorme produzione musicale.
          </p>
          <p>
            Questa esperienza ha trasformato profondamente la mia visione del repertorio:
            non si tratta solo di riscoprire brani dimenticati, ma di restituire una voce
            a personalità artistiche che meritano il loro posto nella storia della musica.
            Oggi integro attivamente questo repertorio nelle mie lezioni e nei miei programmi.
          </p>
        </div>

        <div class="grid grid--3 composers-grid">
          <div class="card composer">
            <div class="composer__portrait">CS</div>
            <h3>Clara Schumann</h3>
            <p class="composer__years">1819 – 1896</p>
            <p>
              Pianista virtuosa e compositrice tedesca, moglie di Robert Schumann.
              Una delle più grandi interpreti del suo tempo, le sue composizioni
              rivelano un'intensità espressiva straordinaria. Il suo
              <em>Concerto per pianoforte in La minore</em>, scritto a soli 14 anni,
              testimonia un talento precoce ed eccezionale.
            </p>
          </div>

          <div class="card composer">
            <div class="composer__portrait">FM</div>
            <h3>Fanny Mendelssohn</h3>
            <p class="composer__years">1805 – 1847</p>
            <p>
              Sorella di Felix Mendelssohn, fu una compositrice prolifica la cui
              produzione fu a lungo oscurata dal fratello. Le sue <em>Lieder</em>
              e i lavori per pianoforte solo mostrano una sensibilità melodica
              e un'originalità armonica che rivaleggia con i grandi del suo tempo.
            </p>
          </div>

          <div class="card composer">
            <div class="composer__portrait">AB</div>
            <h3>Amy Beach</h3>
            <p class="composer__years">1867 – 1944</p>
            <p>
              Prima compositrice americana a scrivere una sinfonia di successo.
              Il suo stile unisce il tardo Romanticismo europeo con una sensibilità
              tipicamente americana. La sua <em>Gaelic Symphony</em> e il
              <em>Concerto per pianoforte</em> sono capolavori ancora oggi sottovalutati.
            </p>
          </div>

          <div class="card composer">
            <div class="composer__portrait">CC</div>
            <h3>Cécile Chaminade</h3>
            <p class="composer__years">1857 – 1944</p>
            <p>
              Compositrice e pianista francese che godette di grande fama in vita.
              Le sue opere per pianoforte, tra cui i celebri <em>Études de concert</em>,
              uniscono eleganza parigina e virtuosismo, rendendole perfette
              per lo studio del repertorio romantico francese.
            </p>
          </div>

          <div class="card composer">
            <div class="composer__portrait">MB</div>
            <h3>Mel Bonis</h3>
            <p class="composer__years">1858 – 1937</p>
            <p>
              Pseudonimo di Mélanie Bonis, compositrice francese allieva di
              César Franck al Conservatorio di Parigi. La sua vasta produzione
              include pezzi per pianoforte di rara bellezza, con un linguaggio
              armonico raffinato che anticipa l'impressionismo.
            </p>
          </div>

          <div class="card composer">
            <div class="composer__portrait">NB</div>
            <h3>Nadia Boulanger</h3>
            <p class="composer__years">1887 – 1979</p>
            <p>
              Forse la più grande pedagoga musicale del XX secolo. Il suo metodo
              di insegnamento ha formato generazioni di compositori — da Copland
              a Piazzolla. Le sue opere didattiche e il suo pensiero sulla musica
              sono una fonte d'ispirazione costante per il mio insegnamento.
            </p>
          </div>
        </div>

        <div class="women__more">
          <p>
            Tra le altre compositrici che studio e propongo ai miei allievi:
            <strong>Lili Boulanger</strong>, sorella minore di Nadia e prima donna
            a vincere il Prix de Rome per la composizione, e
            <strong>Sadie Harrison</strong>, compositrice contemporanea che
            continua a portare avanti la tradizione della musica scritta da donne.
          </p>
          <p>
            Integrare questo repertorio nello studio del pianoforte non è solo
            un atto di riscoperta: è un modo per offrire agli allievi una visione
            più completa e onesta della storia della musica.
          </p>
        </div>
      </div>
    </section>

    <!-- Musicisti Importanti -->
    <section class="section section--alt influences">
      <div class="container">
        <h2 class="section__title">Musicisti che Mi Hanno Ispirata</h2>
        <div class="section__divider"></div>
        <p class="section__subtitle">
          Maestri il cui insegnamento e la cui arte hanno plasmato
          il mio modo di suonare e insegnare
        </p>

        <div class="influences__list">
          <div class="influence">
            <div class="influence__icon"><SiteIcon name="piano" :size="28" color="var(--color-accent)" /></div>
            <div class="influence__content">
              <h3>Pietro De Maria</h3>
              <p>
                Pianista italiano tra i più raffinati della sua generazione. La sua
                integrale delle Sonate di Beethoven e l'approccio rigoroso ma poetico
                all'interpretazione sono un riferimento costante nel mio lavoro.
                La sua capacità di rendere ogni nota necessaria è un insegnamento
                che porto con me.
              </p>
            </div>
          </div>

          <div class="influence">
            <div class="influence__icon"><SiteIcon name="piano" :size="28" color="var(--color-accent)" /></div>
            <div class="influence__content">
              <h3>Andrea Lucchesini</h3>
              <p>
                Allievo di Maria Tipo, è un interprete di riferimento nel panorama
                italiano. La sua attenzione maniacale per il dettaglio sonoro e la
                chiarezza strutturale delle sue interpretazioni mi hanno insegnato
                che la bellezza nasce dalla precisione.
              </p>
            </div>
          </div>

          <div class="influence">
            <div class="influence__icon"><SiteIcon name="piano" :size="28" color="var(--color-accent)" /></div>
            <div class="influence__content">
              <h3>Filippo Gamba</h3>
              <p>
                Vincitore del Concorso Internazionale di Ginevra, Filippo Gamba
                combina un'intensità emotiva rara con una solidità tecnica impeccabile.
                Le sue Masterclass sono state fondamentali per il mio approccio
                all'interpretazione del repertorio romantico.
              </p>
            </div>
          </div>

          <div class="influence">
            <div class="influence__icon"><SiteIcon name="piano" :size="28" color="var(--color-accent)" /></div>
            <div class="influence__content">
              <h3>Annibale Rebaudengo</h3>
              <p>
                Didatta di riferimento nel panorama italiano, il suo lavoro sulla
                metodologia dell'insegnamento pianistico ha influenzato profondamente
                il mio approccio pedagogico. La sua visione dell'insegnamento come
                atto creativo risuona nel mio modo di condurre le lezioni.
              </p>
            </div>
          </div>

          <div class="influence">
            <div class="influence__icon"><SiteIcon name="piano" :size="28" color="var(--color-accent)" /></div>
            <div class="influence__content">
              <h3>Il M° Irene Russo</h3>
              <p>
                La mia insegnante al Conservatorio, che mi ha guidata negli anni
                decisivi della mia formazione. Il suo approccio paziente e attento
                alle esigenze dell'allievo è il modello a cui mi ispiro
                quotidianamente nel mio insegnamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Discografia & Repertorio -->
    <section class="section discography">
      <div class="container">
        <div class="disco__grid">
          <div class="disco__content">
            <h2>Discografia e Repertorio</h2>
            <div class="section__divider" style="margin-left: 0;"></div>
            <p>
              Nel 2016 ho realizzato la mia <strong>prima produzione discografica</strong>
              con musiche di <em>Bach/Busoni</em>, pubblicata dal Conservatorio di
              Castelfranco Veneto. Un progetto che raccoglie il culmine del mio
              percorso di studi e la mia passione per la trascrizione pianistica.
            </p>
            <p>
              Il mio repertorio spazia dal <strong>Barocco</strong> al
              <strong>Novecento</strong>, con particolare attenzione a:
            </p>
            <ul class="disco__list">
              <li>J.S. Bach e le trascrizioni di Busoni</li>
              <li>Il repertorio classico: Mozart, Beethoven</li>
              <li>Il grande Romanticismo: Chopin, Schumann, Liszt</li>
              <li>La scuola francese: Debussy, Ravel</li>
              <li>Il repertorio delle compositrici dimenticate</li>
              <li>La musica da camera con flauto traverso</li>
            </ul>
          </div>
          <div class="disco__visual">
            <div class="disco__album">
              <img
                src="@/assets/images/mani_pianoforte_3_bn.JPG"
                alt="Mani al pianoforte - Bach Busoni"
                class="disco__album-photo"
                loading="lazy"
              />
              <div class="disco__album-label">
                <strong>Bach / Busoni</strong>
                <small>2016</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section--dark cta-section">
      <div class="container" style="text-align: center;">
        <h2>Esplora la Musica con Me</h2>
        <div class="section__divider" style="background: var(--color-accent);"></div>
        <p style="max-width: 520px; margin: 0 auto; color: rgba(240,236,228,0.85); font-size: 1.05rem;">
          Dalla musica classica al repertorio femminile dimenticato,
          ogni lezione è un viaggio nella bellezza del pianoforte.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 1.5rem;">
          <router-link to="/lezioni" class="btn btn--light">Scopri le Lezioni</router-link>
          <router-link to="/contatti" class="btn btn--light">Contattami</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import SiteIcon from '@/components/SiteIcon.vue'

useHead({
  title: 'Musica e Repertorio | Chiara Dalla Torre',
  meta: [
    {
      name: 'description',
      content:
        'Scopri il repertorio di Chiara Dalla Torre: dalle compositrici dimenticate come Clara Schumann e Fanny Mendelssohn, ai maestri che hanno ispirato il suo percorso pianistico.',
    },
    {
      name: 'keywords',
      content:
        'repertorio pianoforte, compositrici donne, Clara Schumann, Fanny Mendelssohn, Amy Beach, Nadia Boulanger, pianoforte repertorio femminile, Bach Busoni',
    },
  ],
})
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

/* Women Section */
.women__intro {
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
}

.women__intro p {
  font-size: 1.05rem;
  line-height: 1.8;
}

.composers-grid {
  margin-bottom: 3rem;
}

.composer {
  text-align: center;
  padding: 2rem;
}

.composer__portrait {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-secondary), var(--color-accent));
  color: var(--color-white);
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.composer h3 {
  margin-bottom: 0.25rem;
}

.composer__years {
  font-size: 0.85rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
  font-weight: 400;
}

.composer p:last-child {
  font-size: 0.92rem;
  line-height: 1.6;
  text-align: left;
}

.women__more {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-bg-alt);
  border-radius: var(--radius);
  border-left: 3px solid var(--color-accent);
}

.women__more p {
  font-size: 1rem;
  line-height: 1.7;
}

/* Influences */
.influences__list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.influence {
  display: flex;
  gap: 1.5rem;
  align-items: start;
  padding: 1.5rem;
  background: var(--color-white);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition);
}

.influence:hover {
  box-shadow: var(--shadow-md);
}

.influence__icon {
  font-size: 2rem;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-alt);
  border-radius: 50%;
}

.influence__content h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.influence__content p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-text-light);
  margin-bottom: 0;
}

/* Discography */
.disco__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
}

.disco__content h2 {
  margin-bottom: 0.5rem;
}

.disco__list {
  margin-top: 0.5rem;
}

.disco__list li {
  font-size: 0.95rem;
  padding: 0.4rem 0 0.4rem 1.5rem;
  position: relative;
}

.disco__list li::before {
  content: '♪';
  position: absolute;
  left: 0;
  color: var(--color-accent);
}

.disco__album {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
}

.disco__album-photo {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
}

.disco__album-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(transparent, rgba(44, 24, 16, 0.85));
  color: var(--color-text-on-dark);
  text-align: center;
}

.disco__album-label strong {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  display: block;
}

.disco__album-label small {
  font-size: 0.85rem;
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .disco__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .disco__visual {
    max-width: 250px;
    margin: 0 auto;
  }

  .influence {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
}
</style>
