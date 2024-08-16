document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".typed", {
    strings: [
      '<i>¿Qué esperas?</i>',
      '<i>¡Empieza ya!</i>',
    ],
    
    typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
    startDelay: 100, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 60, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: "|", // Caracter para el cursor
    contentType: "html", // 'html' o 'null' para texto sin formato
  });

  new Splide("#splide1", {
    type: "loop",
    perPage: 4,
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: false,
    breakpoints: {
      1200: {
        perPage: 3,
      },
      992: {
        perPage: 2,
      },
      550: {
        perPage: 1,
      },
    },
  }).mount();

  new Splide("#splide2", {
    type: "loop",
    perPage: 3,
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: false,
    breakpoints: {
      1200: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      },
    },
  }).mount();

  let monthly = document.getElementById("monthly");
  let anual = document.getElementById("anual");

  function showMonthly() {
    document.querySelectorAll(".price-monthly").forEach((el) => (el.style.display = "block"));
    document.querySelectorAll(".price-anual").forEach((el) => (el.style.display = "none"));
    monthly.classList.add("active");
    anual.classList.remove("active");
  }
  function showAnual() {
    document.querySelectorAll(".price-monthly").forEach((el) => (el.style.display = "none"));
    document.querySelectorAll(".price-anual").forEach((el) => (el.style.display = "block"));
    monthly.classList.remove("active");
    anual.classList.add("active");
  }

  monthly.addEventListener("click", showMonthly);
  anual.addEventListener("click", showAnual);

  showMonthly();

  let dropdownHeaders = document.querySelectorAll('.dropdown-header');
  dropdownHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
      let dropdown = this.parentElement;
      dropdown.classList.toggle('active');
    });
  });
});

document.querySelectorAll(".accordion-item h6").forEach((accordionToggle) => {
  accordionToggle.addEventListener("click", () => {
    const accordionItem = accordionToggle.parentNode;
    const accordionContent = accordionToggle.nextElementSibling;

    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== accordionItem) {
        item.querySelector(".accordion-content").style.maxHeight = null;
        item.classList.remove("active");
      }
    });

    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
      accordionItem.classList.remove("active");
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionItem.classList.add("active");
    }
  });
});
