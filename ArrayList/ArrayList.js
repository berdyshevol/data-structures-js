'use strict';

class ArrayList {
  constructor(items = []) {
    this._capacity = Math.max(10, items.length);  // Initial capacity like Java
    this.items = Array(this._capacity);
    this._size = 0;  // Track size separately
    
    // Add each item individually to properly track size
    for (let i = 0; i < items.length; i++) {
      this.items[i] = items[i];
    }
    this._size = items.length;
  }

  // Add an element to the list
  add(indexOrElement, element) {
    if (element === undefined) {
      // add(element) overload
      if (this._size >= this._capacity) {
        this._grow();
      }
      this.items[this._size++] = indexOrElement;
      return true;  // Java's add always returns true
    } else {
      // add(index, element) overload
      if (indexOrElement < 0 || indexOrElement > this._size) {
        throw new RangeError('Index out of bounds');
      }
      if (this._size >= this._capacity) {
        this._grow();
      }
      // Shift elements right
      for (let i = this._size; i > indexOrElement; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.items[indexOrElement] = element;
      this._size++;
      return true;
    }
  }

  // Get an element at a specific index
  get(index) {
    if (index < 0 || index >= this._size) {
      throw new RangeError('Index out of bounds');
    }
    return this.items[index];
  }

  // Set element at specific index, returns the old value
  set(index, element) {
    if (index < 0 || index >= this._size) {
      throw new RangeError('Index out of bounds');
    }
    const oldValue = this.items[index];
    this.items[index] = element;
    return oldValue;
  }

  // Remove element either by index or by value
  remove(indexOrElement) {
    if (typeof indexOrElement === 'number') {
      // remove(index) overload
      if (indexOrElement < 0 || indexOrElement >= this._size) {
        throw new RangeError('Index out of bounds');
      }
      const removed = this.items[indexOrElement];
      // Shift elements left
      for (let i = indexOrElement; i < this._size - 1; i++) {
        this.items[i] = this.items[i + 1];
      }
      this.items[this._size - 1] = undefined;
      this._size--;
      return removed;
    } else {
      // remove(element) overload
      if (this._size === 0) {
        return false;
      }
      const index = this.indexOf(indexOrElement);
      if (index === -1) {
        return false;
      }
      const removed = this.items[index];
      // Shift elements left
      for (let i = index; i < this._size - 1; i++) {
        this.items[i] = this.items[i + 1];
      }
      this.items[this._size - 1] = undefined;
      this._size--;
      return true;
    }
  }

  // Get the size of the list (number of elements, not capacity)
  size() {
    return this._size;
  }

  // Check if the list is empty
  isEmpty() {
    return this._size === 0;
  }

  // Check if list contains element
  contains(element) {
    return this.indexOf(element) !== -1;
  }

  // Get index of first occurrence of element
  indexOf(element) {
    for (let i = 0; i < this._size; i++) {
      if (this.items[i] === element) {
        return i;
      }
    }
    return -1;
  }

  // Get index of last occurrence of element
  lastIndexOf(element) {
    for (let i = this._size - 1; i >= 0; i--) {
      if (this.items[i] === element) {
        return i;
      }
    }
    return -1;
  }

  // Add all elements to the end of the list
  addAll(indexOrCollection, collection) {
    if (collection === undefined) {
      // addAll(collection) overload
      if (!this._isIterable(indexOrCollection)) {
        throw new TypeError('Collection must be iterable');
      }
      const elements = [...indexOrCollection];
      if (elements.length === 0) {
        return false;
      }
      // Ensure capacity
      this.ensureCapacity(this._size + elements.length);
      // Add all elements
      elements.forEach(element => {
        this.items[this._size++] = element;
      });
      return true;
    } else {
      // addAll(index, collection) overload
      if (!this._isIterable(collection)) {
        throw new TypeError('Collection must be iterable');
      }
      if (typeof indexOrCollection !== 'number') {
        throw new TypeError('Index must be a number');
      }
      if (indexOrCollection < 0 || indexOrCollection > this._size) {
        throw new RangeError('Index out of bounds');
      }
      const elements = [...collection];
      if (elements.length === 0) {
        return false;
      }
      // Ensure capacity
      this.ensureCapacity(this._size + elements.length);
      // Shift existing elements right
      for (let i = this._size - 1; i >= indexOrCollection; i--) {
        this.items[i + elements.length] = this.items[i];
      }
      // Insert new elements
      elements.forEach((element, i) => {
        this.items[indexOrCollection + i] = element;
      });
      this._size += elements.length;
      return true;
    }
  }

  // Helper method to check if something is iterable
  _isIterable(obj) {
    return obj != null && typeof obj[Symbol.iterator] === 'function';
  }

  // Remove all occurrences of elements in the collection
  removeAll(collection) {
    if (!this._isIterable(collection)) {
      throw new TypeError('Collection must be iterable');
    }
    const elementSet = new Set([...collection]);
    const originalSize = this._size;
    // Remove matching elements and shift others left
    let writeIndex = 0;
    for (let readIndex = 0; readIndex < originalSize; readIndex++) {
      const element = this.items[readIndex];
      if (!elementSet.has(element)) {
        if (writeIndex !== readIndex) {
          this.items[writeIndex] = element;
        }
        writeIndex++;
      }
    }
    // Clear remaining elements and update size
    for (let i = writeIndex; i < originalSize; i++) {
      this.items[i] = undefined;
    }
    const changed = writeIndex !== originalSize;
    this._size = writeIndex;
    return changed;
  }

  // Keep only elements that are in the collection
  retainAll(collection) {
    if (!this._isIterable(collection)) {
      throw new TypeError('Collection must be iterable');
    }
    const elementSet = new Set([...collection]);
    const originalSize = this._size;
    // Keep matching elements and shift others left
    let writeIndex = 0;
    for (let readIndex = 0; readIndex < originalSize; readIndex++) {
      const element = this.items[readIndex];
      if (elementSet.has(element)) {
        if (writeIndex !== readIndex) {
          this.items[writeIndex] = element;
        }
        writeIndex++;
      }
    }
    // Clear remaining elements and update size
    for (let i = writeIndex; i < originalSize; i++) {
      this.items[i] = undefined;
    }
    const changed = writeIndex !== originalSize;
    this._size = writeIndex;
    return changed;
  }

  // Check if list contains all elements in the collection
  containsAll(collection) {
    if (!this._isIterable(collection)) {
      throw new TypeError('Collection must be iterable');
    }
    return [...collection].every(element => this.contains(element));
  }

  // Convert list to array
  toArray(array) {
    if (array === undefined) {
      // toArray() overload - return copy of internal array
      return this.items.slice(0, this._size);
    } else {
      // toArray(array) overload - copy elements into provided array
      if (!Array.isArray(array)) {
        throw new TypeError('Argument must be an array');
      }
      // If provided array is too small, return new array
      if (array.length < this._size) {
        return this.items.slice(0, this._size);
      }
      // Copy elements to provided array
      for (let i = 0; i < this._size; i++) {
        array[i] = this.items[i];
      }
      // Set remaining elements to undefined (like Java sets to null)
      for (let i = this._size; i < array.length; i++) {
        array[i] = undefined;
      }
      return array;
    }
  }

  // Get a view of a portion of the list
  subList(fromIndex, toIndex) {
    if (fromIndex < 0) {
      throw new RangeError('fromIndex = ' + fromIndex);
    }
    if (toIndex > this._size) {
      throw new RangeError('toIndex = ' + toIndex);
    }
    if (fromIndex > toIndex) {
      throw new RangeError('fromIndex(' + fromIndex + ') > toIndex(' + toIndex + ')');
    }
    
    // Create a new ArrayList with the slice of items
    return new ArrayList(this.items.slice(fromIndex, toIndex));
  }

  // Capacity Operations
  ensureCapacity(minCapacity) {
    if (minCapacity > this._capacity) {
      // Grow by 50% like Java
      const newCapacity = Math.max(minCapacity, Math.floor(this._capacity * 1.5));
      const newItems = Array(newCapacity);
      // Copy elements
      for (let i = 0; i < this._size; i++) {
        newItems[i] = this.items[i];
      }
      this.items = newItems;
      this._capacity = newCapacity;
    }
  }

  trimToSize() {
    if (this._size < this._capacity) {
      const newItems = Array(this._size);
      // Copy elements
      for (let i = 0; i < this._size; i++) {
        newItems[i] = this.items[i];
      }
      this.items = newItems;
      this._capacity = this._size;
    }
  }

  // Helper method to grow internal array
  _grow() {
    this.ensureCapacity(this._capacity + 1);
  }

  // Functional Operations
  forEach(action) {
    if (typeof action !== 'function') {
      throw new TypeError('Action must be a function');
    }
    for (let i = 0; i < this._size; i++) {
      action(this.items[i]);
    }
  }

  replaceAll(operator) {
    if (typeof operator !== 'function') {
      throw new TypeError('Operator must be a function');
    }
    for (let i = 0; i < this._size; i++) {
      this.items[i] = operator(this.items[i]);
    }
  }

  sort(comparator) {
    // If no comparator provided, use default comparison
    const comp = comparator || ((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    
    // Get non-empty elements
    const elements = this.items.slice(0, this._size);
    
    // Sort them
    elements.sort(comp);
    
    // Put them back
    for (let i = 0; i < elements.length; i++) {
      this.items[i] = elements[i];
    }
  }

  // Iterator Operations
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this._size) {
          return { value: this.items[index++], done: false };
        }
        return { done: true };
      }
    };
  }

  // Clear all elements from the list
  clear() {
    this.items = Array(this._capacity);
    this._size = 0;
  }
}

module.exports = { ArrayList };
