//  Node
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
            this.length = 1
        } else {
            this.last.next = newNode;
            this.last = newNode;
            this.length++;
        }
        return this;
    }

    dequeue() {
        if(this.length === 0) {
            return undefined
        } else if(this.length === 1) {
            this.first = null;
            this.last = null;
            this.length = 0;
        } else {
            const temp  = this.first;
            this.first = this.first.next;
            temp.next = null;
            this.length--
        }
    }
}

const myQueue = new Queue(1);


myQueue.enqueue(2);
myQueue.enqueue(3)
myQueue.enqueue(4);
myQueue.enqueue(5)

myQueue.dequeue()
myQueue.dequeue();

console.log(myQueue)