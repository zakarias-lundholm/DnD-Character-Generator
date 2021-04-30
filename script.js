"use strict";

 //Likely more simple to just use the index in the array than having names for each flag

let sheet = document.querySelector("#sheet");
let checkboxes = document.querySelectorAll("input[type=checkbox]");
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true;
}

let runButton = document.querySelector("#run");
runButton.addEventListener("click", () => {
    run();
});

function getRoll(table) {
    
}

function run() {
    sheet.innerHTML = "";
    let race = ["Human", "Elf", "Dwarf", "Thiefling", "Race: "];
    let classArr = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer", "Class: "];
    let personality = ["Tough", "Romantic", "Optmistic", "Pessimistic", "Personality: "];
    let alignment = ["Chaotic Evil", "Chaotic Neutral", "Chaotic Good", "Neutral Evil", "True Neutral", "Neutral Good", 
    "Lawful Evil", "Lawful Neutral", "Lawful Good", "Alignment: "];
    let strength = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Strength: "];
    let dexterity = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Dexterity: "];
    let constitution = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Constitution: "];
    let intelligence = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Intelligence: "];
    let wisdom = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Wisdom: "];
    let charisma = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "Charisma: "];
    let skills = [];
    let tablesRoot = [race, classArr, personality, alignment, strength, dexterity, constitution, intelligence, wisdom, charisma];
    let tables = [];
    for (var i = 0; i < tablesRoot.length; i++) {
        if (checkboxes[i].checked == true) {
            tables.push(tablesRoot[i]);
        }
    }
    for (var i = 0; i < tables.length; i++) {
        //getRoll(tables[i]);
        let rollTimes = 1;
        if (tables[i] == skills) {
            rollTimes = 2;  //Gets rolled twice-ish even without rollTimes
        }
        let roll = 0;
        for (let j = 0; j < rollTimes; j++) {
            roll = Math.floor(Math.random() * (tables[i].length - 1));
            let item = document.createElement("p");
            let text = document.createTextNode(tables[i][tables[i].length - 1] + tables[i][roll]);
            item.append(text);
            sheet.append(item);
            tables[i].splice(roll, 1); //Makes tables[i][tables[i].length - 1] = undefined if roll == 0
            console.log(tables[i]); //Never == the proper skill table constructed below (the proper skills associated with the class)
            let nameTemp = "";
            for (let k = 0; k < (tables[i][tables[i].length - 1].length - 3); k++) {
                nameTemp += tables[i][tables[i].length - 1][k]; 
            }
            nameTemp += (j+2 + ": ");
            tables[i].splice(tables[i].length - 1);
            tables[i].push(""); //Having this here fixes most of it, but crashes at Artificer
            tables[i].push(nameTemp);
        }

        if (tables[i] == classArr && skillsBox.checked == true) {
            if (tables[i][roll] == "Barbarian") {
                skills.push("Animal Handling");
                skills.push("Athletics");
                skills.push("Intimidation");
                skills.push("Nature");
                skills.push("Perceptiom");
                skills.push("Survival");
            }
            if (tables[i][roll] == "Bard") {
                skills.push("");
                skills.push("");
            }
            if (tables[i][roll] == "Cleric") {
                skills.push("");
                skills.push("");
            }
            if (tables[i][roll] == "Druid") {
                skills.push("");
                skills.push("");
            }
            if (tables[i][roll] == "Fighter") {
                skills.push("");
                skills.push("");
            }
            if (tables[i][roll] == "Monk") {
                skills.push("");
                skills.push("");
            }
            if (tables[i][roll] == "Paladin") {
                skills.push("");
                skills.push("");
            }
            if (tables[i][roll] == "Ranger") {
                skills.push("");
                skills.push("");
            }
            if (tables[i][roll] == "Rogue") {
                skills.push("");
                skills.push("");
            }
            if (tables[i][roll] == "Sorcerer") {
                skills.push("");
                skills.push("");
            }
            if (tables[i][roll] == "Warlock") {
                skills.push("");
                skills.push("");
            }
            if (tables[i][roll] == "Wizard") {
                skills.push("");
                skills.push("");
            }
            if (tables[i][roll] == "Artificer") {
                skills.push("");
                skills.push("");
            }
            skills.push("Skill Proficiency 1: ");
            tables.push(skills); //Could work to just have in tableRoot
            console.log(skills);
        }
    }
}