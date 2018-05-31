import document from "document";

var foodButton = document.getElementById("food-btn");
var currentTama = null;

export function GUI(tama) {
    currentTama = tama;
}

foodButton.onclick = function(event) {
    currentTama.buyFood();
}