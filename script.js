// Step 19: JavaScript Interactivity

function changeBackground() {
  document.body.style.backgroundColor = "lightgreen";
}

function animateHero() {
  const heroText = document.querySelector(".hero h1");
  heroText.style.color = "red";
  heroText.style.transition = "color 1s ease";
}

function handleForm(event) {
  event.preventDefault();
  alert("Thanks for your message!");
}
document.addEventListener("DOMContentLoaded", function() {
  alert("Welcome to my site!");
});
