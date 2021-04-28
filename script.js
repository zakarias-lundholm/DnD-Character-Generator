"use strict";

 //Likely more simple to just use the index in the array than having names for each flag

let sheet = document.querySelector("#sheet");
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
let tablesRoot = [race, classArr, personality, alignment, strength, dexterity, constitution, intelligence, wisdom, charisma];
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
    
}

function run() {
    sheet.innerHTML = "";
    tables = [];
    let skills = [];
    for (var i = 0; i < tablesRoot.length; i++) {
        if (checkboxes[i].checked == true) {
            tables.push(tablesRoot[i]);
        }
    }
    for (var i = 0; i < tables.length; i++) {
        //getRoll(tables[i]);
        let rollTimes = 1; //Change depending ont able (especially skills)

        let roll = -1;
        for (let i = 0; i < rollTimes; i++) {//Above isn't working yet
            roll = Math.floor(Math.random() * (tables[i].length - 1));
            let item = document.createElement("p");
            let text = document.createTextNode(tables[i][tables[i].length - 1] + tables[i][roll]);
            item.append(text);
            sheet.append(item);
            tables[i].splice(roll);
            let nameTemp = tables[i][tables[i].length - 1];
            nameTemp = nameTemp - ": "
            nameTemp = nameTemp + " " + (i+2) + ": "; 
            tables[i].splice(tables[i].length - 1)
            tables.push(nameTemp);
        }

        /*if (tables[i] == skills) { //Might redesign as a for loop with a variable length
            skills.splice(roll, 1);
            skills.splice(skills.length - 1, 1);
            skills.push("Skill Proficiency 2: ");
            console.log(skills);
            roll = Math.floor(Math.random() * (tables[i].length - 1));
            item = document.createElement("p");
            text = document.createTextNode(tables[i][tables[i].length - 1] + tables[i][roll]);
            item.append(text);
            sheet.append(item);
        }*/

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
            }
            if (tables[i][roll] == "Cleric") {
                skills.push("");
            }
            if (tables[i][roll] == "Druid") {
                skills.push("");
            }
            if (tables[i][roll] == "Fighter") {
                skills.push("");
            }
            if (tables[i][roll] == "Monk") {
                skills.push("");
            }
            if (tables[i][roll] == "Paladin") {
                skills.push("");
            }
            if (tables[i][roll] == "Ranger") {
                skills.push("");
            }
            if (tables[i][roll] == "Rogue") {
                skills.push("");
            }
            if (tables[i][roll] == "Sorcerer") {
                skills.push("");
            }
            if (tables[i][roll] == "Warlock") {
                skills.push("");
            }
            if (tables[i][roll] == "Wizard") {
                skills.push("");
            }
            if (tables[i][roll] == "Artificer") {
                skills.push("");
            }
            skills.push("Skill Proficiency 1: ");
            tables.push(skills);
            console.log(skills);
        }
    }
}