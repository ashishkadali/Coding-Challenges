// Deque is a data structure that inherits the properties of both queues and stacks.

// Enqueue Front: Add an element to the front of the deque.
// Enqueue Rear: Add an element to the rear of the deque.
// Dequeue Front: Remove an element from the front of the deque.
// Dequeue Rear: Remove an element from the rear of the deque.
// Front: Get the element at the front of the deque without removing it.
// Rear: Get the element at the rear of the deque without removing it.


class dQueue{
    constructor(){
      this.list = []
    };
    
        spush(data){
        this.list.push(data)
      }
      
       qpush(data){
        this.list.push(data)
      }
      
      spop(){
        if(this.list.length == 0){
          console.log("no data")
          return;
        }
        this.list.pop()
      }
      
      qpop(){
        this.list.splice(0,1);
      }
      
      speek(){ //returns the top most elements in the stack,
        return this.list[this.list.length -1]
      }
  
      qpeek(){
        return this.list[0]
      }
      
      prints(){
        return this.list;
      }
  }
  
  
  const q = new dQueue();
  
  
    q.qpush(32)
    q.qpush(3221)
    q.qpush(31242)
    q.qpush(43)
    q.qpush(3322)
    q.qpush(90)
    q.qpush(78);
    q.spush(32)
    q.spush(3221)
    q.spush(31242)
    q.spush(43)
    q.spush(3322)
    q.spush(90)
    q.spush(78);  
    
    q.spop();
  
    
    q.qpop()
  console.log(q.qpeek())
  console.log(q.prints())
  