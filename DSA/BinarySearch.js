// Binary search is a searching technique on sorted array,  it follows divide and conqure rule. the time complexoty is O(logN).

function binarysearch(){


    const a = [1, 3, 5, 7, 8, 9]
    const find = 3;
    
    let lowerIndexValue = 0;
    
    let higherIndexValue = a.length -1;
    
    
    while (lowerIndexValue <= higherIndexValue){
      
      let midvalue = Math.floor(lowerIndexValue+ higherIndexValue /2);
      
      if(a[midvalue]== find){
        return true;
      }
      
      if(a[midvalue] < find){
        lowerIndexValue = midvalue
      }else{
        higherIndexValue= midvalue
      }
    
    }
    return false
    }
    
    console.log(binarysearch())