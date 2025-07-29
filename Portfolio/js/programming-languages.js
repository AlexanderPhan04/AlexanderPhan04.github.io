// programming-languages.js: Dynamically loads the programming languages section
fetch("/Portfolio/view/programming-languages.html")
  .then((response) => response.text())
  .then(
    (data) =>
      (document.getElementById("programming-languages").innerHTML = data)
  );
