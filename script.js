"use strict";

 //Likely more simple to just use the index in the array than having names for each flag

let sheet = document.querySelector("#sheet");
let race = ["Human", "Elf", "Dwarf", "Thiefling", "Race: "];
let classArr = ["Fighter", "Wizard", "Warlock", "Paladin", "Class: "];
let personality = ["Tough", "Romantic", "Optmistic", "Pessimistic", "Personality: "];
let alignment = ["Chaotic Evil", "Chaotic Neutral", "Chaotic Good", "Neutral Evil", "True Neutral", "Neutral Good", 
"Lawful Evil", "Lawful Neutral", "Lawful Good", "Alignment: "];
let strength = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Strength: "];
let dexterity = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Dexterity: "];
let constitution = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Constitution: "];
let intelligence = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Intelligence: "];
let wisdom = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Wisdom: "];
let charisma = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Charisma: "];
let skills = ["Error", "Skills: "];
let tablesRoot = [race, classArr, personality, alignment, strength, dexterity, constitution, intelligence, wisdom, charisma, skills];
let tables = [];
let checkboxes = document.querySelectorAll("input[type=checkbox]");
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true;
}

let runButton = document.querySelector("#run");
runButton.addEventListener("click", () => {
    run();
});

function getRoll(table) {
    let roll = Math.floor(Math.random() * (table.length - 1));
    let item = document.createElement("p");
    let text = document.createTextNode(table[table.length - 1] + table[roll]);
    item.append(text);
    sheet.append(item);

    if (table == classArr) { //Works, but is skills never runs
        console.log(table[roll]);
        if (table[roll] == "Wizard") {
            skills.push("Thou art wizard lol");
        }
        skills.push("Filler");
        skills.push("Filler");
        skills.push("Skills: ");
        console.log(skills);
    }
}

function run() {
    sheet.innerHTML = "";
    tables = [];
    skills = [];
    for (var i = 0; i < tablesRoot.length; i++) {
        if (checkboxes[i].checked == true) {
            tables.push(tablesRoot[i]);
        }
    }
    for (var i = 0; i < tables.length; i++) {
        getRoll(tables[i]);
        if (tables[i] == skills) { //Skills never runs
        console.log("skills run");
        }
    }
}