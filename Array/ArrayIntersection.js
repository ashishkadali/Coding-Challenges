/**
 * @fileoverview 
 * Takes in two arrays and returns an common elements that appear in both array.
 */

function ArrayIntersection(array1, array2){

    let lesserLenghtarray;
    let comparearray;
    const finalArray=[]

    if(array1.length < array2){
        lesserLenghtarray= new Set(array1);
        comparearray= new Set(array2);
    }else{
        lesserLenghtarray= new Set(array2);
        comparearray= new Set(array1);
    }

    for(let i of lesserLenghtarray){
        if(comparearray.has(i)){
            finalArray.push(i)
        }
    }

    return finalArray
}

console.log(ArrayIntersection([1,2,3],[4,3,2]));