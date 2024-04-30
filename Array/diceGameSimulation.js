/**
 * @fileoverview
 * Write a function called diceGameSimulation that simulates this dice game.
 *  The function should take one argument:
 * numSimulations: The number of times to simulate the dice game.
 * The game rules are if a 7 or 11 are rolled, the player wins and they get a result of win. If a 2, 3 or 12 are rolled they lose and get a result of lose. Anything else and they get a result of roll again.
 */

function resultfunction(result){

    if([7,11].includes(result)){
        return "win"
    }else if( [2,3,12].includes(result)){
        return "lose"
    }else{
        return "roll again"
    }
}

function diceGameSimulation(numbers){

    let finalobj=[];

    for(let i=0; i<numbers;i++){
        const a = Math.floor(Math.random() *6)+1;
        const b =  Math.floor(Math.random() *6)+1
        let obj ={
            dice1 : a,
            dice2 : b,
            sum : a+b,
            result :  resultfunction(a+b)
        }
        finalobj.push(obj)
    }
    return finalobj

}
console.log(diceGameSimulation(3));