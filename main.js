var dice = new Dice();
var onRollClicked = function() {
    var dicePerUnit = Number.parseInt(document.getElementById("dicePerUnit").value);
    var amountOfUnits = Number.parseInt(document.getElementById("amountOfUnits").value);
    var rerollOnes = document.getElementById("rerollOnes").value === "true";
    var rerollFails = document.getElementById("rerollFails").value === "true";
    var total = 0;
    var potential = 0;
    for (var i = 0; i < amountOfUnits; i++) {
        var hits = dice.roll(dicePerUnit, 3, rerollFails, rerollOnes);
        var wounds = dice.roll(hits, 4, rerollFails, rerollOnes);
        total += wounds;
        potential += dicePerUnit;
    }
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "total succeeded to wounds: " + total + "<br>potential to wounds: " + potential + "<br>percentage: " + ((total / potential) * 100) + "%";
};