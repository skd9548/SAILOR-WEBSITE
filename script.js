// 🔥 MOBILE MENU
function toggleMenu() {
  const nav = document.getElementById("navMenu");

  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

// 🔥 OPEN GOOGLE FORM
function openForm() {
  window.open("https://forms.gle/17Luh7vzL4xrWGAa8", "_blank");
}
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  observer
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
