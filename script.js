// script.js for scene transitions and easter egg

function switchScene(targetId) {
  const scenes = document.querySelectorAll(".scene");
  scenes.forEach(scene => scene.classList.remove("active"));
  setTimeout(() => {
    document.getElementById(targetId).classList.add("active");
  }, 100);
}

function openModel(modelId) {
  alert(`You clicked on: ${modelId}\n\nThis could open a Sketchfab embed or detailed modal.`);
}

// Easter egg key listener
window.addEventListener("keydown", function(e) {
  if (e.key.toLowerCase() === "a") {
    const egg = document.getElementById("easterEgg");
    if (egg) egg.play();
    alert("💌 Message from Player 2: You're the hero of this realm. I believe in you!");
  }
});


