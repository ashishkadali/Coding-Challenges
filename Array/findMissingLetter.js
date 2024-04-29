/**
 * @fileoverview Write a function called findMissingLetter that takes in an array of consecutive (increasing)
 *  letters as input and returns the missing letter in the array.
 */

function findMissingLetter(mainarr){

    let arr = mainarr.sort()
    const start = arr[0].charCodeAt(0);
    const ending = arr[arr.length-1].charCodeAt(0);

    for(let i =start+1;i <ending; i++){
        const a = String.fromCharCode(i)
        if(!arr.includes( a)){
            return a
        }
    }
    
}
console.log(
    findMissingLetter(['O', 'Q', 'R', 'S'])
);

/**
 * @test
 * findMissingLetter(['a', 'b', 'c', 'd', 'f']); // => "e"
findMissingLetter(['O', 'Q', 'R', 'S']); // => "P"
findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z']); // => "y"
 */
