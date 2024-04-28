/**
 * @fileoverview 
 * Given Number, loop that number. while looping number itself divide by 3 print Fizz , divide by 5 print Buzz.
 * @returns [1,2,Fizz,4,Buzz]
 */

function FizzBuzz(num){
    let finalArray=[]

    for(let i=1; i < num+1; i++){

        if(i%3 ==0){
            finalArray.push("Fizz")
        }else if( i%5 == 0){
            finalArray.push("Buzz")
        }else{
            finalArray.push(i)
        }
    }
    return finalArray
}


console.log(FizzBuzz(5));