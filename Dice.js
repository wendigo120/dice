var Dice = function() {};

Dice.prototype.roll = function(amount, minRoll, rerollFails, rerollOnes) {
    var hits = 0;
    var rerolledFail = false;
    for (var i = 0; i < amount; i++) {
        var roll = Math.random();
        if (roll > (minRoll - 1) / 6) {
            hits++;
        } else if (rerollOnes && roll <= 1/6) {
            roll = Math.random();
            if (roll > (minRoll - 1) / 6) {
                hits++;
            }
        } else if (rerollFails && !rerolledFail) {
            rerolledFail = true;
            roll = Math.random();
            if (roll > (minRoll - 1) / 6) {
                hits++;
            }
        }
    }
    return hits;
};