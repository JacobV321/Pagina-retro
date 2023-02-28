
jQuery('h1').css('color', 'blue');
jQuery('h1.encabezado').css('color', 'white');

function loadImage(imagen) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    const img = document.createElement("img");
    img.src = imagen;
    document.getElementById("demo").appendChild(img);
    }
    };
    xhttp.open("GET", imagen, true);
    xhttp.send();
}

function loadText(txt) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("texto").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", txt);
    xhttp.send();
}