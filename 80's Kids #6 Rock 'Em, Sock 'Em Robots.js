//test
function fight(robot1, robot2, tactics) {
    function attack(target, tactic) {
        var damage = tactics[tactic];
        target.health -= damage;
        console.log(target.name + " was attacked with " + damage + " damage");
    }

    //Determine who goes first.
    var robots = robot2.speed > robot1.speed ? [robot2, robot1] : [robot1, robot2];
    console.log(robots);

    //Start the battle
    var winner = null;
    var round = 0;
    while (winner == null) {
        //Handle the event that nobody has tactics left
        if (round >= robot1.tactics.length && round >= robot2.tactics.length) {
            console.log("No robot have tactics left");
            if (robot1.health == robot2.health) {
                winner = "draw";
            } else {
                winner = robot1.health > robot2.health ? robot1 : robot2;
            }
            break;
        }

        //Let the robots attack eachother
        for (let i = 0; i < 2; i++) {
            const attacker = robots[i];
            const target = robots[Math.abs(i - 1)];

            if (round < attacker.tactics.length)
                attack(target, attacker.tactics[round]);
            if (target.health <= 0) {
                winner = attacker;
                console.log(target.name + " died");
                break;
            }
        }
        round++
    }

    //Print out the winner
    if (winner == "draw") {
        return "The fight was a draw.";
    } else {
        return winner.name + " has won the fight.";
    }

}
