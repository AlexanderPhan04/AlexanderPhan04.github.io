// about.js: Dynamically loads the about section
fetch("/Portfolio/view/about.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("about").innerHTML = data));
