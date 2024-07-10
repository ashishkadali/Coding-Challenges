// Queue follows FIFO First in first out its also leaner data strutuce:

// enqueue : To add elements at the end of the queue.
// dequeue: To remove an element from the front of the queue.
// peek: To get the front element without removing it.
// isEmpty: To check whether an element is present in the queue or not.
// printQueue: To print the elements present in the queue.
class Queue{
    constructor(){
      this.list = []
    };
    
      qpush(data){
        this.list.push(data)
      }
      qpop(){
        this.list.splice(0,1);
      }
      
      qpeek(){
        return this.list[0]
      }
      qprint(){
        return this.list;
      }
  }
  
  
  const q = new Queue();
  
  
    q.qpush(32)
    q.qpush(3221)
    q.qpush(31242)
    q.qpush(43)
    q.qpush(3322)
    q.qpush(90)
    q.qpush(78);
    
    q.qpop()
  console.log(q.qpeek())
  console.log(q.qprint())
  