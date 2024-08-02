//  Node
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.length = 1;
        } else {
            newNode.next = this.first;
            this.first = newNode;
            this.length++
        }
    }

    pop() {
        if(this.length === 0) return undefined;
        const temp = this.first;
        this.first = this.first.next;
        this.length--
        temp.next = null;
        return temp;
    }

    min() {
        let current = this.first;
        let minValue = current.data;
        while(current.next) {
            current = current.next;
            if(current.data < minValue) {
                minValue = current.data
            }
        }
        return minValue;
    }
}

const myStack = new Stack(1);

myStack.push(22)
myStack.push(3)
myStack.push(4)

console.log(myStack.min(), 'min value')

console.log(myStack.pop())
console.log(myStack)


// valid parenthesis check

const  isValidParenthesis = (str) => {
    let stack = [];
    const brackets = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    for(let char of str) {
        if(brackets[char]){
            stack.push(char);
        } else {
            const top = stack.pop();

            if(!top || brackets[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0
}

console.log(isValidParenthesis('([][][])'))