
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
mobileMenu.classList.toggle("active");
});

const carousel = document.getElementById("carousel-1-image")


const carousel_buttons = document.querySelectorAll(".section-2 .feature-card")

console.log(carousel_buttons)

for (const button of carousel_buttons) {
  button.addEventListener("click", function () {
    carousel.src = `./assets/c-${this.id}-img.webp`;

    for (const btn of carousel_buttons) {
      btn.className = "feature-card";
    }

    this.classList.add("selected");
  });
}