'use strict';

class ArrayList {
  constructor() {
    this.items = [];
  }

  // Add an element to the list
  add(item) {
    this.items.push(item);
  }

  // Get an element at a specific index
  get(index) {
    if (index < 0 || index >= this.items.length) {
      throw new RangeError('Index out of bounds');
    }
    return this.items[index];
  }

  // Remove an element at a specific index
  remove(index) {
    if (index < 0 || index >= this.items.length) {
      throw new RangeError('Index out of bounds');
    }
    return this.items.splice(index, 1)[0];
  }

  // Get the size of the list
  size() {
    return this.items.length;
  }

  // Check if the list is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Clear all elements from the list
  clear() {
    this.items = [];
  }
}

module.exports = { ArrayList };
