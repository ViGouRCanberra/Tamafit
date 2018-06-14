import { readFileSync, writeFileSync, unlinkSync } from "fs";

//CONSTS
var SAVE_PATH = "tama.sav";

export function SaveManager() {
}

SaveManager.prototype.getData = function() {
    //unlinkSync(SAVE_PATH);
    return getFileData();
}

SaveManager.prototype.saveStepData = function(newData) {
    var data = getFileData();

    data.payments = newData.payments;
    data.date = newData.date;
  
    writeFileSync(SAVE_PATH, data, "json");
}

SaveManager.prototype.saveStatsData = function(newData) {
    var data = getFileData();

    data.hunger = newData.hunger;
    data.statsDate = newData.statsDate;
  
    writeFileSync(SAVE_PATH, data, "json");
}

SaveManager.prototype.saveHungerData = function(newData) {
    var data = getFileData();

    data.hunger = newData.hunger;
  
    writeFileSync(SAVE_PATH, data, "json");
}

var getFileData = function() {
    try {
        return readFileSync(SAVE_PATH, "json");
    } catch (error) {
        createSaveFile();
      
        return readFileSync(SAVE_PATH, "json");
    }
}

var createSaveFile = function() {
    writeFileSync(
      SAVE_PATH,
      {
          'hunger': 0,
          'hours': 0,
          'statsDate': new Date().toISOString(),
          'payments': 0,
          'date': 0
      },
      "json"
    );
}