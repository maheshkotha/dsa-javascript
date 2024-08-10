# dsa-javascript

# Data Structure
- A data structure is specific way of organizing, storing, and accessing data.

# Algorithm
- A set of instructions that tells a computer how to do something, or you can 
also say step-by-step solutionn of the problem is called algorithm



* How can we tell if the code we just wrote is GOOD CODE?

 - Big 'O'  -- Time Complexity 

    - how long --> Time Complexity
    - how much --> Space Complexity
    
    - Big O notation helps us understand how long an algorithm will take to run 
    or how much memory it will need as the amount of data it handles grows.

# Time Complexity
- O(n)
    - iterate over all elements

- O(1)
    - O(1) aka constant time, signifies that the execution time of an algorithm remains
  constant regardless of input size.

- O(n^2)
    - Indicates that the algorithm's execution time grows quadratically with the size 
      of the input data (represented by n)

- O(log n)
    - O(log n) time complexity refers to an algorithm's runtime that grows logarithmically
    with the size of the input (represented by n). In simpler terms, as the input size increases, the time it takes for the algorithms to run increses slowly.



# Arrays
- Introduction
- Custom Array
- Challenges
  - Reverse String
  - Palindromes
  - Integer Reversal
  - Sentence Capitalization
  - FizzBuzz
  - Max Profit
  - Array Chunk
  - Two Sum


# Array DS
  - Data structure array is an ordered collection of elements that can be 
    accessed using a numarical index.

* Reverse String
  - Convert String to array  (split)
  - Reverse the Array  (reverse)
  - Convert array back to String.  (join)

- Palindrome :: If the reverse string is equal to the original then the word is a palindrome

* Integer Reverse
  - convert number to string
  - convert strign to array
  - reverse the array
  - convert array back to string
  - convert string back to number 

* Sentence Capitalization
  - make the string to lowercase
  - convert the string to array
  - Capitalize each word
    - iterate array and set First letter UpperCase and concate remaing word
  - Convert array back to String

* FizzBuzz
  - Print Numbers from 1 to n
  - If number is divisible by 3, print Fizz
  - if number is divisible by 5, print Buzz
  - If number is divisible by 3 & 5, print FizzBuzz
  - else print the number


* * Max Profit ::
  Imagane you're buying and selling stocks throughout the year. Your job is to find the
  biggest profit you could make by buying and selling high only once

  Here what you're given:

  A list of stocks prices for each day  [7, 1, 5, 3, 6, 4]

  Here's what you need to find:

  The difference between the cheapest price you could have bought the stock and the most
  expencive price you could have sold it later on.


* * Array Chunk ::
  Write a function that takes an array and a chunk size as input The function should
  return a new array where the original array is split into chunks of the specified
  size.

* * Two Sum ::
    Imagine you have a list of numbers and a target numbers. your job is to find two 
    numbers in that list that add up to the target numbers. You aslo need to tell 
    which position (indexes) those two numbers are at in the list.

    Example: 
        If the list is [2, 7, 11, 15] and the target is 9, then the answer would
        be [0, 1] because 2 (at index 0) plus 7 (at index 1) equals 9.


# Linked List

  - Single Linked List
  - Double Linked List
  - Reverse(Circular) Linked List 

* Single Linked List
  - Push
  - Pop
  - UnShift
  - Shift
  - GetFirst
  - GetLast
  - Set
  - Insert
  - Size
  - Clear

* Double Linked List
  - Push
  - Pop
  - Shift
  - UnShift

* Reverse Linked List


# Linked List
  - A linked list is a linear data structure where elements, called nodes,
    are not stored contiguously in memory.
    Insted, each node contains data and a reference, or link, to the next node
    in the sequence.

  -> First element call the Head,
  -> Last element call the Tail


# Stack and Queue
* Stack
  - A stack is a linear data structure that folows LIFO(Last In First Out) principle

* Queue
  - A queue is a linear data structure that function like a waiting line. It follows
  the FIFO(First In, First Out) principle, meaning the element enters the queue first 
  will be the first one to be removed.


# Hash Table
  - Data structure use to store key-value pairs.
    * Javascripts : Object
    * Python: Dictionaries
    * Go: Maps
  
  - Suppose we want to store a phone number in hash table

    john: 345665
    alex: 985678
    luci: 456786

    To solve this problem, we'll be using a "has functions"

  
  * Hash Function 
    - Acts like as a translator, taking an input of any size (key) and converting it
    into a fixed-size value (hash code) that can be used as an index within the hash 
    table's internal array. This process of mapping arbitrary keys to fixed-length indices
    is called hashing.

    - Input: you feed any kind of data into the hash function, like your name, a sentance,
    or a whole file.

    - Hashing process: The function performs a series of mathematical operations on the
    input data, essentially scrambling it up in a unique way.

    - Fixed-Size Output: Regardless of the input size, the hash function always spits out
    a fixed-size value, like a short string of characters or a number.

  

  # Tree
  - A DS Tree is a fundamental hierarchical data structure. It represents a collection of 
  elements (data) called nodes, connected by edges (links) forming a tree like structure.

  * Parent
  * Children / Sibilin
  * leaf

  # Full Tree
  -  Each no either has no children(lear node) or exactly two children

  # Perfect Tree (full + Balance)
  - Balance: All the leaf nodes are at the same depth (distance from the root). This means 
  the tree is completely filled with no gaps at any level.

  # Complete Tree
  - Almost Full Levels:: All levels except possibly the last one are completely filled
  with nodes.

  - Left Leaning Last Level:: The last level is filled with nodes from the left side as much
  as possible. There might be empty spaces on the right.

  # Binary Search Tree (BST)
  - A BST is a special kind of binary tree used to organize data in a stored way. It works like a filling cabinet where you can efficiently search, add or remove items.


  # Recursion
  - Recursion is when a function calls itself. But it doesn't call itself exactly the same
  way each time.

  - The function makes the problem smaller by changing the input a bit.
  like opening a smaller doll inside the bigger one.

  - There's a simple case, that the function can solve without calling itself again.
  This is called the base case.(The small doll)

  - As long as it's not the base case, the function call itself with the smaller problem.


   
# Bearth First Search
- 