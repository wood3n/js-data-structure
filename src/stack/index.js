class Stack {
  stack = [];

  limit;

  /**
   * constructor of the stack, can set a limit, if not provided there is no limit to the stack.
   * @param {number} [limit=Number.MAX_VALUE] the limit of the stack
   */
  constructor(limit = Number.MAX_VALUE) {
    this.limit = limit;
  }

  /**
   * @function push
   * @description - adds a new element to the stack
   * @param {T} value - the new value to add
   */
  push(value) {
    if (this.length() + 1 > this.limit) {
      throw new Error('Stack Overflow');
    }

    this.stack.push(value);
  }

  /**
   * @function pop
   * @description - remove an element from the top
   * @throws will throw an error if the stack is empty
   * @return {T} removed element
   */
  pop() {
    if (this.length() !== 0) {
      return this.stack.pop();
    }

    throw new Error('Stack Underflow');
  }

  /**
   * @function length
   * @description - number of elements in the stack
   * @return {number} the number of elements in the stack
   */
  length() {
    return this.stack.length;
  }

  /**
   * @function isEmpty
   * @description - check if the stack is empty
   * @return {boolean} returns true if the stack is empty, otherwise false
   */
  isEmpty() {
    return this.length() === 0;
  }

  /**
   * @function top
   * @description - return the last element in the stack without removing it
   * @return {T | null} return the last element or null if the stack is empty
   */
  top() {
    if (this.length() !== 0) {
      return this.stack[this.length() - 1];
    }

    return null;
  }
}

export default Stack;
