function fight(robot1, robot2, tactics) {

    function attack(target, tactic) {
        var damage = tactics[tactic];
        target.health -= damage;
    }
    var first = robot2.speed > robot1.speed ? robot1 : robot2;
    var second = first == robot1 ? robot2 : robot1;

    var winner = null;
    var round = 0;

    while (winner == null) {
        if (round > first.tactics.length && round > second.tactics.length) {
            if (first.health == second.health) {
                winner = "draw";
            } else {
                winner = first.health > second.health ? first : second;
            }
            return;
        }
        if (round < first.tactics.length)
            attack(second, first.tactics[round]);
        if (second.health <= 0) {
            winner = first;
            return;
        }

        if (round < second.tactics.length)
            attack(first, second.tactics[round]);
        if (second.health <= 0) {
            winner = first;
            return;
        }
    }

    if (winner == "draw") {
        return "The fight was a draw.";
    } else {
        return winner.name + " has won the fight.";
    }

    round++
}

