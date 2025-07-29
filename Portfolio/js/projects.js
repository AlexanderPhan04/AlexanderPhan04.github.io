// projects.js: Dynamically loads the projects section and sets up overlay/tap logic
fetch("/Portfolio/view/projects.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("projects").innerHTML = data;
    // Overlay/tap logic (from projects-interaction.js)
    var cards = document.querySelectorAll(".projects-section .project-card");
    cards.forEach(function (card) {
      // For mobile: toggle overlay on tap
      card.addEventListener("touchend", function (e) {
        // Remove active from all cards
        cards.forEach(function (c) {
          if (c !== card) c.classList.remove("active");
        });
        card.classList.toggle("active");
        // Prevent click-through
        e.preventDefault();
      });
      // For accessibility: hide overlay on blur
      card.addEventListener("blur", function () {
        card.classList.remove("active");
      });
    });
    // Hide overlay if tap outside
    document.addEventListener("touchend", function (e) {
      cards.forEach(function (card) {
        if (!card.contains(e.target)) card.classList.remove("active");
      });
    });
  });
