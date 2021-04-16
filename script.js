"use strict";

 //Likely more simple to just use the index in the array than having names for each flag

let arrNames = ["Race: ", "Class: ", "Personality: "];
let race1 = ["Human", "Elf", "Dwarf", "Thiefling", "Race: "];
let classArr2 = ["Fighter", "Wizard", "Warlock", "Paladin", "Class: "];
let personality3 = ["Tough", "Romantic", "Optmistic", "Pessimistic", "Personality: "];
let tablesRoot = [race1, classArr2, personality3];
let tables = [];
let flags = [];
for (var i = 0; i < tablesRoot.length; i++) {
    flags.push(true);
}

run();


function getRoll(table) {
    let roll = Math.floor(Math.random() * (table.length - 1));
    console.log(table[table.length - 1] + table[roll]);
}

function run() {
    for (var i = 0; i < flags.length; i++) {
        if (flags[i] == true) {
            tables.push(tablesRoot[i]);
        }
    }
    for (var i = 0; i < tables.length; i++) {
        getRoll(tables[i]);
    }
}