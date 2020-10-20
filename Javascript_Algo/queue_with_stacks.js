
// Queue using a Stack

// Creating a class of Queue.

class Queue {
    constructor(){
    this.first = [];
    this.last = [];
    }

// To add a element at the Queue. ( From Last)

enqueue(value){
    const length = this.first.length;

    for(let i = 0 ; i < length; i++){
        this.last.push(this.first.pop());
    }

    this.last.push(value);

        // Return the whole Queue
    return this;
}

// To Pop a element from a queue.

dequeue(){
    const length = this.last.length;
    for(let i =0; i< length; i++){
        this.first.push(this.last.pop());
    }

    this.first.pop();

    // Return the whole Queue
    return this;
}

peek(){

    // If the element is in last. 

    if(this.last.length > 0){   
        return this.last[0];
    }

    // If the element is in the first.
    return this.first[this.first.length - 1 ];

}
}

