/**
 * @fileoverview
 * Write a function called diceGameSimulation that simulates this dice game.
 *  The function should take one argument:
 * numSimulations: The number of times to simulate the dice game.
 * The game rules are if a 7 or 11 are rolled, the player wins and they get a result of win. If a 2, 3 or 12 are rolled they lose and get a result of lose. Anything else and they get a result of roll again.
 */

function diceGameSimulation(numbers){

    let finalobj=[];

    for(let i=0; i<numbers;i++){
        let obj ={
            dice1 : Math.random(0,6)
        }
    }

}
console.log(diceGameSimulation(3));