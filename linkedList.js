// Linked List

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkdeList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
            this.length++
        }
        return this;
    }

    pop() {
        if(!this.head) {
            return undefined
        }
        let temp = this.head;
        let prev = this.head;
        while(temp.next) {
            prev = temp;
            temp = prev.next
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++
        }
        return this;
    }

    shift() {
        if(!this.head) {
            return undefined;
        } else {
            let temp = this.head;
            this.head = temp.next;
            temp.next = null;
            this.length--

            if(this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return temp;
        }
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if(!this.head) {
            return null;
        }
        let temp = this.head;
        while(temp) {
            if(!temp.next) {
                return temp;
            }
            temp = temp.next;
        }
    }

    get(index) {
        let temp = this.head;
        let count = 0;
        while(temp) {
            if(count === index) {
                return temp;
            }
            count++;
            temp = temp.next;
        }
    }

    set(index, data) {
        let temp = this.get(index);
        temp.data = data
    }

    insert(index, value) {
        let newNode = new Node(value)
        if(index === 0) {
            this.unshift(value)
        } else if(index === this.length) {
            this.push(value)
        } else {
            const newNode = new Node(value);
            const temp = this.get(index - 1);
            newNode.next = temp.next;
            temp.next = newNode;
            this.length++
            return true;
        }
    }

    size() {
        let counter = 0;
        let temp = this.head;
        while(temp.next) {
            counter++;
            temp = temp.next;
        }
        return counter
    }

    clear() {
        this.head = null;
        this.tail = null;
    }
}


const myLinkedList = new LinkdeList(1);

myLinkedList.push(5)
myLinkedList.push(8);
myLinkedList.push(24);
myLinkedList.push(90);


console.log('###################', myLinkedList)
console.log('GET First ---->',myLinkedList.getFirst())
console.log('GET Last ---->',myLinkedList.getLast())

console.log(myLinkedList.get(3))
myLinkedList.pop()
myLinkedList.set(3, 45);
myLinkedList.unshift(12)
myLinkedList.insert(1, 23)
console.log("----- Final List -----")
console.log(myLinkedList)


console.log(myLinkedList.size())