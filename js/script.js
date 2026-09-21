const carData = [

  {
    id:"c1",
    name:"Corcel Rubro GT",
    category:"esportivo",
    categoryLabel:"Esportivo",
    tagline:"Motor V6 aspirado, tração traseira, carroceria em fibra leve.",
    desc:"Um esportivo de linhas baixas pensado para estrada, não para vitrine. Suspensão ajustável e escapamento em aço inox com nota grave e contida.",
    year:"2021",
    km:"18.400 km",
    fuel:"Gasolina",
    transmission:"Manual 6v",
    price:"R$ 300.900",
    tag:"Recém-chegado",
    image:"imagens/corcel-rubro.jpg"
  },

  {
    id:"c2",
    name:"Damasco Sedan Royale",
    category:"sedan",
    categoryLabel:"Sedã",
    tagline:"Conforto de cabine e acabamento em couro natural costurado à mão.",
    desc:"Sedã executivo com bancos aquecidos, insonorização reforçada e piloto automático adaptativo. Ideal para quem passa horas ao volante sem abrir mão do conforto.",
    year:"2022",
    km:"31.200 km",
    fuel:"Flex",
    transmission:"Automático CVT",
    price:"R$ 350.500",
    tag:null,
    image:"imagens/damasco-sedan.jpg"
  },

  {
    id:"c3",
    name:"Bravata SUV Noturna",
    category:"suv",
    categoryLabel:"SUV",
    tagline:"Tração integral, porta-malas ampliado, altura livre do solo de 21cm.",
    desc:"SUV robusto para família e estrada de terra sem perder o refinamento urbano. Central multimídia com câmera 360° e assistente de faixa.",
    year:"2023",
    km:"9.800 km",
    fuel:"Diesel",
    transmission:"Automático 8v",
    price:"R$ 400.900",
    tag:"Quilometragem baixa",
    image:"imagens/bravata-suv.jpg"
  },

  {
    id:"c4",
    name:"Cereja Coupé Vermelha",
    category:"esportivo",
    categoryLabel:"Esportivo",
    tagline:"Edição limitada, pintura vermelho cereja em três camadas.",
    desc:"Apenas 40 unidades produzidas nesta cor. Interior em Alcântara e volante multifuncional em fibra de carbono.",
    year:"2020",
    km:"24.600 km",
    fuel:"Gasolina",
    transmission:"Manual 6v",
    price:"R$ 800.000",
    tag:null,
    image:"imagens/cereja-coupe.jpg"
  },

  {
    id:"c5",
    name:"Marfim Sedan Clássico",
    category:"sedan",
    categoryLabel:"Sedã",
    tagline:"Linhas atemporais, motor 2.0 econômico, revisões em dia.",
    desc:"Um clássico moderno para quem valoriza durabilidade e baixo custo de manutenção sem abrir mão da elegância.",
    year:"2019",
    km:"52.100 km",
    fuel:"Flex",
    transmission:"Automático 6v",
    price:"R$ 120.400",
    tag:null,
    image:"imagens/marfim-sedan.jpg"
  },

  {
    id:"c6",
    name:"Ouro Velho SUV Premium",
    category:"suv",
    categoryLabel:"SUV",
    tagline:"Teto solar panorâmico, bancos ventilados, sete lugares.",
    desc:"SUV de grande porte pensado para famílias grandes e viagens longas, com espaço de sobra e conforto em todas as fileiras.",
    year:"2022",
    km:"14.900 km",
    fuel:"Gasolina",
    transmission:"Automático 8v",
    price:"R$ 500.000",
    tag:"Últimas unidades",
    image:"imagens/ouro-velho-suv.jpg"
  }

];


const carList =
  document.getElementById("carList");

const carInterestSelect =
  document.getElementById("carInterest");


/* RENDERIZA OS CARROS */

function renderCars(){

  carList.innerHTML = "";

  carInterestSelect.innerHTML =
    '<option value="">Selecione (opcional)</option>';


  carData.forEach((car,index)=>{

    const row =
      document.createElement("div");


    row.className =
      "car-row" +
      (index % 2 === 1 ? " reverse" : "");


    row.dataset.category =
      car.category;

    row.dataset.id =
      car.id;


    row.innerHTML = `

      <div
        class="car-media"
        data-id="${car.id}"
      >

        ${
          car.tag
          ? `<span class="car-tag">${car.tag}</span>`
          : ""
        }


        <div
          class="media-fill"
          style="
            width:100%;
            height:100%;
          "
        >

          <img
            src="${car.image}"
            alt="${car.name}"
            loading="lazy"
            onerror="
              this.style.display='none';
              this.parentElement.innerHTML=
              '<div style=&quot;
                display:flex;
                align-items:center;
                justify-content:center;
                width:100%;
                height:100%;
                color:var(--gold);
                font-size:.85rem;
                text-align:center;
                padding:20px;
              &quot;>
              Imagem não encontrada.
              </div>';
            "
          >

        </div>

      </div>


      <div class="car-info">

        <div class="car-cat">
          ${car.categoryLabel}
        </div>

        <h3>
          ${car.name}
        </h3>

        <p class="tagline">
          ${car.tagline}
        </p>


        <div class="specs">

          <div>
            <span class="val">
              ${car.year}
            </span>

            <span class="lab">
              Ano
            </span>
          </div>


          <div>
            <span class="val">
              ${car.km}
            </span>

            <span class="lab">
              Quilometragem
            </span>
          </div>


          <div>
            <span class="val">
              ${car.transmission}
            </span>

            <span class="lab">
              Câmbio
            </span>
          </div>

        </div>


        <div class="car-bottom">

          <div class="price">

            ${car.price}

            <span>
              à vista
            </span>

          </div>


          <button
            class="btn"
            data-detail="${car.id}"
          >
            Ver detalhes
          </button>

        </div>

      </div>

    `;


    carList.appendChild(row);


    const option =
      document.createElement("option");

    option.value =
      car.id;

    option.textContent =
      car.name;

    carInterestSelect.appendChild(option);

  });

}


renderCars();


/* FILTROS */

document
  .getElementById("filterBar")
  .addEventListener("click",(event)=>{

    const button =
      event.target.closest(".filter-btn");

    if(!button) return;


    document
      .querySelectorAll(".filter-btn")
      .forEach(btn =>
        btn.classList.remove("active")
      );


    button.classList.add("active");


    const filter =
      button.dataset.filter;


    document
      .querySelectorAll(".car-row")
      .forEach(row=>{

        const hide =
          filter !== "todos" &&
          row.dataset.category !== filter;

        row.classList.toggle(
          "hidden-item",
          hide
        );

      });

  });


/* MODAL */

const overlay =
  document.getElementById(
    "modalOverlay"
  );


function openModal(id){

  const car =
    carData.find(
      item => item.id === id
    );


  if(!car) return;


  document.getElementById(
    "modalMedia"
  ).innerHTML = `

    <img
      src="${car.image}"
      alt="${car.name}"
    >

  `;


  document.getElementById(
    "modalCat"
  ).textContent =
    car.categoryLabel;


  document.getElementById(
    "modalName"
  ).textContent =
    car.name;


  document.getElementById(
    "modalDesc"
  ).textContent =
    car.desc;


  document.getElementById(
    "modalSpecs"
  ).innerHTML = `

    <div>

      <span class="val">
        ${car.year}
      </span>

      <span class="lab">
        Ano
      </span>

    </div>


    <div>

      <span class="val">
        ${car.km}
      </span>

      <span class="lab">
        Quilometragem
      </span>

    </div>


    <div>

      <span class="val">
        ${car.fuel}
      </span>

      <span class="lab">
        Combustível
      </span>

    </div>


    <div>

      <span class="val">
        ${car.transmission}
      </span>

      <span class="lab">
        Câmbio
      </span>

    </div>


    <div>

      <span class="val">
        ${car.price}
      </span>

      <span class="lab">
        Preço
      </span>

    </div>

  `;


  overlay.classList.add("open");

}


/* BOTÃO DETALHES */

carList.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        "[data-detail]"
      );


    if(button){

      openModal(
        button.dataset.detail
      );

    }

  }
);


/* FECHAR MODAL */

document
  .getElementById("modalClose")
  .addEventListener(
    "click",
    ()=>{
      overlay.classList.remove("open");
    }
  );


overlay.addEventListener(
  "click",
  event => {

    if(
      event.target === overlay
    ){

      overlay.classList.remove(
        "open"
      );

    }

  }
);


document.addEventListener(
  "keydown",
  event => {

    if(event.key === "Escape"){

      overlay.classList.remove(
        "open"
      );

    }

  }
);


/* HEADER */

const header =
  document.getElementById(
    "siteHeader"
  );


window.addEventListener(
  "scroll",
  ()=>{

    header.classList.toggle(
      "scrolled",
      window.scrollY > 40
    );

  }
);


/* MENU MOBILE */

const burger =
  document.getElementById(
    "burgerBtn"
  );

const mobileNav =
  document.getElementById(
    "mobileNav"
  );


burger.addEventListener(
  "click",
  ()=>{
    mobileNav.classList.toggle(
      "open"
    );
  }
);


mobileNav
  .querySelectorAll("a")
  .forEach(link => {

    link.addEventListener(
      "click",
      ()=>{
        mobileNav.classList.remove(
          "open"
        );
      }
    );

  });


/* FORMULÁRIO */

document
  .getElementById("contactForm")
  .addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const name =
        document
          .getElementById("name")
          .value
          .trim();


      document
        .getElementById("formMsg")
        .textContent =
        `Obrigado, ${name || "visitante"}! Recebemos sua mensagem e vamos responder em breve.`;


      event.target.reset();

    }
  );


/* ANO */

document
  .getElementById("year")
  .textContent =
  new Date().getFullYear();