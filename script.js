"use strict";

 //Likely more simple to just use the index in the array than having names for each flag

let sheet = document.querySelector("#sheet");
let arrNames = ["Race: ", "Class: ", "Personality: "];
let race = ["Human", "Elf", "Dwarf", "Thiefling", "Race: "];
let classArr = ["Fighter", "Wizard", "Warlock", "Paladin", "Class: "];
let personality = ["Tough", "Romantic", "Optmistic", "Pessimistic", "Personality: "];
let testArr = ["1", "2", "3", "4", "5", "6", "7", "Test: "]
let tablesRoot = [race, classArr, personality, testArr];
let tables = [];
let checkboxes = document.querySelectorAll("input[type=checkbox]");

let runButton = document.querySelector("#run");
runButton.addEventListener("click", () => {
    run();
});

run();

function getRoll(table) {
    let roll = Math.floor(Math.random() * (table.length - 1));
    let item = document.createElement("p");
    let text = document.createTextNode(table[table.length - 1] + table[roll])
    item.append(text);
    sheet.append(item);
}

function run() {
    sheet.innerHTML = "";
    tables = [];
    for (var i = 0; i < tablesRoot.length; i++) {
        if (checkboxes[i].checked == true) {
            tables.push(tablesRoot[i]);
        }
    }
    for (var i = 0; i < tables.length; i++) {
        getRoll(tables[i]);
    }
}