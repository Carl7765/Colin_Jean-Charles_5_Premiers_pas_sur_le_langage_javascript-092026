const slides = [
    {
        image: "slide1.jpg",
        tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        image: "slide2.jpg",
        tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

    const dots = document.querySelector(".dots");
    const boutonGauche = document.querySelector(".fleche_gauche");
    const boutonDroit = document.querySelector(".fleche_droite");
    const bannerImg = document.querySelector(".banner-img");
    const bannerTagLine = document.querySelector("#banner p");

let currentSlide = 0;

// Création automatique des points
slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");

    // Cliquer sur un point affiche la diapositive correspondante
    dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlide(currentSlide);
    });

    dots.appendChild(dot);
});

function updateDots(index) {
    const allDots = dots.querySelectorAll("span");

    allDots.forEach((dot, i) => {
        dot.classList.toggle("dot_selected", i === index);
        dot.classList.toggle("dot", true);
    });
}

function updateSlide(index) {
    bannerImg.src =
        "./assets/images/slideshow/" + slides[index].image;

    bannerTagLine.innerHTML = slides[index].tagLine;

    updateDots(index);
}

// Afficher la première diapositive au démarrage
updateSlide(currentSlide);

// Flèche droite
boutonDroit.addEventListener("click", function () {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    updateSlide(currentSlide);
});

// Flèche gauche
boutonGauche.addEventListener("click", function () {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateSlide(currentSlide);
});
