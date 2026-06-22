/* ============================================================
   DATI DEI NEGOZI — modifica solo qui.
   Metti "daConfermare: true" finché il dato non è verificato:
   accanto comparirà un piccolo segnale "da confermare".
   ============================================================ */

const EMAIL = "boutiqueantinea@gmail.com";
const EMAIL_DA_CONFERMARE = false;

// Orari di apertura
const ORARI_STANDARD = "Tutti i giorni · 9:30–13:00 / 16:30–20:00";
const ORARI_MONTALTO = "Tutti i giorni · 9:30–13:00 / 16:30–20:00<br>Sabato sera anche 22:00–24:00";
const ORARI_TARQUINIA = "9:30–13:00 / 16:30–20:00<br>Chiuso il martedì · in estate anche la domenica";

const NEGOZI = [
  {
    nome: "Marina di Montalto di Castro",
    indirizzo: "Lungomare Harmine 55-56, 01014 Montalto di Castro (VT)",
    indirizzoDaConfermare: false,
    orari: ORARI_MONTALTO,
    orariDaConfermare: false,
    telefono: "0766 1901897",
    telefonoDaConfermare: false,
    mapsQuery: "Lungomare Harmine 55, 01014 Montalto di Castro VT"
  },
  {
    nome: "Antinea Beachwear · Marina di Montalto di Castro",
    indirizzo: "Largo Clitunno, 01014 Montalto di Castro (VT)",
    indirizzoDaConfermare: false,
    orari: ORARI_MONTALTO,
    orariDaConfermare: false,
    telefono: "345 3303224",
    telefonoDaConfermare: false,
    mapsQuery: "Largo Clitunno, 01014 Montalto di Castro VT"
  },
  {
    nome: "Tarquinia",
    indirizzo: "Piazza San Giovanni 1, 01016 Tarquinia (VT)",
    indirizzoDaConfermare: false,
    orari: ORARI_TARQUINIA,
    orariDaConfermare: false,
    telefono: "0766 1890427",
    telefonoDaConfermare: false,
    mapsQuery: "Piazza San Giovanni 1, 01016 Tarquinia VT"
  },
  {
    nome: "Tarquinia Lido",
    indirizzo: "Lungomare dei Tirreni 76, 01016 Tarquinia (VT)",
    indirizzoDaConfermare: false,
    orari: ORARI_STANDARD,
    orariDaConfermare: false,
    telefono: "379 1859876",
    telefonoDaConfermare: false,
    mapsQuery: "Lungomare dei Tirreni 76, 01016 Tarquinia VT"
  },
  {
    nome: "Capalbio Marina",
    indirizzo: "Via Umbria 10, 58011 Capalbio (GR)",
    indirizzoDaConfermare: false,
    orari: ORARI_STANDARD,
    orariDaConfermare: false,
    telefono: "345 1696780",
    telefonoDaConfermare: false,
    mapsQuery: "Via Umbria 10, 58011 Capalbio GR"
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
