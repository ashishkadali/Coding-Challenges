// stack follows LIFO last in First out, its lenare da

class stack{
    constructor(){
      this.list = [];  
    }
    
    spush(data){
      this.list.push(data)
    }
    
    spop(){
      if(this.list.length == 0){
        console.log("no data")
        return;
      }
      this.list.pop()
    }
    
    speek(){ //returns the top most elements in the stack,
      return this.list[this.list.length -1]
    }
    
    print(){
      return this.list;
    }
  };
  
  
  const s = new stack();
  
  
  s.spush(32)
  s.spush(3221)
  s.spush(31242)
  s.spush(43)
  s.spush(3322)
  s.spush(90)
  s.spush(78);
  
  
  s.spop();
  
  console.log(s.speek());
  
  console.log(s.print())