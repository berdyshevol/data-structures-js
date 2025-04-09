export declare class ArrayList<T> {
  private items: T[];

  // Basic Operations
  add(element: T): boolean;                     // returns true (always)
  add(index: number, element: T): void;
  remove(index: number): T;                     // remove by index
  remove(element: T): boolean;                  // remove by value
  get(index: number): T;
  set(index: number, element: T): T;
  clear(): void;

  // Information Methods
  size(): number;
  isEmpty(): boolean;
  contains(element: T): boolean;               // returns true if list contains element
  indexOf(element: T): number;                 // returns index of first occurrence or -1
  lastIndexOf(element: T): number;             // returns index of last occurrence or -1

  // Bulk Operations
  addAll(collection: Iterable<T>): boolean;                // add all elements to end
  addAll(index: number, collection: Iterable<T>): boolean; // add all elements at index
  removeAll(collection: Iterable<T>): boolean;             // remove all occurrences
  retainAll(collection: Iterable<T>): boolean;             // keep only these elements
  containsAll(collection: Iterable<T>): boolean;           // check if all elements present

  // Array Operations
  toArray(): T[];                                         // returns array containing all elements
  toArray<U>(array: U[]): U[];                           // returns array of type U containing all elements

  // List Views
  subList(fromIndex: number, toIndex: number): ArrayList<T>; // view of portion of list

  // Capacity Operations
  ensureCapacity(minCapacity: number): void;              // ensures internal array has at least this capacity
  trimToSize(): void;                                     // trims internal array to size

  // Functional Operations
  forEach(action: (element: T) => void): void;            // performs action on each element
  replaceAll(operator: (element: T) => T): void;          // replaces elements with results of operator
  sort(comparator?: (a: T, b: T) => number): void;        // sorts list using comparator

  // Iterator Operations
  [Symbol.iterator](): Iterator<T>;                       // makes ArrayList iterable
}
