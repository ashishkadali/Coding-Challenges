// why LinkedList: 

//LinkedList used when we dont know the size of the array prior, we use likened list, beacuse its allocate momory randomly and store the ref the next data. by using the ref we will access the next data and modify it or del it.

class Node{
  
    constructor(data){
      this.data = data
      this.ref = null
    }
    
  }
  
  class LinkedList{
    
    constructor(){
      this.head = null;
    }
    
    printLinkedList(){
      
      if(this.head == null){
        console.log("list is empty");
        return
      }else{
        let n = this.head
        
        while(n != null){
          console.log(n.data);
          n = n.ref
        }
      }
    }
    
    
    addFirstLinkedList(data){
      
        const newNode = new Node(data); // new node is created
        newNode.ref= this.head  // we are adding first na so head had ref of next node so we have give newNode.ref = this.head
        this.head = newNode // her we are changing the new
    }

    addLastLinkedList(data){
        let n = this.head;
        
        while(n.ref != null){
            n= n.ref
        }

        const newNode = new Node(data);
         n.ref = newNode
        
      }

    
  addMiddleLinkedList(value,data){
    
    let n= this.head;
    
    while(n.data != value){
        n= n.ref
    }
    if(n.data== value){
      const newNode = new Node(data);
      newNode.ref = n.ref
      n.ref = newNode
    }else{
      console.log("no value found")
    }
  }


  }
  
  
  const ll = new LinkedList();
  
  ll.addFirstLinkedList(4)
  ll.addFirstLinkedList(5)
  ll.addFirstLinkedList(6)
  ll.addFirstLinkedList(7)
  ll.addLastLinkedList(10)
  ll.addMiddleLinkedList(5, 16)
  console.log("--------------------------------------")
  
  ll.printLinkedList()
