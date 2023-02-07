class Queue {
  size;

  constructor() {
    this.head = null;
    this.tail = null;
    // 队列长度
    this.size = 0;
  }

  get length() {
    return this.size;
  }

  /**
   * @description - 往队列末尾添加元素
   * @param {*} data
   * @returns {number} - 返回队列新的长度
   */
  enqueue(data) {
    const node = { data, next: null };

    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size += 1;
    return this.size;
  }

  /**
   * @description - 移除队列开头元素
   * @returns {*} - 返回被移除的元素
   */
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is Empty');
    }

    const firstData = this.peekFirst();

    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.size -= 1;

    return firstData;
  }

  /**
   * @description - 返回队列开头的元素
   * @returns {*}
   */
  peekFirst() {
    if (this.isEmpty()) {
      throw new Error('Queue is Empty');
    }

    return this.head.data;
  }

  /**
   * @description - 获取队列末尾的元素
   * @returns {*}
   */
  peekLast() {
    if (this.isEmpty()) {
      throw new Error('Queue is Empty');
    }

    return this.tail.data;
  }

  /**
   * @description - 队列转换成数组
   * @returns {Array<*>}
   */
  toArray() {
    const array = [];
    let node = this.head;

    while (node) {
      array.push(node.data);
      node = node.next;
    }

    return array;
  }

  /**
  * @description - 队列是否为空
  * @returns {boolean}
  */
  isEmpty() {
    return this.length === 0;
  }
}

export default Queue;
