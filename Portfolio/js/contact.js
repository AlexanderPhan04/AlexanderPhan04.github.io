// contact.js: Dynamically loads the contact section
fetch("/Portfolio/view/contact.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("contact").innerHTML = data));
