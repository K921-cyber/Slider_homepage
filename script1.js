function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slider-track img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentIndex = 0;

function updateSlider() {
  sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}, 4000);

// Pause on hover
const sliderContainer = document.querySelector(".slider-container");
sliderContainer.addEventListener("mouseenter", () => clearInterval(autoSlide));
sliderContainer.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }, 4000);
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const message = document.getElementById("confirmationMessage");
  message.textContent = "Thanks! I'll get back to you soon.";
  message.classList.add("show");
  this.reset();
  setTimeout(() => {
    message.classList.remove("show");
    message.textContent = "";
  }, 5000);
});
