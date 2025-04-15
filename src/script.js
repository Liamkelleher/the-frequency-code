// Glow button effect
const glowButtons = document.querySelectorAll(".glow-btn");
glowButtons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => btn.classList.add("active-glow"));
  btn.addEventListener("mouseleave", () => btn.classList.remove("active-glow"));
});


// Typewriter effect
const heading = document.querySelector(".hero-content h1");
const typewriterText = heading.textContent;
heading.textContent = "";
let i = 0;
function typeWriter() {
  if (i < typewriterText.length) {
    heading.textContent += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
window.addEventListener("load", typeWriter);

// Modal functionality
const bonusCards = document.querySelectorAll(".bonus-card");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".close");

bonusCards.forEach((card) => {
  const modalId = card.dataset.modal;
  const modal = document.getElementById(modalId);
  if (modal) {
    card.addEventListener("click", () => {
      modal.classList.add("show");
      document.body.classList.add("modal-open");
    });
  }
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modals.forEach((m) => m.classList.remove("show"));
    document.body.classList.remove("modal-open");
  });
});

window.addEventListener("click", (e) => {
  modals.forEach((m) => {
    if (e.target === m) {
      m.classList.remove("show");
      document.body.classList.remove("modal-open");
    }
  });
});

// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-menu");
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Unmute video logic
const unmuteBtn = document.getElementById("unmute-btn");
const promoVideo = document.getElementById("promo-video");

unmuteBtn.addEventListener("click", () => {
  promoVideo.muted = false;
  promoVideo.volume = 1;
  promoVideo.play();
  unmuteBtn.style.display = "none";
});

// Scroll-triggered flip effect for cards
const cards = document.querySelectorAll(".card");

const flipObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("flip-in");
      }
    });
  },
  {
    threshold: 0.2
  }
);

cards.forEach((card) => {
  flipObserver.observe(card);
});

const floatingBtn = document.querySelector(".floating-buy");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    floatingBtn.style.opacity = "1";
    floatingBtn.style.pointerEvents = "auto";
  } else {
    floatingBtn.style.opacity = "0";
    floatingBtn.style.pointerEvents = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const buySection = document.querySelector("#buy");
    const floatingBtn = document.querySelector(".floating-buy");
    floatingBtn.style.opacity = "0";

  window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    floatingBtn.style.opacity = "1";
    floatingBtn.style.pointerEvents = "auto";
  
    function checkIfInBuySection() {
      const rect = buySection.getBoundingClientRect();
      const fullyVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (fullyVisible) {
        floatingBtn.style.opacity = "0";
        floatingBtn.style.pointerEvents = "none";
      } else {
        floatingBtn.style.opacity = "1";
        floatingBtn.style.pointerEvents = "auto";
      }
    }
    window.addEventListener("scroll", checkIfInBuySection);
    window.addEventListener("resize", checkIfInBuySection);
  } else {
    floatingBtn.style.opacity = "0";
    floatingBtn.style.pointerEvents = "none";
  }
  });
}); 

document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const icon = btn.querySelector('.icon');
      
      item.classList.toggle('active');

      // Toggle icon manually for better control
      if (item.classList.contains('active')) {
        icon.textContent = "−";
      } else {
        icon.textContent = "+";
      }
    });
  });

