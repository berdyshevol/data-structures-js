# List Interface

This is a TypeScript interface that mirrors Java's `List` interface. It defines a contract for ordered collections (also known as sequences) where elements can be accessed by their integer index (position in the list).

## Purpose

The `List` interface provides a common contract that various list implementations can adhere to, enabling:

1. **Polymorphism**: Code can work with any `List` implementation
2. **Standardization**: All implementations share the same method signatures
3. **Interoperability**: Lists can be used interchangeably where the interface is expected

## Interface Methods

The interface includes all standard operations from Java's List interface:

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

### List Views
- `subList(fromIndex, toIndex)`: Returns view of portion of list

### Functional Operations (Java 8+)
- `forEach(action)`: Performs action on each element
- `replaceAll(operator)`: Replaces elements with results of operator
- `sort(comparator?)`: Sorts list using optional comparator

## Implementations

Current implementations of this interface:

- [ArrayList](../ArrayList/README.md): A resizable-array implementation

## Usage Example

```typescript
import { List } from '../List/List';
import { ArrayList } from '../ArrayList/ArrayList';

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

## TypeScript vs Java Differences

1. **Method Overloading**: TypeScript handles method overloading differently than Java
2. **Iterator Protocol**: Uses JavaScript's `[Symbol.iterator]()` instead of Java's `Iterator`
3. **Generics**: TypeScript generics differ from Java generics in some ways
4. **No Checked Exceptions**: TypeScript doesn't have checked exceptions like Java
