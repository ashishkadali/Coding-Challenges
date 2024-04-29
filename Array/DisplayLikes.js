/**
 * @fileoverview
 * Write a function called displayLikes that takes in an array of names and returns a string of who likes the post.
 */


function Likes(arratlist){
    let final =`likes the photo`
    
    if(arratlist.length == 0){
        final = `No one ${final}`
        return final
    }else if(arratlist.length == 1){
        
        final = `${arratlist[0]} liked this`
        return final
    }
    else if(arratlist.length == 2){
        final = `${arratlist[0]} and ${arratlist[1]} liked this`
        return final
    }    else if(arratlist.length == 3){
        final = `${arratlist[0]} , ${arratlist[1]} and ${arratlist[1]} liked this`
        return final
    }else{
        final = `${arratlist[0]} , ${arratlist[1]} and ${arratlist.length} liked this`
    }

}

console.log(Likes([]))