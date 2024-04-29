/**
 * @fileoverview Write a function called findMissingNumber that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.
 */


function findMissingNumber(arr) {

    const a = arr
    const length = a.length + 1;

    let newArray = Array.from({ length }, () => false);
    for (let i of a) {
        newArray[i] = i;

    }

    newArray.splice(0, 1);
    asas = newArray.indexOf(false);

    console.log(asas + 1)


}

findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]); 



    // const arrylist = arr.sort(function(a,b){return a-b});

    // let dif =null;

    // for(let i =0; i < arrylist.length -1; i++){
    //     if((arrylist[i+1]- arrylist[i] ) == ( arrylist[arrylist.length -(i+1) ] -   arrylist[arrylist.length -(i+2) ])){
    //         dif = arrylist[i+1]- arrylist[i];
    //         break;
    //     }
    // }

    // for(let i = 0; i < arrylist.length -1; i++){
    //     if(!arrylist.includes(arrylist[i]+1)){
    //         return arrylist[i]+1
    //     }
    // }
