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
