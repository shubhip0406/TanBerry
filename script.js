// script.js for TanBerry Zelda-Themed Portfolio

function enterRealm() {
  document.querySelector(".hero").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openModel(modelId) {
  alert(`You clicked on: ${modelId}\n\nHere we can embed a Sketchfab viewer or open a gallery modal.`);
}

// Easter Egg Listener for keypress "A"
document.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === "a") {
    document.getElementById("easterEgg").play();
    alert("💌 Message from Player 2: You're the hero of this realm. I believe in you, always!");
  }
});


