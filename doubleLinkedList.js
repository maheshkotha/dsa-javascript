// Node
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length++
        }
        return this;
    }

    pop() {
        const temp = this.tail;
        if(this.length === 0) {
            return undefined
        } else if(this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return temp;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
            this.length--
            return temp;
        }
    }

    unshift(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.length++
        }
        return this;
    }

    shift() {
        if(!this.head) {
            return undefined;
        } else if(this.length === 1) {
            this.head = null;
            this.tail = null;
            return this.head
        } else {
            const temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            temp.next = null;
            return temp;
        }
    }
}

const myDoublyLList = new DoublyLinkedList(1);

myDoublyLList.push(5)
myDoublyLList.push(10)
myDoublyLList.push(15)

console.log(myDoublyLList.pop());
console.log(myDoublyLList.pop());
myDoublyLList.unshift(100)

console.log(myDoublyLList.shift());

console.log(myDoublyLList)
