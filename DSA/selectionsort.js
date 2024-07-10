

let a = [64, 25, 12, 22, 11];

for(let i = 0; i < a.length-1; i++){
  
  const min = Math.min(...a.slice(i+1, a.length))
  if(a[i] > min){
    const index = a.indexOf(min);
    a.splice(index,1,a[i]);
    a[i] = min
  }

}
console.log(a)