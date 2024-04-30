/**
 * Given a string of words, you need to find the highest scoring word.
 *  Each letter of a word scores points according to 
 * its position in the alphabet: a = 1, b = 2, c = 3, and so on.
 */


function highestScoringWord(aaa){

    let a =0;
    let b= null
    const aa= aaa.split(" ")
    for(let i=0; i < aa.length ; i++){

        let data= 0;
        let datai=aa[i];
        datai.split("").map((j)=>{
            data = data +j.charCodeAt(0);
        })

        if(a < data){
            a = data
            b= datai
        }
    }
    return b
}
console.log(
    highestScoringWord('man i need a taxi up to ubud')
)