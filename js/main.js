// Mostra e nasconde il dropdown relativo
function toggleMenu(element) {
  event.preventDefault(); // evita lo scroll in alto

  const content = element.nextElementSibling;

  if (content) {
    content.classList.toggle("show");
    element.classList.toggle("active");
  }
}

// Chiude i menu se si clicca fuori
window.addEventListener("click", function(event) {
  document.querySelectorAll('.dropdown-compagnie-content, .dropdown-collezioni-content, .dropdown-osservatorio-accademico-content').forEach(dropdown => {
    const button = dropdown.previousElementSibling;

    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
      dropdown.classList.remove("show");
      button.classList.remove("active"); //  Rimuove la rotazione della freccia
    }
  });
});

// hambruger menu responsive per piccoli schermi //

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger-menu');
  const topnav = document.querySelector('.topnavbar');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    topnav.classList.toggle('responsive');

    // Aggiorna aria-expanded per accessibilità
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });
});



// cambio immagini index fadein e fadeout //

// Array/lista con i percorsi delle immagini dello slideshow //

  const images = [
    "img/index/chapiteau2.jpeg",
    "img/index/winter.jpeg",
    "img/index/funambolismo.jpeg",
    "img/index/magdaclan.jpeg"
  ];

// Se vuoi cambiare anche l'alt, mettilo qui in array corrispondente //
  const alts = [
    "chapiteau/circus tent/tenda da circo",
    "foto dello spettacolo Winter",
    "funambolismo",
    "magdaclan"

  ];

  let currentIndex = 0;

  const imgElement = document.getElementById("chapiteau2");

  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // cicla tra le immagini
    imgElement.src = images[currentIndex];
    imgElement.alt = alts[currentIndex];
  }

// Cambia immagine ogni 7 secondi //
  setInterval(changeImage, 7000);


// accordion in progetto //

const acc = document.querySelectorAll(".accordion");

acc.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const panel = button.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// sidenavbar e catalogo items //

document.querySelectorAll('.dropdown-btn').forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();

    const currentDropdown = button.nextElementSibling;
    const arrow = button.querySelector('.arrow');
    const isOpen = currentDropdown.style.display === 'block';

    // Chiudi tutti gli altri dropdown e rimuovi frecce attive
    document.querySelectorAll('.dropdown-container-catalogo').forEach(dropdown => {
      dropdown.style.display = 'none';
    });
    document.querySelectorAll('.dropdown-btn').forEach(btn => {
      btn.classList.remove('active');
      btn.querySelector('.arrow').classList.remove('rotated');
    });

    // Se non era aperto, aprilo
    if (!isOpen) {
      currentDropdown.style.display = 'block';
      button.classList.add('active');
      arrow.classList.add('rotated');
    }
    // Altrimenti: si è cliccato sul già aperto, quindi non lo riapriamo
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('dropdown-btn') &&
      !event.target.closest('.dropdown-container-catalogo')) {

    document.querySelectorAll('.dropdown-container-catalogo').forEach(dropdown => {
      dropdown.style.display = 'none';
    });
    document.querySelectorAll('.dropdown-btn').forEach(btn => {
      btn.classList.remove('active');
      btn.querySelector('.arrow').classList.remove('rotated');
    });
  }
});

// lista di tutti gli items - portfolio with filtering //

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Rimuovi active da tutti i bottoni
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
