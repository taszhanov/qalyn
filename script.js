var education = document.getElementById("education");
var networth = document.getElementById("networth");
var skills = document.getElementsByClassName("skills");
var age = document.getElementsByClassName("age");
var reputation = document.getElementsByClassName("reputation");


function calculate() = document.getElementById("calculator");
calculate.addEventListener("click", calculate);

let result = 500;

function education() {
    var education = document.getElementById("education").value;
    
    if (education == "1.5") {
        result = result * 1.5;
    } else if (education == "1.2") {
        result = result * 1.2;
    } else if (education == "1.05") {
        result = result * 1.05;
    } else if (education == "0.9") {
        result = result * 0.9;
    }
}

function networth() {
    var networth = document.getElementById("networth").value;

    if (networth == "2") {
        result *= 2;
    } else if (networth == "1.5") {
        result *= 1.5;
    } else if (networth == "1.2") {
        result *= 1.2;
    }
}

function skills() {
    var skills = document.getElementByClassName("skills").value;

    if (skills == "100") {
        result = result + 100;
    }
    else if (skills == "200") {
        result = result + 200;
    }
    else if (skills = "150") {
        result = result + 150;
    }
    else if (skills = "100") {
        result = result + 100;
    }
}

function age() {
    var age = document.getElementByClassName("age").value;
    if (age = "1.5") {
        result = result * 1.5;   
    }
    else if (age = "1.2") {
        result = result * 1.2;
    }
    else if (age = "0.95") {
    result = result * 0.95; 
    }
}

function reputation() {
    var reputation = document.getElementsByClassName("reputation").value;
    if (reputation = "0.85") {
        result = result * 0.85;
    }
    else if (reputation = "0.9") {
        result = result * 0.9;
    }
    else if (reputation = "200") {
        result = result - 200;
    }
}


function calculate() {
    education();
    networth();
    skills();
    age();
    reputation();
    alert (result);
}