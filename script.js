// script.js for TanBerry Portfolio

function enterRealm() {
  document.querySelector(".hero").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}

function openModel(modelId) {
  alert(`You clicked on: ${modelId}\n\nYou can embed a Sketchfab viewer or open a modal here.`);
}

