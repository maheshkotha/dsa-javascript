/*  Create an array with 5 students name, after that create a
    function which takes 2 parameters (allStudents, studentName)
    iterate over all students and find that specific user "studentName"
*/

const studentData = ['ravi', 'ramu', 'krishna', 'hari'];

function findStudent(allStudents, studentName) {
    for(let i = 0; i < allStudents.length; i++) {
        if(allStudents[i] === studentName) {
            console.log("found", studentName)
        }
    }
}
//  Time Complexity -- O(n)

findStudent(studentData, 'ramu');




const groceries = ['milk', 'bread', 'eggs', 'flour', 'choose', 'sugar'];

const searchForItem = (item) => {
    for(let i = 0; i < groceries.length; i++) {
        if(groceries[i] === item) {
            console.log('found item', item)
        }
    }

    for(let j = 0; j < groceries.length; j++) {
        if(groceries[j] === item) {
            console.log('found item', item);
        }
    }

    /* 
        Here there is no the complexity O(2n), it only O(n), both for loops
        iterate same array 
    */
}

searchForItem('eggs')



// O(1)

const numbers = [1, 2, 3, 4, 5];

const getElement = (arr, index) => arr[index]
console.log(getElement(numbers, 3))


// O(n^2)
/* Imagne you have a box of items and want to compare each item with every other item
    to find specific paris. As the number of times (n) increases, the number of 
    comparisions (n ^2) grows much faster.
 */

function findPairs(arr) {
    // O(n ^2)
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(`Pair: ${arr[i]} , ${arr[j]}`)
        }
    }

    // O(n)
    for(let q = 0; q < arr.length; q++) {
        console.log(arr[q])
    }
}

// If we combine all the "O" operations it becomes O(n ^2 + n)
// O(n^2) is a Dominant term
// O(n) is a non-Dominant term
// So we remove the non-Dominant term and we're only left with O(n^2)
// This way, we simplify our big O

console.log(findPairs([1, 2, 3, 4, 5]))


/*  
    O(log2 n)  

    list = [1, 2, 3, 4, 5, 6, 7, 8];
    find element

    use divide and concore
    [1, 2, 3, 4] [ 5, 6, 7, 8]  --- 1
    [1, 2] [3, 4] [5, 6] [7, 8] --- 2
    [1][2] [3][4] [5] [6] [7] [8]  ---3

    2 to the what power equals 8 ?
    
    log2 8 = 3
*/