/**
 * A TypeScript interface mirroring Java's List interface.
 * This interface defines a contract for ordered collections (also known as sequences).
 * The user of this interface has precise control over where in the list each element is inserted.
 * The user can access elements by their integer index (position in the list).
 */
export interface List<E> {
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
  contains(element: E): boolean;

  /**
   * Returns an iterator over the elements in this list in proper sequence.
   * @returns an iterator over the elements in this list in proper sequence
   */
  [Symbol.iterator](): Iterator<E>;

  /**
   * Returns an array containing all of the elements in this list in proper sequence.
   * @returns an array containing all of the elements in this list in proper sequence
   */
  toArray(): E[];

  /**
   * Returns an array containing all of the elements in this list in proper sequence.
   * The runtime type of the returned array is that of the specified array.
   * @param a the array into which the elements of this list are to be stored
   * @returns an array containing the elements of this list
   */
  toArray<T>(a: T[]): T[];

  // Modification Operations

  /**
   * Appends the specified element to the end of this list.
   * @param element element to be appended to this list
   * @returns true (as specified by the Collection interface)
   */
  add(element: E): boolean;

  /**
   * Removes the first occurrence of the specified element from this list, if it is present.
   * @param element element to be removed from this list, if present
   * @returns true if this list contained the specified element
   */
  remove(element: E): boolean;

  /**
   * Removes the element at the specified position in this list.
   * @param index the index of the element to be removed
   * @returns the element that was removed from the list
   * @throws RangeError if the index is out of range
   */
  remove(index: number): E;

  // Bulk Modification Operations

  /**
   * Returns true if this list contains all of the elements of the specified collection.
   * @param collection collection to be checked for containment in this list
   * @returns true if this list contains all of the elements of the specified collection
   */
  containsAll(collection: Iterable<E>): boolean;

  /**
   * Appends all of the elements in the specified collection to the end of this list.
   * @param collection collection containing elements to be added to this list
   * @returns true if this list changed as a result of the call
   */
  addAll(collection: Iterable<E>): boolean;

  /**
   * Inserts all of the elements in the specified collection into this list at the specified position.
   * @param index index at which to insert the first element from the specified collection
   * @param collection collection containing elements to be added to this list
   * @returns true if this list changed as a result of the call
   * @throws RangeError if the index is out of range
   */
  addAll(index: number, collection: Iterable<E>): boolean;

  /**
   * Removes from this list all of its elements that are contained in the specified collection.
   * @param collection collection containing elements to be removed from this list
   * @returns true if this list changed as a result of the call
   */
  removeAll(collection: Iterable<E>): boolean;

  /**
   * Retains only the elements in this list that are contained in the specified collection.
   * @param collection collection containing elements to be retained in this list
   * @returns true if this list changed as a result of the call
   */
  retainAll(collection: Iterable<E>): boolean;

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
  get(index: number): E;

  /**
   * Replaces the element at the specified position in this list with the specified element.
   * @param index index of the element to replace
   * @param element element to be stored at the specified position
   * @returns the element previously at the specified position
   * @throws RangeError if the index is out of range
   */
  set(index: number, element: E): E;

  /**
   * Inserts the specified element at the specified position in this list.
   * @param index index at which the specified element is to be inserted
   * @param element element to be inserted
   * @throws RangeError if the index is out of range
   */
  add(index: number, element: E): void;

  // Search Operations

  /**
   * Returns the index of the first occurrence of the specified element in this list,
   * or -1 if this list does not contain the element.
   * @param element element to search for
   * @returns the index of the first occurrence of the specified element in this list,
   * or -1 if this list does not contain the element
   */
  indexOf(element: E): number;

  /**
   * Returns the index of the last occurrence of the specified element in this list,
   * or -1 if this list does not contain the element.
   * @param element element to search for
   * @returns the index of the last occurrence of the specified element in this list,
   * or -1 if this list does not contain the element
   */
  lastIndexOf(element: E): number;

  // List Iterators (not included as they're not common in TypeScript)

  // View Operations

  /**
   * Returns a view of the portion of this list between the specified fromIndex, inclusive,
   * and toIndex, exclusive.
   * @param fromIndex low endpoint (inclusive) of the subList
   * @param toIndex high endpoint (exclusive) of the subList
   * @returns a view of the specified range within this list
   * @throws RangeError if fromIndex or toIndex are out of range
   */
  subList(fromIndex: number, toIndex: number): List<E>;

  // Additional operations from Java 8+

  /**
   * Performs the given action for each element of the list.
   * @param action The action to be performed for each element
   */
  forEach(action: (element: E) => void): void;

  /**
   * Replaces each element of this list with the result of applying the operator to that element.
   * @param operator the operator to apply to each element
   */
  replaceAll(operator: (element: E) => E): void;

  /**
   * Sorts this list according to the order induced by the specified Comparator.
   * @param comparator the Comparator used to compare list elements
   */
  sort(comparator?: (a: E, b: E) => number): void;
}
