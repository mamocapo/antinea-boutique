/* ============================================================
   DATI DEI NEGOZI — modifica solo qui.
   Metti "daConfermare: true" finché il dato non è verificato:
   accanto comparirà un piccolo segnale "da confermare".
   ============================================================ */

const EMAIL = "info@antineaboutique.it";      // DA CONFERMARE
const EMAIL_DA_CONFERMARE = true;

// Orari ipotizzati (uguali per tutti finché non mi confermi i veri)
const ORARI_STANDARD = "Tutti i giorni · 9:30–13:00 / 16:30–20:00";

const NEGOZI = [
  {
    nome: "Marina di Montalto di Castro",
    indirizzo: "Lungomare Harmine 55, 01014 Montalto di Castro (VT)",
    indirizzoDaConfermare: false,
    orari: ORARI_STANDARD,
    orariDaConfermare: true,
    telefono: "338 200 9498",
    telefonoDaConfermare: true,
    mapsQuery: "Antinea Boutique, Lungomare Harmine 55, Montalto di Castro"
  },
  {
    nome: "Antinea Beachwear · Marina di Montalto di Castro",
    indirizzo: "Largo Clitunno, 01014 Montalto di Castro (VT)",
    indirizzoDaConfermare: false,
    orari: ORARI_STANDARD,
    orariDaConfermare: true,
    telefono: "338 200 9498",
    telefonoDaConfermare: true,
    mapsQuery: "Antinea Beachwear, Largo Clitunno, Montalto di Castro"
  },
  {
    nome: "Tarquinia",
    indirizzo: "Via Roma 4, 01016 Tarquinia (VT)",
    indirizzoDaConfermare: false,
    orari: ORARI_STANDARD,
    orariDaConfermare: true,
    telefono: "338 200 9498",
    telefonoDaConfermare: true,
    mapsQuery: "Antinea Boutique, Via Roma 4, Tarquinia"
  },
  {
    nome: "Tarquinia Lido",
    indirizzo: "Lungomare dei Tirreni 76, 01016 Tarquinia (VT)",
    indirizzoDaConfermare: false,
    orari: ORARI_STANDARD,
    orariDaConfermare: true,
    telefono: "338 200 9498",
    telefonoDaConfermare: true,
    mapsQuery: "Antinea Boutique, Lungomare dei Tirreni 76, Tarquinia Lido"
  },
  {
    nome: "Capalbio Scalo",
    indirizzo: "Viale Umbria 5/6, 58011 Capalbio (GR)",
    indirizzoDaConfermare: false,
    orari: ORARI_STANDARD,
    orariDaConfermare: true,
    telefono: "338 200 9498",
    telefonoDaConfermare: true,
    mapsQuery: "Antinea Boutique, Viale Umbria 5, Capalbio Scalo"
  }
];

/* ============================================================
   Da qui in giù non serve toccare nulla.
   ============================================================ */

const badge = (mostra) =>
  mostra ? ' <span class="da-confermare">da confermare</span>' : "";

function mapsUrl(query) {
  return "https://www.google.com/maps/dir/?api=1&destination=" +
         encodeURIComponent(query);
}

function telPulito(t) {
  return "tel:" + t.replace(/\s/g, "");
}

const sedi = document.querySelector("#sedi");

sedi.innerHTML = NEGOZI.map((n) => `
  <article class="sede">
    <h2>${n.nome}</h2>
    <p class="indirizzo">${n.indirizzo}${badge(n.indirizzoDaConfermare)}</p>
    <p class="orari">${n.orari}${badge(n.orariDaConfermare)}</p>
    <div class="azioni">
      <a class="btn btn-primario" href="${mapsUrl(n.mapsQuery)}" target="_blank" rel="noopener">Indicazioni →</a>
      <a class="btn btn-secondario" href="${telPulito(n.telefono)}">Chiama</a>
    </div>
  </article>
`).join("");

// collega l'email nel footer
const emailLink = document.querySelector("#email-link");
emailLink.href = "mailto:" + EMAIL;
emailLink.textContent = "scrivici · " + EMAIL + (EMAIL_DA_CONFERMARE ? "  (da confermare)" : "");
