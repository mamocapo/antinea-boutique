/* ============================================================
   PRODOTTI — modifica solo qui.
   Per ogni prodotto: marca, nome, prezzo, taglie, foto.
   Le foto stanno in img/prodotti/
   ============================================================ */

const WHATSAPP = "393351354905";   // +39 335 135 4905 (formato internazionale)

const PRODOTTI = [
  {
    marca: "MC2 Saint Barth",
    nome: "Costume Comfort bianco",
    prezzo: "€ 139",
    prezzoDaConfermare: true,
    taglie: ["S", "M", "L", "XL", "XXL"],
    foto: "img/prodotti/mc2-comfort-bianco.jpg"
  },
  {
    marca: "MC2 Saint Barth",
    nome: "Costume Tinta Unita ultralight",
    prezzo: "€ 145",
    prezzoDaConfermare: true,
    taglie: ["S", "M", "L", "XL", "XXL"],
    foto: "img/prodotti/mc2-tinta-unita.jpg"
  },
  {
    marca: "Ottod'Ame",
    nome: "Abito lungo a righe",
    prezzo: "€ 163",
    prezzoDaConfermare: true,
    taglie: ["XS", "S", "M", "L"],
    foto: "img/prodotti/ottodame-abito.jpg"
  }
];

/* ============================================================
   Da qui in giù non serve toccare nulla.
   ============================================================ */

const griglia = document.querySelector("#catalogo");

griglia.innerHTML = PRODOTTI.map((p, i) => `
  <article class="prodotto" data-i="${i}">
    <div class="foto-wrap">
      <img src="${p.foto}" alt="${p.marca} ${p.nome}" loading="lazy">
    </div>
    <p class="marca">${p.marca}</p>
    <h2 class="nome">${p.nome}</h2>
    <p class="prezzo">${p.prezzo}</p>
    <div class="taglie">
      ${p.taglie.map((t) => `<button class="taglia" data-taglia="${t}">${t}</button>`).join("")}
    </div>
    <a class="btn-ordina" target="_blank" rel="noopener">Ordina su WhatsApp</a>
  </article>
`).join("");

// costruisce il messaggio WhatsApp con la taglia scelta
function aggiornaLink(card) {
  const i = card.dataset.i;
  const p = PRODOTTI[i];
  const taglia = card.dataset.taglia || "";
  const testo =
    `Ciao Antinea! Vorrei ordinare:\n` +
    `• ${p.marca} — ${p.nome}\n` +
    `• Prezzo: ${p.prezzo}\n` +
    (taglia ? `• Taglia: ${taglia}\n` : `• Taglia: (da indicare)\n`) +
    `È disponibile?`;
  card.querySelector(".btn-ordina").href =
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(testo)}`;
}

// gestisce la scelta della taglia e prepara i link iniziali
document.querySelectorAll(".prodotto").forEach((card) => {
  aggiornaLink(card);
  card.querySelectorAll(".taglia").forEach((btn) => {
    btn.addEventListener("click", () => {
      card.querySelectorAll(".taglia").forEach((b) => b.classList.remove("scelta"));
      btn.classList.add("scelta");
      card.dataset.taglia = btn.dataset.taglia;
      aggiornaLink(card);
    });
  });
});
