'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { ArrayList } = require('./ArrayList.js');

// Comprehensive tests for ArrayList with focus on overloaded methods and edge cases
test('ArrayList - constructor overloads', (t) => {
  // Test constructor with no arguments
  const emptyList = new ArrayList();
  assert.equal(emptyList.size(), 0);
  assert.equal(emptyList.isEmpty(), true);
  
  // Test constructor with array
  const arrayList = new ArrayList([1, 2, 3]);
  assert.equal(arrayList.size(), 3);
  assert.deepEqual(arrayList.toArray(), [1, 2, 3]);
  
  // Test constructor with other iterable (Set)
  const setList = new ArrayList(new Set([1, 2, 3, 3])); // Note duplicate 3 will be ignored in Set
  assert.equal(setList.size(), 3);
  assert.deepEqual(setList.toArray(), [1, 2, 3]);
  
  // Test constructor with empty iterable
  const emptyIterableList = new ArrayList([]);
  assert.equal(emptyIterableList.size(), 0);
});

test('ArrayList - add method overloads', (t) => {
  const list = new ArrayList();
  
  // Test add(element)
  assert.equal(list.add(1), true);
  assert.equal(list.size(), 1);
  assert.equal(list.get(0), 1);
  
  // Test add(index, element) - middle insertion
  list.add(1, 2);
  assert.equal(list.size(), 2);
  assert.equal(list.get(0), 1);
  assert.equal(list.get(1), 2);
  
  // Test add(index, element) - beginning insertion
  list.add(0, 0);
  assert.equal(list.size(), 3);
  assert.equal(list.get(0), 0);
  assert.equal(list.get(1), 1);
  assert.equal(list.get(2), 2);
  
  // Test add(index, element) - end insertion
  list.add(3, 3);
  assert.equal(list.size(), 4);
  assert.equal(list.get(3), 3);
  
  // Test add(index, element) - out of bounds
  try {
    list.add(10, 10);
    assert.fail('Should have thrown RangeError');
  } catch (e) {
    assert.ok(e instanceof RangeError);
  }
  
  try {
    list.add(-1, -1);
    assert.fail('Should have thrown RangeError');
  } catch (e) {
    assert.ok(e instanceof RangeError);
  }
});

test('ArrayList - remove method overloads', (t) => {
  const list = new ArrayList([0, 1, 2, 3, 1]);
  
  // Test remove(index)
  const removed = list.remove(2);
  assert.equal(removed, 2);
  assert.equal(list.size(), 4);
  assert.deepEqual(list.toArray(), [0, 1, 3, 1]);
  
  // Test remove(element) - first occurrence
  const result1 = list.remove(1);
  assert.equal(result1, true);
  assert.equal(list.size(), 3);
  assert.deepEqual(list.toArray(), [0, 3, 1]);
  
  // Test remove(element) - element not found
  const result2 = list.remove(2);
  assert.equal(result2, false);
  assert.equal(list.size(), 3);
  
  // Test remove(index) - out of bounds
  try {
    list.remove(10);
    assert.fail('Should have thrown RangeError');
  } catch (e) {
    assert.ok(e instanceof RangeError);
  }
  
  // Test remove from empty list
  const emptyList = new ArrayList();
  try {
    emptyList.remove(0);
    assert.fail('Should have thrown RangeError');
  } catch (e) {
    assert.ok(e instanceof RangeError);
  }
  assert.equal(emptyList.remove(5), false);
});

test('ArrayList - addAll method overloads', (t) => {
  const list = new ArrayList([1, 2]);
  
  // Test addAll(collection)
  const result1 = list.addAll([3, 4, 5]);
  assert.equal(result1, true);
  assert.equal(list.size(), 5);
  assert.deepEqual(list.toArray(), [1, 2, 3, 4, 5]);
  
  // Test addAll(index, collection) - middle insertion
  const result2 = list.addAll(2, [2.1, 2.2, 2.3]);
  assert.equal(result2, true);
  assert.equal(list.size(), 8);
  assert.deepEqual(list.toArray(), [1, 2, 2.1, 2.2, 2.3, 3, 4, 5]);
  
  // Test addAll(index, collection) - beginning insertion
  const result3 = list.addAll(0, [0.1, 0.2]);
  assert.equal(result3, true);
  assert.equal(list.size(), 10);
  assert.deepEqual(list.toArray(), [0.1, 0.2, 1, 2, 2.1, 2.2, 2.3, 3, 4, 5]);
  
  // Test addAll(index, collection) - end insertion
  const result4 = list.addAll(list.size(), [6, 7]);
  assert.equal(result4, true);
  assert.equal(list.size(), 12);
  assert.deepEqual(list.toArray(), [0.1, 0.2, 1, 2, 2.1, 2.2, 2.3, 3, 4, 5, 6, 7]);
  
  // Test addAll with empty collection
  const result5 = list.addAll([]);
  assert.equal(result5, false);
  assert.equal(list.size(), 12);
  
  const result6 = list.addAll(0, []);
  assert.equal(result6, false);
  assert.equal(list.size(), 12);
  
  // Test addAll(index, collection) - out of bounds
  try {
    list.addAll(-1, [8, 9]);
    assert.fail('Should have thrown RangeError');
  } catch (e) {
    assert.ok(e instanceof RangeError);
  }
  
  try {
    list.addAll(list.size() + 1, [8, 9]);
    assert.fail('Should have thrown RangeError');
  } catch (e) {
    assert.ok(e instanceof RangeError);
  }
});

test('ArrayList - toArray method overloads', (t) => {
  const list = new ArrayList([1, 2, 3]);
  
  // Test toArray()
  const arr1 = list.toArray();
  assert.deepEqual(arr1, [1, 2, 3]);
  
  // Test toArray(array) - smaller array
  const smallArray = [0, 0];
  const arr2 = list.toArray(smallArray);
  assert.deepEqual(arr2, [1, 2, 3]);
  assert.notEqual(arr2, smallArray); // Should return new array, not modify input
  
  // Test toArray(array) - exact size array
  const exactArray = [0, 0, 0];
  const arr3 = list.toArray(exactArray);
  assert.deepEqual(arr3, [1, 2, 3]);
  
  // Test toArray(array) - larger array
  const largeArray = [0, 0, 0, 0, 0];
  const arr4 = list.toArray(largeArray);
  assert.deepEqual(arr4, [1, 2, 3, undefined, undefined]);
  
  // Test toArray with empty list
  const emptyList = new ArrayList();
  assert.deepEqual(emptyList.toArray(), []);
  assert.deepEqual(emptyList.toArray([0, 0]), []);
});

test('ArrayList - sort method overloads', (t) => {
  // Test sort() - default comparator
  const list1 = new ArrayList([3, 1, 4, 2]);
  list1.sort();
  assert.deepEqual(list1.toArray(), [1, 2, 3, 4]);
  
  // Test sort(comparator) - custom comparator
  const list2 = new ArrayList([3, 1, 4, 2]);
  list2.sort((a, b) => b - a); // Descending order
  assert.deepEqual(list2.toArray(), [4, 3, 2, 1]);
  
  // Test sort with empty list
  const emptyList = new ArrayList();
  emptyList.sort();
  assert.deepEqual(emptyList.toArray(), []);
  
  // Test sort with single element
  const singleList = new ArrayList([1]);
  singleList.sort();
  assert.deepEqual(singleList.toArray(), [1]);
  
  // Test sort with strings
  const stringList = new ArrayList(['banana', 'apple', 'cherry']);
  stringList.sort();
  assert.deepEqual(stringList.toArray(), ['apple', 'banana', 'cherry']);
});

test('ArrayList - subList behavior', (t) => {
  const list = new ArrayList([0, 1, 2, 3, 4]);
  
  // Test subList returns correct elements
  const subList = list.subList(1, 4);
  assert.deepEqual(subList.toArray(), [1, 2, 3]);
  
  // Test that subList is a new ArrayList (not a view)
  subList.add(5);
  assert.deepEqual(subList.toArray(), [1, 2, 3, 5]);
  assert.deepEqual(list.toArray(), [0, 1, 2, 3, 4]); // Original list unchanged
  
  // Test that modifying original list doesn't affect subList
  list.set(2, 10);
  assert.deepEqual(subList.toArray(), [1, 2, 3, 5]); // SubList unchanged
  
  // Test subList with invalid ranges
  try {
    list.subList(-1, 3);
    assert.fail('Should have thrown RangeError');
  } catch (e) {
    assert.ok(e instanceof RangeError);
  }
  
  try {
    list.subList(2, 10);
    assert.fail('Should have thrown RangeError');
  } catch (e) {
    assert.ok(e instanceof RangeError);
  }
  
  try {
    list.subList(3, 2);
    assert.fail('Should have thrown RangeError');
  } catch (e) {
    assert.ok(e instanceof RangeError);
  }
});

test('ArrayList - iterator behavior', (t) => {
  const list = new ArrayList([1, 2, 3]);
  
  // Test basic iteration
  let sum = 0;
  for (const item of list) {
    sum += item;
  }
  assert.equal(sum, 6);
  
  // Test iteration with empty list
  const emptyList = new ArrayList();
  let count = 0;
  for (const item of emptyList) {
    count++;
  }
  assert.equal(count, 0);
  
  // Test that iterator reflects changes to list
  list.add(4);
  sum = 0;
  for (const item of list) {
    sum += item;
  }
  assert.equal(sum, 10);
  
  // Document behavior for concurrent modification
  // Note: Java would throw ConcurrentModificationException, but JavaScript doesn't have this concept
  // This test documents our implementation's behavior
  const concurrentList = new ArrayList([1, 2, 3]);
  try {
    let iterationCount = 0;
    for (const item of concurrentList) {
      iterationCount++;
      if (iterationCount === 1) {
        concurrentList.add(4); // Modify during iteration
      }
    }
    // If we reach here, our implementation doesn't check for concurrent modifications
    assert.equal(concurrentList.size(), 4);
  } catch (e) {
    // If we catch an error, our implementation does check for concurrent modifications
    console.log('Iterator throws on concurrent modification');
  }
});

// Run all tests
if (require.main === module) {
  test.run();
}
