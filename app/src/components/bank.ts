import document from "document";
import userActivity from "user-activity";
import { SaveManager } from "saveManager.ts"

//CONSTS
var STEPS_TEXT = document.getElementById('steps');

var saveData = null;
var dayInfo = new Date();
var dailyPaymentTotal = 0;
var currentSteps = 0;
var saveManager = new SaveManager();

export function Bank() {
    saveData = saveManager.getData();
    dailyPaymentTotal = 0;
    dayInfo = dayInfo.getDate();

    if (dayInfo === saveData.date) {
        dailyPaymentTotal = saveData.payments;
    }

    updateCurrentSteps();
    saveDataToFile();

    setInterval(updateCurrentSteps, 5000);
}

Bank.prototype.subtractAmount = function(amount) {
    if (amount < (currentSteps - dailyPaymentTotal)) {
        processPayment(amount);

        return true;
    }

    return false;
}

var updateCurrentSteps = function() {
    currentSteps = userActivity.today.adjusted.steps;
    STEPS_TEXT.text = currentSteps - dailyPaymentTotal;
}

var processPayment = function(amount) {
    dailyPaymentTotal += amount;
    updateCurrentSteps();
    saveDataToFile();
}

var saveDataToFile = function() {
    saveManager.saveStepData({
        "payments": dailyPaymentTotal,
        "date": dayInfo,
    });
}