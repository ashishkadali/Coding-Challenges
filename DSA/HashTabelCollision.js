
// collision happend, where user try to store different type of value in same index collison will ocour.
// solution is insted of storing one value on index we should store array of values.


class HashTabelCollision{
    constructor(size){
        this.array = new Array(size);
        this.size = size
    };


    hash(key){
        let total = 0 ;

        for(let i = 0; i < key.length ; i++){
            total += key.charCodeAt(i);
        }

        return total % this.size  // % with size because it wil be in the range of the size;

    }

    set(key,value){
        const total = this.hash(key);
        //her we check the particular index is empty or not if empty it will create new array and push [ket,velue] or if array alredy exits it will push [key,value]
        const bucket = this.array[total];

        if(!bucket){
            this.array[total] = [[key,value]]
        }else{

            const keyExits = bucket.find((item)=> item[0]==key);
            
            if(keyExits){
                keyExits[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    };

    get(key){
        const total = this.hash(key);

        // console.log(key , this.array[total])
        const bucket =  this.array[total];
        
        if(bucket){
            const keyExits = bucket.find((item)=> item[0]==key);
            console.log(keyExits)
        }else{
          console.log("no key")
        }
        
    }

    

        del(key){
            const total = this.hash(key);
    
            const bucket =  this.array[total];
            if(bucket){
                  const keyExits = bucket.find((item)=> item[0]==key);
                  bucket.splice(bucket.indexOf(keyExits), 1);
    
            }
    
        }


}

const hashing = new HashTabelCollision(50);

hashing.set("name", "ashish");
hashing.set("name","kadlai");
hashing.set("nmae","fuck");



hashing.get("kk")



