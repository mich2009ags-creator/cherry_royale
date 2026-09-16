/* =========================================================
   CHERRY ROYALE — dados do acervo
   Para colocar as imagens reais depois, basta trocar o campo
   "image" de cada carro abaixo por um caminho ou URL, ex:
   image: "imagens/mustang.jpg"
   Enquanto "image" ficar como null, o cartão mostra um espaço
   reservado clicável para pré-visualizar uma foto localmente.
   ========================================================= */
const carData = [
  {
    id: "c1",
    name: "Corcel Rubro GT",
    category: "esportivo",
    categoryLabel: "Esportivo",
    tagline: "Motor V6 aspirado, tração traseira, carroceria em fibra leve.",
    desc: "Um esportivo de linhas baixas pensado para estrada, não para vitrine. Suspensão ajustável e escapamento em aço inox com nota grave e contida.",
    year: "2021",
    km: "18.400 km",
    fuel: "Gasolina",
    transmission: "Manual 6v",
    price: "R$ 289.900",
    tag: "Recém-chegado",
    image: null
  },
  {
    id: "c2",
    name: "Damasco Sedan Royale",
    category: "sedan",
    categoryLabel: "Sedã",
    tagline: "Conforto de cabine e acabamento em couro natural costurado à mão.",
    desc: "Sedã executivo com bancos aquecidos, insonorização reforçada e piloto automático adaptativo. Ideal para quem passa horas ao volante sem abrir mão do conforto.",
    year: "2022",
    km: "31.200 km",
    fuel: "Flex",
    transmission: "Automático CVT",
    price: "R$ 172.500",
    tag: null,
    image: null
  },
  {
    id: "c3",
    name: "Bravata SUV Noturna",
    category: "suv",
    categoryLabel: "SUV",
    tagline: "Tração integral, porta-malas ampliado, altura livre do solo de 21cm.",
    desc: "SUV robusto para família e estrada de terra sem perder o refinamento urbano. Central multimídia com câmera 360° e assistente de faixa.",
    year: "2023",
    km: "9.800 km",
    fuel: "Diesel",
    transmission: "Automático 8v",
    price: "R$ 254.900",
    tag: "Quilometragem baixa",
    image: null
  },
  {
    id: "c4",
    name: "Cereja Coupé Vermelha",
    category: "esportivo",
    categoryLabel: "Esportivo",
    tagline: "Edição limitada, pintura vermelho cereja em três camadas.",
    desc: "Apenas 40 unidades produzidas nesta cor. Interior em Alcântara e volante multifuncional em fibra de carbono.",
    year: "2020",
    km: "24.600 km",
    fuel: "Gasolina",
    transmission: "Manual 6v",
    price: "R$ 198.000",
    tag: null,
    image: null
  },
  {
    id: "c5",
    name: "Marfim Sedan Clássico",
    category: "sedan",
    categoryLabel: "Sedã",
    tagline: "Linhas atemporais, motor 2.0 econômico, revisões em dia.",
    desc: "Um clássico moderno para quem valoriza durabilidade e baixo custo de manutenção sem abrir mão da elegância.",
    year: "2019",
    km: "52.100 km",
    fuel: "Flex",
    transmission: "Automático 6v",
    price: "R$ 96.400",
    tag: null,
    image: null
  },
  {
    id: "c6",
    name: "Ouro Velho SUV Premium",
    category: "suv",
    categoryLabel: "SUV",
    tagline: "Teto solar panorâmico, bancos ventilados, sete lugares.",
    desc: "SUV de grande porte pensado para famílias grandes e viagens longas, com espaço de sobra e conforto em todas as fileiras.",
    year: "2022",
    km: "14.900 km",
    fuel: "Gasolina",
    transmission: "Automático 8v",
    price: "R$ 312.000",
    tag: "Últimas unidades",
    image: null
  }
];

const placeholderSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
  <path d="M3 16 L7 10 H17 L21 16"/>
  <path d="M3 16 H21 V19 H3 Z"/>
  <circle cx="7.5" cy="19" r="1.6"/>
  <circle cx="16.5" cy="19" r="1.6"/>
</svg>`;

const carList = document.getElementById('carList');
const carInterestSelect = document.getElementById('carInterest');

function renderCars(){
  carList.innerHTML = '';
  carData.forEach((car, i) => {
    const row = document.createElement('div');
    row.className = 'car-row' + (i % 2 === 1 ? ' reverse' : '');
    row.dataset.category = car.category;
    row.dataset.id = car.id;

    row.innerHTML = `
      <div class="car-media" data-id="${car.id}">
        ${car.tag ? `<span class="car-tag">${car.tag}</span>` : ''}
        <div class="media-fill" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
          ${car.image
            ? `<img src="${car.image}" alt="${car.name}">`
            : `<div class="placeholder">${placeholderSVG}<span>Clique para pré-visualizar uma foto deste carro</span></div>`}
        </div>
        <input type="file" accept="image/*" data-id="${car.id}">
      </div>
      <div class="car-info">
        <div class="car-cat">${car.categoryLabel}</div>
        <h3>${car.name}</h3>
        <p class="tagline">${car.tagline}</p>
        <div class="specs">
          <div><span class="val">${car.year}</span><span class="lab">Ano</span></div>
          <div><span class="val">${car.km}</span><span class="lab">Quilometragem</span></div>
          <div><span class="val">${car.transmission}</span><span class="lab">Câmbio</span></div>
        </div>
        <div class="car-bottom">
          <div class="price">${car.price}<span>à vista</span></div>
          <button class="btn" data-detail="${car.id}">Ver detalhes</button>
        </div>
      </div>
    `;
    carList.appendChild(row);

    const opt = document.createElement('option');
    opt.value = car.id;
    opt.textContent = car.name;
    carInterestSelect.appendChild(opt);
  });
}
renderCars();

/* ---- image placeholder preview (local only, for testing before real photos are ready) ---- */
carList.addEventListener('click', (e) => {
  const media = e.target.closest('.car-media');
  if (media && !e.target.matches('input[type="file"]')) {
    media.querySelector('input[type="file"]').click();
  }
});
carList.addEventListener('change', (e) => {
  if (e.target.matches('input[type="file"]') && e.target.files[0]){
    const url = URL.createObjectURL(e.target.files[0]);
    const fill = e.target.closest('.car-media').querySelector('.media-fill');
    fill.innerHTML = `<img src="${url}" alt="Prévia">`;
  }
});

/* ---- filters ---- */
document.getElementById('filterBar').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  document.querySelectorAll('.car-row').forEach(row => {
    row.classList.toggle('hidden-item', filter !== 'todos' && row.dataset.category !== filter);
  });
});

/* ---- detail modal ---- */
const overlay = document.getElementById('modalOverlay');
function openModal(id){
  const car = carData.find(c => c.id === id);
  if (!car) return;
  document.getElementById('modalMedia').innerHTML = car.image
    ? `<img src="${car.image}" alt="${car.name}">`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--gold);">${placeholderSVG.replace('width="24" height="24"','width="60" height="60"')}</div>`;
  document.getElementById('modalCat').textContent = car.categoryLabel;
  document.getElementById('modalName').textContent = car.name;
  document.getElementById('modalDesc').textContent = car.desc;
  document.getElementById('modalSpecs').innerHTML = `
    <div><span class="val">${car.year}</span><span class="lab">Ano</span></div>
    <div><span class="val">${car.km}</span><span class="lab">Quilometragem</span></div>
    <div><span class="val">${car.fuel}</span><span class="lab">Combustível</span></div>
    <div><span class="val">${car.transmission}</span><span class="lab">Câmbio</span></div>
    <div><span class="val">${car.price}</span><span class="lab">Preço</span></div>
  `;
  overlay.classList.add('open');
}
carList.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-detail]');
  if (btn) openModal(btn.dataset.detail);
});
document.getElementById('modalClose').addEventListener('click', () => overlay.classList.remove('open'));
overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('open'); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') overlay.classList.remove('open'); });

/* ---- header scroll state ---- */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

/* ---- mobile nav ---- */
const burger = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');
burger.addEventListener('click', () => mobileNav.classList.toggle('open'));
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

/* ---- contact form (front-end only demo) ---- */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  document.getElementById('formMsg').textContent = `Obrigado, ${name || 'visitante'}! Recebemos sua mensagem e vamos responder em breve.`;
  e.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();