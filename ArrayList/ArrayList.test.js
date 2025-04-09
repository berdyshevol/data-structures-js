'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { ArrayList } = require('./ArrayList.js');

test('ArrayList - basic operations', (t) => {
  const list = new ArrayList();
  
  // Test add and size
  assert.equal(list.size(), 0);
  assert.equal(list.add(1), true);
  assert.equal(list.size(), 1);
  console.log('After add(1):', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test add at index
  list.add(0, 0);
  assert.equal(list.size(), 2);
  assert.equal(list.get(0), 0);
  assert.equal(list.get(1), 1);
  console.log('After add(0, 0):', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test set
  assert.equal(list.set(1, 2), 1);
  assert.equal(list.get(1), 2);
  console.log('After set(1, 2):', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test remove by index
  if (list.size() > 0) {
    assert.equal(list.remove(0), 0);
    assert.equal(list.size(), 1);
    assert.equal(list.get(0), 2);
    console.log('After remove(0):', list.items.slice(0, list._size), 'size:', list._size);
  }
  
  // Test remove by value
  if (list.size() > 0) {
    assert.equal(list.remove(2), true);
    assert.equal(list.size(), 0);
    console.log('After remove(2):', list.items.slice(0, list._size), 'size:', list._size);
  }
  
  // Test remove by value when empty
  assert.equal(list.remove(1), false);
  assert.equal(list.size(), 0);
  console.log('After remove(1):', list.items.slice(0, list._size), 'size:', list._size);
});

test('ArrayList - information methods', (t) => {
  const list = new ArrayList();
  
  // Test isEmpty
  assert.equal(list.isEmpty(), true);
  list.add(1);
  assert.equal(list.isEmpty(), false);
  console.log('After add(1):', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test contains
  assert.equal(list.contains(1), true);
  assert.equal(list.contains(2), false);
  console.log('After contains(1) and contains(2):', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test indexOf and lastIndexOf
  list.add(2);
  list.add(1);
  assert.equal(list.indexOf(1), 0);
  assert.equal(list.lastIndexOf(1), 2);
  assert.equal(list.indexOf(3), -1);
  console.log('After add(2) and add(1):', list.items.slice(0, list._size), 'size:', list._size);
});

test('ArrayList - bulk operations', (t) => {
  const list = new ArrayList();
  
  // Test addAll
  assert.equal(list.addAll([1, 2, 3]), true);
  assert.equal(list.size(), 3);
  console.log('After addAll([1, 2, 3]):', list.items.slice(0, list._size), 'size:', list._size);
  
  assert.equal(list.addAll(1, [4, 5]), true);
  assert.equal(list.size(), 5);
  assert.equal(list.get(1), 4);
  console.log('After addAll(1, [4, 5]):', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test removeAll
  list.addAll([2, 4, 2, 4]);
  assert.equal(list.removeAll([1, 3, 5]), false); // No elements removed
  assert.equal(list.size(), 4); // Size should remain the same
  assert.equal(list.get(0), 2);
  assert.equal(list.get(1), 4);
  console.log('After removeAll([1, 3, 5]):', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test removeAll with actual removals
  assert.equal(list.removeAll([2, 4]), true); // Elements removed
  assert.equal(list.size(), 0); // Size should be 0
  console.log('After removeAll([2, 4]):', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test retainAll
  list.addAll([2, 6]);
  assert.equal(list.retainAll([2, 6]), false);
  assert.equal(list.size(), 2);
  assert.equal(list.get(0), 2);
  console.log('After retainAll([2, 6]):', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test containsAll
  assert.equal(list.containsAll([2]), true);
  assert.equal(list.containsAll([2, 4]), false);
  console.log('After containsAll([2]) and containsAll([2, 4]):', list.items.slice(0, list._size), 'size:', list._size);
});

test('ArrayList - array operations', (t) => {
  const list = new ArrayList();
  list.addAll([1, 2, 3]);
  
  // Test toArray()
  const arr1 = list.toArray();
  assert.deepEqual(arr1, [1, 2, 3]);
  console.log('After toArray():', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test toArray(array) with smaller array
  const arr2 = list.toArray([0, 0]);
  assert.deepEqual(arr2, [1, 2, 3]);
  console.log('After toArray([0, 0]):', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test toArray(array) with larger array
  const arr3 = list.toArray([0, 0, 0, 0, 0]);
  assert.deepEqual(arr3, [1, 2, 3, undefined, undefined]);
  console.log('After toArray([0, 0, 0, 0, 0]):', list.items.slice(0, list._size), 'size:', list._size);
});

test('ArrayList - capacity operations', (t) => {
  const list = new ArrayList();
  
  // Test ensureCapacity
  list.ensureCapacity(20);
  for (let i = 0; i < 15; i++) {
    list.add(i);
  }
  assert.equal(list.size(), 15);
  console.log('After ensureCapacity(20) and add(i):', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test trimToSize
  list.trimToSize();
  assert.equal(list.size(), 15);
  console.log('After trimToSize():', list.items.slice(0, list._size), 'size:', list._size);
});

test('ArrayList - functional operations', (t) => {
  const list = new ArrayList();
  list.addAll([1, 3, 2]);
  
  // Test forEach
  let sum = 0;
  list.forEach(x => sum += x);
  assert.equal(sum, 6);
  console.log('After forEach:', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test replaceAll
  list.replaceAll(x => x * 2);
  assert.deepEqual(list.toArray(), [2, 6, 4]);
  console.log('After replaceAll:', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test sort
  list.sort();
  assert.deepEqual(list.toArray(), [2, 4, 6]);
  console.log('After sort():', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test sort with comparator
  list.sort((a, b) => b - a);
  assert.deepEqual(list.toArray(), [6, 4, 2]);
  console.log('After sort((a, b) => b - a):', list.items.slice(0, list._size), 'size:', list._size);
});

test('ArrayList - list views', (t) => {
  const list = new ArrayList();
  list.addAll([1, 2, 3, 4, 5]);
  
  // Test subList
  const sub = list.subList(1, 4);
  assert.deepEqual(sub.toArray(), [2, 3, 4]);
  console.log('After subList(1, 4):', list.items.slice(0, list._size), 'size:', list._size);
});

test('ArrayList - iterator', (t) => {
  const list = new ArrayList();
  list.addAll([1, 2, 3]);
  
  // Test for...of
  let sum = 0;
  for (const x of list) {
    sum += x;
  }
  assert.equal(sum, 6);
  console.log('After for...of:', list.items.slice(0, list._size), 'size:', list._size);
});

test('ArrayList - remove and removeAll', (t) => {
  const list = new ArrayList([2, 4, 2, 4]);
  
  // Test remove by index
  if (list.size() > 0) {
    assert.equal(list.remove(0), 2); // Ensure valid index
    console.log('After remove(0):', list.items.slice(0, list._size), 'size:', list._size);
  }
  
  // Test removeAll
  assert.equal(list.removeAll([1, 3, 5]), false); // No elements removed
  assert.equal(list.size(), 3); // Size should remain the same
  assert.equal(list.get(0), 4);
  assert.equal(list.get(1), 2);
  console.log('After removeAll([1, 3, 5]):', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test removeAll with actual removals
  assert.equal(list.removeAll([2, 4]), true); // Elements removed
  assert.equal(list.size(), 0); // Size should be 0
  console.log('After removeAll([2, 4]):', list.items.slice(0, list._size), 'size:', list._size);
  
  // Test retainAll
  list.addAll([2, 6]);
  assert.equal(list.retainAll([2, 6]), false); // No change expected
  assert.equal(list.size(), 2);
  assert.equal(list.get(0), 2);
  console.log('After retainAll([2, 6]):', list.items.slice(0, list._size), 'size:', list._size);
});
