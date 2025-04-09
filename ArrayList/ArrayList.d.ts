import { List } from '../List/List';

/**
 * A resizable-array implementation of the List interface.
 * Implements all optional list operations, and permits all elements, including null.
 * This implementation provides constant-time performance for the basic operations
 * (add, get, set, remove), assuming the internal array does not need to be resized.
 */
export declare class ArrayList<T> implements List<T> {
  /**
   * The array buffer that stores the elements of this ArrayList.
   */
  private items: T[];
  
  /**
   * The current capacity of the internal array.
   */
  private _capacity: number;
  
  /**
   * The size of this ArrayList (the number of elements it contains).
   */
  private _size: number;
  
  /**
   * Constructs an empty list with an initial capacity of ten or
   * a list containing the elements of the specified collection.
   * @param items Optional initial elements
   */
  constructor(items?: Iterable<T>);

  // Query Operations

  /**
   * Returns the number of elements in this list.
   * @returns the number of elements in this list
   */
  size(): number;

  /**
   * Returns true if this list contains no elements.
   * @returns true if this list contains no elements
   */
  isEmpty(): boolean;

  /**
   * Returns true if this list contains the specified element.
   * @param element element whose presence in this list is to be tested
   * @returns true if this list contains the specified element
   */
  contains(element: T): boolean;

  /**
   * Returns an iterator over the elements in this list in proper sequence.
   * @returns an iterator over the elements in this list in proper sequence
   */
  [Symbol.iterator](): Iterator<T>;

  /**
   * Returns an array containing all of the elements in this list in proper sequence.
   * @returns an array containing all of the elements in this list in proper sequence
   */
  toArray(): T[];

  /**
   * Returns an array containing all of the elements in this list in proper sequence.
   * The runtime type of the returned array is that of the specified array.
   * @param array the array into which the elements of this list are to be stored
   * @returns an array containing the elements of this list
   */
  toArray<U>(array: U[]): U[];

  // Modification Operations

  /**
   * Appends the specified element to the end of this list.
   * @param element element to be appended to this list
   * @returns true (as specified by the Collection interface)
   */
  add(element: T): boolean;

  /**
   * Inserts the specified element at the specified position in this list.
   * @param index index at which the specified element is to be inserted
   * @param element element to be inserted
   * @throws RangeError if the index is out of range
   */
  add(index: number, element: T): void;

  /**
   * Removes the first occurrence of the specified element from this list, if it is present.
   * @param element element to be removed from this list, if present
   * @returns true if this list contained the specified element
   */
  remove(element: T): boolean;

  /**
   * Removes the element at the specified position in this list.
   * @param index the index of the element to be removed
   * @returns the element that was removed from the list
   * @throws RangeError if the index is out of range
   */
  remove(index: number): T;

  // Bulk Modification Operations

  /**
   * Returns true if this list contains all of the elements of the specified collection.
   * @param collection collection to be checked for containment in this list
   * @returns true if this list contains all of the elements of the specified collection
   */
  containsAll(collection: Iterable<T>): boolean;

  /**
   * Appends all of the elements in the specified collection to the end of this list.
   * @param collection collection containing elements to be added to this list
   * @returns true if this list changed as a result of the call
   */
  addAll(collection: Iterable<T>): boolean;

  /**
   * Inserts all of the elements in the specified collection into this list at the specified position.
   * @param index index at which to insert the first element from the specified collection
   * @param collection collection containing elements to be added to this list
   * @returns true if this list changed as a result of the call
   * @throws RangeError if the index is out of range
   */
  addAll(index: number, collection: Iterable<T>): boolean;

  /**
   * Removes from this list all of its elements that are contained in the specified collection.
   * @param collection collection containing elements to be removed from this list
   * @returns true if this list changed as a result of the call
   */
  removeAll(collection: Iterable<T>): boolean;

  /**
   * Retains only the elements in this list that are contained in the specified collection.
   * @param collection collection containing elements to be retained in this list
   * @returns true if this list changed as a result of the call
   */
  retainAll(collection: Iterable<T>): boolean;

  /**
   * Removes all of the elements from this list.
   */
  clear(): void;

  // Positional Access Operations

  /**
   * Returns the element at the specified position in this list.
   * @param index index of the element to return
   * @returns the element at the specified position in this list
   * @throws RangeError if the index is out of range
   */
  get(index: number): T;

  /**
   * Replaces the element at the specified position in this list with the specified element.
   * @param index index of the element to replace
   * @param element element to be stored at the specified position
   * @returns the element previously at the specified position
   * @throws RangeError if the index is out of range
   */
  set(index: number, element: T): T;

  // Search Operations

  /**
   * Returns the index of the first occurrence of the specified element in this list,
   * or -1 if this list does not contain the element.
   * @param element element to search for
   * @returns the index of the first occurrence of the specified element in this list,
   * or -1 if this list does not contain the element
   */
  indexOf(element: T): number;

  /**
   * Returns the index of the last occurrence of the specified element in this list,
   * or -1 if this list does not contain the element.
   * @param element element to search for
   * @returns the index of the last occurrence of the specified element in this list,
   * or -1 if this list does not contain the element
   */
  lastIndexOf(element: T): number;

  // View Operations

  /**
   * Returns a view of the portion of this list between the specified fromIndex, inclusive,
   * and toIndex, exclusive.
   * @param fromIndex low endpoint (inclusive) of the subList
   * @param toIndex high endpoint (exclusive) of the subList
   * @returns a new ArrayList containing elements from this list in the specified range
   * @throws RangeError if fromIndex or toIndex are out of range
   */
  subList(fromIndex: number, toIndex: number): ArrayList<T>;

  // Additional operations from Java 8+

  /**
   * Performs the given action for each element of the list.
   * @param action The action to be performed for each element
   */
  forEach(action: (element: T) => void): void;

  /**
   * Replaces each element of this list with the result of applying the operator to that element.
   * @param operator the operator to apply to each element
   */
  replaceAll(operator: (element: T) => T): void;

  /**
   * Sorts this list according to the order induced by the specified Comparator.
   * @param comparator the Comparator used to compare list elements
   */
  sort(comparator?: (a: T, b: T) => number): void;

  // ArrayList-specific Operations

  /**
   * Increases the capacity of this ArrayList instance, if necessary,
   * to ensure that it can hold at least the number of elements specified by the minimum capacity argument.
   * @param minCapacity the desired minimum capacity
   */
  ensureCapacity(minCapacity: number): void;

  /**
   * Trims the capacity of this ArrayList instance to be the list's current size.
   * An application can use this operation to minimize the storage of an ArrayList instance.
   */
  trimToSize(): void;

  // Private helper methods

  /**
   * Increases the capacity to ensure that it can hold at least the
   * number of elements specified by the minimum capacity argument.
   */
  private _grow(): void;

  /**
   * Checks if the given object is iterable.
   * @param obj The object to check
   * @returns true if the object is iterable, false otherwise
   */
  private _isIterable(obj: any): boolean;
}
