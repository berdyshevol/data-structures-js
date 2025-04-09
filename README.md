# data-structures-js

A collection of data structures implemented in JavaScript/TypeScript, designed to mirror the functionality and behavior of standard Java data structures.

## Implemented Data Structures

### [ArrayList](./ArrayList/README.md)
A JavaScript/TypeScript implementation of Java's ArrayList data structure, providing a resizable-array implementation with dynamic capacity management. The implementation includes all standard operations like add, remove, get, set, as well as bulk operations, array operations, and functional operations.

## Features

- **Type Safety**: Written in TypeScript with full type definitions
- **Java Parity**: Implementations closely match Java's behavior
- **Comprehensive Testing**: Each data structure includes thorough test cases
- **Performance Optimized**: Implementations consider algorithmic complexity
- **Well Documented**: Each data structure includes detailed documentation

## Usage

Each data structure is implemented as a standalone module that can be imported and used in your JavaScript or TypeScript projects.

```javascript
const { ArrayList } = require('./ArrayList/ArrayList.js');

// Create a new ArrayList
const list = new ArrayList();

// Add elements
list.add(1);
list.add(2);
list.add(3);

// Use other methods
console.log(list.size());        // 3
console.log(list.contains(2));   // true
console.log(list.indexOf(3));    // 2
```

## Future Additions

More data structures will be added to this collection in the future, including:

- LinkedList
- Stack
- Queue
- HashMap
- TreeMap
- HashSet
- TreeSet
