function Increment() {
  var number = parseInt(document.querySelector("#number").innerHTML);
  document.getElementById("number").innerHTML = number + 1;
}

function Decrement() {
  var number = Number(document.getElementById("number").innerHTML);
  if (number > 0) {
    document.getElementById("number").innerHTML = number - 1;
  }
}

function Reset() {
  document.querySelector("#number").innerHTML = 0;
}
