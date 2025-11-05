
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
mobileMenu.classList.toggle("active");
});

const carousel = document.getElementById("carousel-1-image");
const carousel_buttons = document.querySelectorAll(".section-2 .feature-card");
const black_indexes = document.querySelectorAll(".carousel-1 .black-index");

function changeImage(newSrc) {
  carousel.classList.add("slide-out");

  setTimeout(() => {
    carousel.src = newSrc;
    carousel.classList.remove("slide-out");
    carousel.classList.add("slide-in");

    setTimeout(() => {
      carousel.classList.remove("slide-in");
    }, 500);
  }, 200);
}

for (const button of carousel_buttons) {
  button.addEventListener("click", function () {
    changeImage(`./assets/c-${this.id}-img.webp`);

    for (const btn of carousel_buttons) btn.className = "feature-card";
    for (const bi of black_indexes) bi.className = "black-index";

    this.classList.add("selected");
    document.getElementById(`bi${this.id}`).classList.add("selected");
  });
}

for (const black_index of black_indexes) {
  black_index.addEventListener("click", function () {
    changeImage(`./assets/c-${this.id[2]}-img.webp`);

    for (const btn of carousel_buttons) btn.className = "feature-card";
    for (const bi of black_indexes) bi.className = "black-index";

    document.getElementById(this.id[2]).classList.add("selected");
    document.getElementById(this.id).classList.add("selected");
  });
}


const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const container = document.querySelector(".testimonial-cards");

let index = 0;
const black_indexes2 = document.querySelectorAll(".testimonial-carousel .black-index");

function updateCarousel() {
  container.style.transform = `translateX(-${index * 100}%)`;

  cards.forEach((card, i) => {
    card.classList.toggle("selected", i === index);
    black_indexes2[i].classList.toggle("selected", i==index)
  });
}

updateCarousel();

nextBtn.addEventListener("click", () => {
  index = (index + 1) % cards.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + cards.length) % cards.length;
  updateCarousel();
});



for (const black_index of black_indexes2) {
  black_index.addEventListener("click", function () {
    const targetIndex = parseInt(this.id[4]) - 1;

    index = targetIndex;
    updateCarousel();

    for (const bi of black_indexes2) bi.className = "black-index";

    this.classList.add("selected");

    document.querySelectorAll(".testimonial-card").forEach((card) => {
      card.classList.remove("selected");
    });
    document.getElementById(`card-${targetIndex + 1}`).classList.add("selected");
  });
}
