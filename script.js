const navbar = document.querySelector(".navbar");
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  },
  { passive: true }
);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

function initAOS() {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    const heroTitle = heroContent.querySelector("h1");
    const heroParagraph = heroContent.querySelector("p");
    const heroButton = heroContent.querySelector(".btn");

    if (heroTitle) heroTitle.setAttribute("data-aos", "fade-down");
    if (heroParagraph) heroParagraph.setAttribute("data-aos", "fade-up");
    if (heroButton) heroButton.setAttribute("data-aos", "fade-up");
  }

  document.querySelectorAll(".feature-box").forEach((box, index) => {
    box.setAttribute("data-aos", "fade-up");
    box.setAttribute("data-aos-delay", (index * 100).toString());
  });

  document.querySelectorAll(".menu-card").forEach((card, index) => {
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", (index * 100).toString());
  });

  document.querySelectorAll(".gallery-item").forEach((item, index) => {
    item.setAttribute("data-aos", "zoom-in");
    item.setAttribute("data-aos-delay", (index * 100).toString());
  });
}

document.addEventListener("DOMContentLoaded", function () {
  if (typeof AOS !== "undefined") {
    initAOS();
  } else {
    const aosScript = document.querySelector('script[src*="aos"]');
    if (aosScript) {
      aosScript.addEventListener("load", initAOS);
    } else {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/aos@2.3.1/dist/aos.min.js";
      script.onload = initAOS;
      document.head.appendChild(script);

      if (!document.querySelector('link[href*="aos"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/aos@2.3.1/dist/aos.min.css";
        document.head.appendChild(link);
      }
    }
  }
});
