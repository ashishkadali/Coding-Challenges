let arr = [ 64, 34, 25, 12, 22, 11, 90 ];


for(let i=0; i < arr.length-1;i++){

  for(let j = 0; j < arr.length-1-i; j++){
    let a = arr[j];
    let b = arr[j+1];
    if(a>b){
      arr[j] = b
      arr[j+1] = a
    }
    
  }
  
}

console.log(arr)