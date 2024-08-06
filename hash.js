// Hash 

class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size)
    }

    _hashFunction(key) {
        let sum = 0;

        const PRIME_NUMBER = 31

        for(let i = 0; i < Math.min(key.length, 100); i++) {
            const charCode = key.charCodeAt(0) - 96;
            sum = (sum + PRIME_NUMBER + charCode) % this.keyMap.length;
        }

        return sum;
    }

    set(key, value) {
        const index = this._hashFunction(key);
        console.log(index, !this.keyMap[index])
        if(!this.keyMap[index]) this.keyMap[index] = []

        this.keyMap[index].push([key, value])
    }

    get(key) {
        const index = this._hashFunction(key)

        if(this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }

        return undefined
    }

    getAllKeys() {
        const keys = [];

        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0])
                }
            }
        }
        return keys;
    }

    getAllValues() {
        const values = [];

        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1])
                }
            }
        }
        return values;
    }
}


const phoneBook = new HashTable();

phoneBook.set('john', '555-333-222')
phoneBook.set('alex', '222-111-999')

console.log(phoneBook)

console.log(phoneBook.get('john'))

console.log(phoneBook.getAllKeys())

console.log(phoneBook.getAllValues());


function wordCounter(str) {
    const lowerText = str.toLowerCase();

    const words = lowerText.split(/\s+/);

    const wordMap = {}

    for(w of words) {
        if(w in wordMap) {
            wordMap[w]++
        } else {
            wordMap[w] = 1
        }
    }

    return wordMap;
}


console.log(wordCounter('abc abc abc mahesh mahesh kotha kotha babu babu babu'))


function twoSum(nums, target) {
    const numMap = {}

    for(let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];

        if(compliment in numMap && numMap[compliment] !== i) {
            return [numMap[compliment], i]
        }

        numMap[nums[i]] = i;
    }
    return []
}

console.log(twoSum([2, 7, 11, 15], 18))