export declare class ArrayList<T> {
  private items: T[];

  // Add an element to the list
  add(item: T): void;

  // Get an element at a specific index
  get(index: number): T | undefined;

  // Remove an element at a specific index
  remove(index: number): void;

  // Get the size of the list
  size(): number;

  // Check if the list is empty
  isEmpty(): boolean;

  // Clear all elements from the list
  clear(): void;
}
