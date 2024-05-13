#! /bin/usr/env node
import inquirer from "inquirer";
import chalk from "chalk";
// step 1
class Player1You {
    name;
    energy = 100;
    constructor(name) {
        this.name = name;
    }
    decreasEnergy() {
        this.energy -= 20;
    }
    increasEnergy() {
        this.energy = 100;
    }
}
class Player2Enemy {
    name;
    energy = 100;
    constructor(name) {
        this.name = name;
    }
    decreasEnergy() {
        this.energy -= 20;
    }
    increasEnergy() {
        this.energy = 100;
    }
}
// step 2 player 1 object
async function main() {
    const { player1Name } = await inquirer.prompt([{
            type: "list",
            name: "player1Name",
            message: chalk.yellow.bold("Enter Your Player Name"),
            choices: ["Ken", "Chun-Li", "Blanka", "E. Honda", "Ryu"]
        }]);
    // player 2 object
    const { player2enemyType } = await inquirer.prompt([{
            type: "list",
            name: "player2enemyType",
            choices: ["Ken", "Chun-Li", "Blanka", "E. Honda", "Ryu"],
            message: chalk.green.bold("Who would you like to fight?")
        }]);
    // step 3 battle mode
    const playerYou = new Player1You(player1Name);
    const playerEnemy = new Player2Enemy(player2enemyType);
    console.log(`${playerYou.name} v/s ${playerEnemy.name}`);
    console.log(chalk.red.bold("Fight Starts Now"));
    // step 4 action
    do {
        const { action } = await inquirer.prompt([{
                type: "list",
                name: "action",
                choices: ["Flying Kick", "Defend", "Special Power", "Kick", "Punch"],
                message: chalk.yellow.bold("choose the type to perform action")
            }]);
        // step 5 switch case
        switch (action) {
            case "Flying Kick":
                const randomNumber1 = Math.random();
                if (randomNumber1 > 0.5) {
                    playerYou.decreasEnergy();
                    console.log(chalk.green.bold(`${playerYou.name} Energy: ${playerYou.energy}`));
                    console.log(`${playerEnemy.name} Energy: ${playerEnemy.energy}`);
                    if (playerYou.energy <= 0) {
                        console.log(chalk.bgRed("You Lost! Try Again"));
                        return;
                    }
                }
                else {
                    playerEnemy.decreasEnergy();
                    console.log(chalk.green.bold(`${playerYou.name} Energy: ${playerYou.energy}`));
                    console.log(`${playerEnemy.name} Energy: ${playerEnemy.energy}`);
                    if (playerEnemy.energy <= 0) {
                        console.log(chalk.green.bold("You Won"));
                        return;
                    }
                }
                break;
            case "Defend":
                console.log(chalk.green.bold(`${playerYou.name} Energy: ${playerYou.energy}`));
                console.log(`${playerEnemy.name} Energy: ${playerEnemy.energy}`);
                break;
            case "Special Power":
                const randomNumber3 = Math.random();
                if (randomNumber3 > 0.5) {
                    playerYou.decreasEnergy();
                    console.log(chalk.green.bold(`${playerYou.name} Energy: ${playerYou.energy}`));
                    console.log(`${playerEnemy.name} Energy: ${playerEnemy.energy}`);
                    if (playerYou.energy <= 0) {
                        console.log(chalk.bgRed("You Lost! Try Again"));
                        return;
                    }
                }
                else {
                    playerEnemy.decreasEnergy();
                    console.log(chalk.green.bold(`${playerYou.name} Energy: ${playerYou.energy}`));
                    console.log(`${playerEnemy.name} Energy: ${playerEnemy.energy}`);
                    if (playerEnemy.energy <= 0) {
                        console.log(chalk.green.bold("You Won"));
                        return;
                    }
                }
                break;
            case "Kick":
                const randomNumber4 = Math.random();
                if (randomNumber4 > 0.5) {
                    playerYou.decreasEnergy();
                    console.log(chalk.green.bold(`${playerYou.name} Energy: ${playerYou.energy}`));
                    console.log(`${playerEnemy.name} Energy: ${playerEnemy.energy}`);
                    if (playerYou.energy <= 0) {
                        console.log(chalk.bgRed("You Lost! Try Again"));
                        return;
                    }
                }
                else {
                    playerEnemy.decreasEnergy();
                    console.log(chalk.green.bold(`${playerYou.name} Energy: ${playerYou.energy}`));
                    console.log(`${playerEnemy.name} Energy: ${playerEnemy.energy}`);
                    if (playerEnemy.energy <= 0) {
                        console.log(chalk.green.bold("You Won"));
                        return;
                    }
                }
                break;
            case "Punch":
                const randomNumber5 = Math.random();
                if (randomNumber5 > 0.5) {
                    playerYou.decreasEnergy();
                    console.log(chalk.green.bold(`${playerYou.name} Energy: ${playerYou.energy}`));
                    console.log(`${playerEnemy.name} Energy: ${playerEnemy.energy}`);
                    if (playerYou.energy <= 0) {
                        console.log(chalk.bgRed("You Lost! Try Again"));
                        return;
                    }
                }
                else {
                    playerEnemy.decreasEnergy();
                    console.log(chalk.green.bold(`${playerYou.name} Energy: ${playerYou.energy}`));
                    console.log(`${playerEnemy.name} Energy: ${playerEnemy.energy}`);
                    if (playerEnemy.energy <= 0) {
                        console.log(chalk.green.bold("You Won"));
                        return;
                    }
                }
                break;
        }
    } while (true);
}
main();
