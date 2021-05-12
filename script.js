"use strict";

let sheet = document.querySelector("#sheet");
let checkboxes = document.querySelectorAll("input[name=Checkbox]");
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true;
}

let runButton = document.querySelector("#run");
runButton.addEventListener("click", () => {
    run();
});

let formSettings = document.querySelector("#settings");
let classBox = document.querySelector("#classBox");
let skillsBox = document.querySelector("#skillsBox");
let statsBox = document.querySelector("#statsBox");
statsBox.checked = true;
let strBox = document.querySelector("#strengthBox");
let dexBox = document.querySelector("#dexterityBox");
let conBox = document.querySelector("#constitutionBox");
let intBox = document.querySelector("#intelligenceBox");
let wisBox = document.querySelector("#wisdomBox");
let chaBox = document.querySelector("#charismaBox");
formSettings.addEventListener("click", () => {
    if (classBox.checked == false) {
        skillsBox.checked = false;
    }
    if (statsBox.checked == false) {
        strBox.checked = false;
        dexBox.checked = false;
        conBox.checked = false;
        intBox.checked = false;
        wisBox.checked = false;
        chaBox.checked = false;
    }
}); 

function getRoll() {
    
}

function run() {
    sheet.innerHTML = "";
    let race = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling", "Race: "];
    let classArr = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer", "Class: "];
    let alignment = ["Chaotic Evil", "Chaotic Neutral", "Chaotic Good", "Neutral Evil", "True Neutral", "Neutral Good", 
    "Lawful Evil", "Lawful Neutral", "Lawful Good", "Alignment: "];
    //Could have an input of min and max for stats and a for loop to limit the options
    let strength = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Strength: "];
    let dexterity = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Dexterity: "];
    let constitution = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Constitution: "];
    let intelligence = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Intelligence: "];
    let wisdom = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Wisdom: "];
    let charisma = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Charisma: "];
    let skills = [];
    let tablesRoot = [race, classArr, alignment, strength, dexterity, constitution, intelligence, wisdom, charisma];
    let tables = [];
    for (var i = 0; i < tablesRoot.length; i++) {
        if (checkboxes[i].checked == true) {
            tables.push(tablesRoot[i]);
        }
    }
    let skillRollTimes = 2;
    for (var i = 0; i < tables.length; i++) {
        let rollSaved = "";
        let rollTimes = 1;
        if (tables[i] == skills) {
            rollTimes = skillRollTimes;
        }
        let roll = 0;
        for (let j = 0; j < rollTimes; j++) {
            roll = Math.floor(Math.random() * (tables[i].length - 1));
            let item = document.createElement("p");
            let text = document.createTextNode(tables[i][tables[i].length - 1] + tables[i][roll]);
            item.append(text);
            sheet.append(item);
            rollSaved = tables[i][roll];
            tables[i].splice(roll, 1);
            let nameTemp = "";
            let nameDecrase = 2;
            if (j > 0) {
                nameDecrase = 3;
            }
            for (let k = 0; k < (tables[i][tables[i].length - 1].length - nameDecrase); k++) {
                nameTemp += tables[i][tables[i].length - 1][k]; 
            }
            nameTemp += (" " + (j+2) + ": ");
            tables[i].splice(tables[i].length - 1);
            tables[i].push(nameTemp);
        }

        if (tables[i] == classArr && skillsBox.checked == true) {
            skills = [];
            if (rollSaved == "Barbarian") {
                skills.push("Animal Handling");
                skills.push("Athletics");
                skills.push("Intimidation");
                skills.push("Nature");
                skills.push("Perception");
                skills.push("Survival");
            }
            if (rollSaved == "Bard") {
                skillRollTimes = 3;
                skills.push("Acrobatics");
                skills.push("Animal Handling");
                skills.push("Arcana");
                skills.push("Athletics");
                skills.push("Deception");
                skills.push("History");
                skills.push("Insight");
                skills.push("Intimidation");
                skills.push("Investigation");
                skills.push("Medicine");
                skills.push("Nature");
                skills.push("Perception");
                skills.push("Performance");
                skills.push("Persuasion");
                skills.push("Religion");
                skills.push("Sleight of Hand");
                skills.push("Stealth");
                skills.push("Survival");
            }
            if (rollSaved == "Cleric") {
                skills.push("History");
                skills.push("Insight");
                skills.push("Medicine");
                skills.push("Persuasion");
                skills.push("Religion");
            }
            if (rollSaved == "Druid") {
                skills.push("Arcana");
                skills.push("Animal Handling");
                skills.push("Insight");
                skills.push("Medicine");
                skills.push("Nature");
                skills.push("Perception");
                skills.push("Religion");
                skills.push("Survival");
            }
            if (rollSaved == "Fighter") {
                skills.push("Acrobatics");
                skills.push("Animal Handling");
                skills.push("Athletics");
                skills.push("History");
                skills.push("Insight");
                skills.push("Intimidation");
                skills.push("Perception");
                skills.push("Survival");
            }
            if (rollSaved == "Monk") {
                skills.push("Acrobatings");
                skills.push("Athletics");
                skills.push("History");
                skills.push("Insight");
                skills.push("Religion");
                skills.push("Stealth");
            }
            if (rollSaved == "Paladin") {
                skills.push("Athletics");
                skills.push("Insight");
                skills.push("Intimidation");
                skills.push("Medicine");
                skills.push("Persuasion");
                skills.push("Religion");
            }
            if (rollSaved == "Ranger") {
                skillRollTimes = 3;
                skills.push("Animal Handling");
                skills.push("Athletics");
                skills.push("Insight");
                skills.push("Investigation");
                skills.push("Nature");
                skills.push("Perception");
                skills.push("Stealth");
                skills.push("Survival");
            }
            if (rollSaved == "Rogue") {
                skillRollTimes = 4;
                skills.push("Acrobatics");
                skills.push("Athletics");
                skills.push("Deception");
                skills.push("Insight");
                skills.push("Intimidation");
                skills.push("Investigation");
                skills.push("Perception");
                skills.push("Performance");
                skills.push("Persuasion");
                skills.push("Sleight of Hand");
                skills.push("Stealth");
            }
            if (rollSaved == "Sorcerer") {
                skills.push("Arcana");
                skills.push("Deception");
                skills.push("Insight");
                skills.push("Intimidation");
                skills.push("Persuasion");
                skills.push("Religion");
            }
            if (rollSaved == "Warlock") {
                skills.push("Arcana");
                skills.push("Deception");
                skills.push("History");
                skills.push("Intimidation");
                skills.push("Investigation");
                skills.push("Nature");
                skills.push("Religion");
            }
            if (rollSaved == "Wizard") {
                skills.push("Arcana");
                skills.push("History");
                skills.push("Insight");
                skills.push("Investigation");
                skills.push("Medicine");
                skills.push("Religion");
            }
            if (rollSaved == "Artificer") {
                skills.push("Arcana");
                skills.push("History");
                skills.push("Investigation");
                skills.push("Medicine");
                skills.push("Nature");
                skills.push("Perception");
                skills.push("Sleight of Hand");
            }
            skills.push("Skill Proficiency: ");
            tables.splice(i+1, 0, skills);
        }
    }
}