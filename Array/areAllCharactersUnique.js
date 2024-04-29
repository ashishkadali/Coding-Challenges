/**
 * @fileoverview
 * Write a function called areAllCharactersUnique that takes in a string and 
 * returns true or false depending on whether all characters in the string are unique (i.e., no character is repeated) 
 */

function areAllCharactersUnique(a){
    if(a.lenght <=1){
        return false;
    }
    const aa = a.split("");
   
    let obj = {};

    for(let i of aa){
        if(obj[i]){
            return false
        }else{
            obj[i]=1
        }
    }
    return true
} 

console.log(
    areAllCharactersUnique('programming')
)

/**
 * @test_cases
 * areAllCharactersUnique('abcdefg'); // true
areAllCharactersUnique('abcdefgA'); // true
areAllCharactersUnique('programming'); // false
areAllCharactersUnique(''); // true
areAllCharactersUnique('a'); // true
 */