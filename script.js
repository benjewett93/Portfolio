// Mobile navigation toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  });
});

// Header border once the page scrolls
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Fade sections in as they enter the viewport
const revealTargets = document.querySelectorAll(".section-head, .case, .service, .process li, .about-copy, .contact-inner");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

// Keep the footer year current
document.getElementById("year").textContent = new Date().getFullYear();
