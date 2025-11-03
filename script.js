
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
mobileMenu.classList.toggle("active");
});

const carousel = document.getElementById("carousel-1-image")


const carousel_buttons = document.querySelectorAll(".section-2 .feature-card")
const black_indexes = document.querySelectorAll(".black-index")


console.log(carousel_buttons)

for (const button of carousel_buttons) {
  button.addEventListener("click", function () {
    carousel.src = `./assets/c-${this.id}-img.webp`;

    for (const btn of carousel_buttons) {
      btn.className = "feature-card";
    }

    for (const bi of black_indexes){
        bi.className = "black-index"
    }

    this.classList.add("selected");

    document.getElementById(`bi${this.id}`).classList.add("selected")
  });
}

for (const black_index of black_indexes){
     black_index.addEventListener("click", function () {
    carousel.src = `./assets/c-${this.id[2]}-img.webp`;

    for (const btn of carousel_buttons) {
      btn.className = "feature-card";
    }

    for (const bi of black_indexes){
        bi.className = "black-index"
    }

    document.getElementById(this.id[2]).classList.add("selected");
    document.getElementById(this.id).classList.add("selected");
  });
}