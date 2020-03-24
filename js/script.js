
let letter = document.getElementById("input-one").value;

let letterOut = document.getElementById("text-output");

function toUpperCase() {
  return (letterOut.value = letter.toUpperCase());
}

function toLowerCase() {
  return (letterOut.value = letter.toLowerCase());
}

function titleCase() {
  var splitStr = letter.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return (letterOut.value = splitStr.join(" "));
}



new Vue({
    el: "#app",
    data: {
      name: ""
    }
  });