// footer.js: Dynamically loads the footer section
fetch("/Portfolio/view/footer.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));
