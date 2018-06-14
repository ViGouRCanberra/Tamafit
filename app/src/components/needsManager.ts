import document from "document";
import { SaveManager } from "saveManager.ts"
import * as util from "../../../common/utils.js";

//CONSTS
var HUNGER_BAR = document.getElementById('hungerBar');

var saveManager = new SaveManager();
var saveData = null;
var needsMessage = '';
var hunger = 0;

export function NeedsManager() {
    saveData = saveManager.getData();
    hunger = saveData.hunger;
    updateStats();
}

NeedsManager.prototype.isHappy = function() {
    checkNeeds();
  
    return true;
}

NeedsManager.prototype.eatFood = function() {
    addHunger(-35);
}

NeedsManager.prototype.getNeedMessage = function() {
    return needsMessage;
}

var checkNeeds = function() {
    var currentDate = new Date(),
        hoursPassed = 0;

    if (moreThanAnHourPassed()) {
        hoursPassed = util.diffHours(currentDate, saveData.statsDate);

        for (var i = 0; i < hoursPassed; i++) { 
            addHunger(3);
        }

        saveStats(currentDate);
    }
}

var addHunger = function(amount) {
    hunger += amount;
  
    if (100 < hunger) {
        hunger = 100;
    } else if (0 > hunger) {
        hunger = 0;
    }
  
    updateStats();

    saveManager.saveHungerData({
        "hunger": hunger,
    });
  
    saveData.hunger = hunger;
}

var updateStats = function() {
    HUNGER_BAR.width = ((100 - hunger) / 100) * 175;
}

var moreThanAnHourPassed = function() {
    return new Date().toISOString().substring(0, 13) !== saveData.statsDate.substring(0, 13);
}

var saveStats = function(newDate) {
    newDate = newDate.toISOString();
  
    saveManager.saveStatsData({
        "hunger": hunger,
        "statsDate": newDate,
    });
  
    saveData.hunger = hunger;
    saveData.statsDate = newDate;
}