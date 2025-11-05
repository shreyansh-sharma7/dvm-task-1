
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
  // Trigger slide-out animation
  carousel.classList.add("slide-out");

  // After animation ends, change image and slide back in
  setTimeout(() => {
    carousel.src = newSrc;
    carousel.classList.remove("slide-out");
    carousel.classList.add("slide-in");

    // Reset classes after animation completes
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

function updateCarousel() {
  // Slide effect
  container.style.transform = `translateX(-${index * 100}%)`;

  // Update .selected class
  cards.forEach((card, i) => {
    card.classList.toggle("selected", i === index);
  });
}

// Initialize first card
updateCarousel();

nextBtn.addEventListener("click", () => {
  index = (index + 1) % cards.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + cards.length) % cards.length;
  updateCarousel();
});


const black_indexes2 = document.querySelectorAll(".testimonial-carousel .black-index");

for (const black_index of black_indexes2) {
  black_index.addEventListener("click", function () {
    // Extract index from ID (example: id="dot-2" -> "2")
    const targetIndex = parseInt(this.id[4]) - 1;

    // Update global index and move carousel
    index = targetIndex;
    updateCarousel();

    // Reset all black-index buttons
    for (const bi of black_indexes2) bi.className = "black-index";

    // Highlight the clicked one
    this.classList.add("selected");

    // Update testimonial cards' selected class
    document.querySelectorAll(".testimonial-card").forEach((card) => {
      card.classList.remove("selected");
    });
    document.getElementById(`card-${targetIndex + 1}`).classList.add("selected");
  });
}
