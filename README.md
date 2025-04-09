# data-structures-js

A collection of data structures implemented in JavaScript/TypeScript, designed to mirror the functionality and behavior of standard Java data structures.

## Implemented Data Structures and Interfaces

### Interfaces

#### [List](./List/README.md)
A TypeScript interface that mirrors Java's List interface, defining a contract for ordered collections (sequences) where elements can be accessed by their integer index. This interface is implemented by various list implementations.

### Implementations

#### [ArrayList](./ArrayList/README.md)
A JavaScript/TypeScript implementation of Java's ArrayList data structure that implements the List interface. It provides a resizable-array implementation with dynamic capacity management and includes all standard operations like add, remove, get, set, as well as bulk operations, array operations, and functional operations.

## Features

- **Type Safety**: Written in TypeScript with full type definitions
- **Java Parity**: Implementations closely match Java's behavior and structure
- **Interface-based Design**: Uses interfaces like in Java for polymorphism
- **Comprehensive Testing**: Each data structure includes thorough test cases
- **Performance Optimized**: Implementations consider algorithmic complexity
- **Well Documented**: Each component includes detailed documentation

## Usage

Each data structure is implemented as a standalone module that can be imported and used in your JavaScript or TypeScript projects.

### JavaScript Usage

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

### TypeScript Usage with Interfaces

```typescript
import { List } from './List/List';
import { ArrayList } from './ArrayList/ArrayList';

// Create a List using ArrayList implementation
const list: List<number> = new ArrayList<number>();

// Use List interface methods
list.add(1);
list.add(2);
list.add(3);

// Use polymorphism - any List implementation will work
function printList<T>(list: List<T>): void {
  for (const item of list) {
    console.log(item);
  }
}

printList(list); // Works with any List implementation
```

## Future Additions

More data structures and interfaces will be added to this collection in the future, including:

### Interfaces
- Collection
- Set
- Map
- Queue
- Deque

### Implementations
- LinkedList
- Stack
- HashMap
- TreeMap
- HashSet
- TreeSet
