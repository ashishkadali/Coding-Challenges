/**
 * @fileoverview 
 * Write a function called findFirstNonRepeatingCharacter that takes in a string
 * returns the first non-repeating character in the string.
 */

function findFirstNonRepeatingCharacter(aa){

    const b = aa.split("");
    let obj = {}

    for(let i=0; i<b.length-1;i++){
        const data = b.slice(i+1, b.length);

        if(!data.includes(b[i]) & !obj[b[i]]){
            return b[i]
        }else{
            obj[b[i]]=1
        }
    }
    return null;
};

console.log(findFirstNonRepeatingCharacter('aabbcc'));

/**
 * @testcases
 * findFirstNonRepeatingCharacter('aabccdeff'); // should return 'b'
findFirstNonRepeatingCharacter('aabbcc'); // should return null
findFirstNonRepeatingCharacter('abcdef'); // should return 'a'
 */