# ArrayList Implementation

This is a JavaScript/TypeScript implementation of Java's ArrayList data structure. It provides a resizable-array implementation of a list interface with all the standard operations and behaviors matching Java's ArrayList.

## Features

### Basic Operations
- `add(element)`: Appends element to end (returns true)
- `add(index, element)`: Inserts element at index
- `remove(index)`: Removes element at index (returns removed element)
- `remove(element)`: Removes first occurrence of element (returns true if found)
- `get(index)`: Returns element at index
- `set(index, element)`: Replaces element at index (returns old element)
- `clear()`: Removes all elements

### Information Methods
- `size()`: Returns number of elements
- `isEmpty()`: Returns true if empty
- `contains(element)`: Returns true if element exists
- `indexOf(element)`: Returns first index of element (-1 if not found)
- `lastIndexOf(element)`: Returns last index of element (-1 if not found)

### Bulk Operations
- `addAll(collection)`: Adds all elements from collection to end
- `addAll(index, collection)`: Adds all elements at index
- `removeAll(collection)`: Removes all elements found in collection
- `retainAll(collection)`: Keeps only elements found in collection
- `containsAll(collection)`: Returns true if all elements are present

### Array Operations
- `toArray()`: Returns array containing all elements
- `toArray(array)`: Copies elements into provided array

### Capacity Operations
- `ensureCapacity(minCapacity)`: Ensures internal array has at least this capacity
- `trimToSize()`: Trims internal array to size

### Functional Operations
- `forEach(action)`: Performs action on each element
- `replaceAll(operator)`: Replaces elements with results of operator
- `sort(comparator?)`: Sorts list using optional comparator

### List Views
- `subList(fromIndex, toIndex)`: Returns view of portion of list

## Implementation Details

1. **Internal Array**: Uses a dynamic array that grows by 50% when needed
   - Initial capacity: 10 (like Java)
   - Growth factor: 1.5x (like Java)

2. **Memory Management**:
   - `ensureCapacity`: Pre-allocates space
   - `trimToSize`: Reduces memory usage
   - Automatic growth when needed

3. **Performance**:
   - Add/remove at end: O(1) amortized
   - Add/remove at index: O(n)
   - Get/set: O(1)
   - Contains/indexOf: O(n)
   - Size: O(1)

4. **Type Safety**:
   - Written in TypeScript for type safety
   - Generic type parameter T
   - Full type definitions in .d.ts file

## Usage Example

```typescript
const list = new ArrayList<number>();

// Basic operations
list.add(1);              // [1]
list.add(0, 0);          // [0, 1]
list.add(2);             // [0, 1, 2]

// Bulk operations
list.addAll([3, 4, 5]);  // [0, 1, 2, 3, 4, 5]
list.removeAll([1, 3]);  // [0, 2, 4, 5]

// Information
console.log(list.size());        // 4
console.log(list.contains(2));   // true
console.log(list.indexOf(4));    // 2

// Functional
list.forEach(x => console.log(x));
list.replaceAll(x => x * 2);
list.sort((a, b) => a - b);
```

## Differences from Java

1. Error Types:
   - Uses `RangeError` instead of `IndexOutOfBoundsException`
   - Uses `TypeError` instead of `NullPointerException`

2. Type System:
   - Uses TypeScript generics instead of Java generics
   - No explicit covariance/contravariance

3. SubList Behavior:
   - Returns new ArrayList instead of view
   - Safer in JavaScript's memory model

4. Collection Types:
   - Accepts any `Iterable<T>` instead of Java Collections
   - More flexible for JavaScript ecosystem
