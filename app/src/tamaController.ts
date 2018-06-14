import document from "document";
import { Bank } from "components/bank.ts";
import { NeedsManager } from "components/needsManager.ts";

//CONSTS
var FOOD_PRICE = 1000;
var ALERT_CONTAINER = document.getElementById('alertMessageContainer');
var ALERT_TEXT = document.getElementById('alertMessage');

var bank = new Bank();
var needsManager = new NeedsManager();
var foodButton = document.getElementById('food-btn');
var activeTama = null;

export function Engine(tama) {
    activeTama = tama;
    heartbeat();

    setInterval(heartbeat, 10000);
}

var heartbeat = function () {
    activeTama.checkBedTime();

    if (!needsManager.isHappy()) {
        displayAlert(needsManager.getNeedMessage());
    }
}

var displayAlert = function(message) {
    if ('' !== message) {
        ALERT_CONTAINER.style.display = 'inline';
        ALERT_TEXT.text = message;

        setTimeout(function () {
            ALERT_CONTAINER.style.display = 'none';
        }, 4000);
    }
}

foodButton.onclick = function(event) {
    if (activeTama.isBusy()) {
        return;
    }
  
    if (bank.subtractAmount(FOOD_PRICE)) {
        activeTama.eatFood();
        needsManager.eatFood();
    } else {
        displayAlert('Insufficient Steps!');
    }
}