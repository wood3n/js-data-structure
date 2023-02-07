import Node from './node';

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    // 空链表
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head) {
      this.head.prev = newNode;
      newNode.next = this.head;
    }

    this.head = newNode;

    // 空链表
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  findByIndex(index) {
    const nodeIndex = index < 0 ? 0 : index;
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (count === nodeIndex) {
        return currentNode;
      }

      currentNode = currentNode.next;
      count += 1;
    }

    return currentNode;
  }

  insert(index, value) {
    const nodeIndex = index < 0 ? 0 : index;
    if (nodeIndex === 0) {
      this.prepend(value);
      return this;
    }

    const newNode = new Node(value);
    const prevNode = this.findByIndex(nodeIndex);

    if (prevNode) {
      prevNode.prev = newNode;
      newNode.next = prevNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      } else {
        this.head = newNode;
        this.tail = newNode;
      }
    }

    return this;
  }

  remove(index) {
    const nodeIndex = index < 0 ? 0 : index;
    if (nodeIndex === 0 && this.head) {
      if (this.head.next) {
        this.head.next.prev = null;
      } else {
        this.tail = null;
      }
      this.head = this.head.next;
    }

    const currentNode = this.head;
    const count = 0;

    while (currentNode) {
      if (nodeIndex === count) {
        if (currentNode.next) {

        }
      }
    }

    return this;
  }
}

export default DoublyLinkedList;
