//Hash tabel is a popular technique used for storing and retrieving data as fast as possible. 
// it performs insertion, deletion, searching, and other operations

// hashing is to set data in key value pair, 
// hashing get the data based on key
// hashing del data based on key



class HashTabel{
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
        this.array[total]= value
    };

    get(key){
        const total = this.hash(key);

         console.log(key , this.array[total])
    }

    del(key){
        const total = this.hash(key);

        if(this.array[total]){
            this.array[total] = undefined;
        }
    }


    printvalue(){

        for(let i =0 ; i <this.array.length ; i++){
            if(this.array[i]){
                console.log(i, this.array[i]);
            }
        }
    }
}

const hashing = new HashTabel(50);

hashing.set("name", "ashish");
hashing.set("email", "email@gmail.com");
hashing.set("moble", "1234567890");

hashing.get("name");

hashing.printvalue();

hashing.del("email");

hashing.printvalue();



