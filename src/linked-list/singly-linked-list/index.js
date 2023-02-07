/**
 * 单链表的实现
 */
import Node from './node.js';

class SinglyLinkedList {
  constructor() {
    /**
     * 首节点
     */
    this.head = null;
    /**
     * 尾节点
     */
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    // 空链表
    if (!this.head) {
      this.head = newNode;
    } else {
      // 修改当前尾节点指向的下一个节点为新节点
      this.tail.next = newNode;
    }

    // 将新节点设置为 tail
    this.tail = newNode;
    return this;
  }

  prepend(value) {
    // 创建新节点，并指向当前 head
    const newNode = new Node(value, this.head);
    // 将新节点设置为 head
    this.head = newNode;

    // 空链表
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  findByValue(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  findByIndex(index) {
    let currentNode = this.head;
    let nodeIndex = 0;
    while (currentNode) {
      if (nodeIndex === (index < 0 ? 0 : index)) {
        return currentNode;
      }

      currentNode = currentNode.next;
      nodeIndex += 1;
    }

    return null;
  }

  insert(index, value) {
    const nodeIndex = index < 0 ? 0 : index;
    if (nodeIndex === 0) {
      this.prepend(value);
    } else {
      // 查找指定索引的前一个节点
      const prevNode = this.findByIndex(nodeIndex - 1);
      const newNode = new Node(value);
      if (prevNode) {
        newNode.next = prevNode.next;
        prevNode.next = newNode;
      } else {
        // 索引超过链表长度的情况，需要在结尾插入新节点
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          // 空链表
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }

    return this;
  }

  /**
   * 根据索引删除节点需要调整删除元素的前一个节点的 next
   * @param {number} index
   */
  remove(index) {
    const nodeIndex = index < 0 ? 0 : index;
    // 移除首节点
    if (nodeIndex === 0 && this.head) {
      // 链表只有一个节点
      if (this.tail === this.head) {
        this.tail = null;
      }
      this.head = this.head.next;
    } else {
      let prevNode = this.head;
      if (prevNode) {
        // 非首节点，从首节点的下一个节点开始遍历，因此索引从 1 开始
        let count = 1;
        while (prevNode.next) {
          // 当前需要删除的元素
          if (count === nodeIndex) {
            // 修改尾节点
            if (this.tail === prevNode.next.next) {
              this.tail = prevNode.next;
            }
            prevNode.next = prevNode.next.next;
          }
          prevNode = prevNode.next;
          count += 1;
        }
      }
    }
  }

  /**
   * 移除所有满足条件值的节点
   * @param {unknown} value
   */
  removeAllByValue(value) {
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;
    // 当首节点不能被删除时，从其下一个节点开始遍历
    while (currentNode && currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    // 如果删除的是尾节点，则修改当前尾节点指向
    if (this.tail.value === value) {
      this.tail = currentNode;
    }

    return this;
  }

  /**
   * 反转链表，容易理解成前后节点调换位置
   */
  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let temp = null;

    while (currentNode) {
      // 暂存需要遍历的下一个节点，因为下一步要修改 currentNode 的指向
      temp = currentNode.next;
      // 反转当前节点指向的下一个节点
      currentNode.next = prevNode;
      // 暂存下一节点反转后 next 的指向
      prevNode = currentNode;
      // 遍历下一个节点
      currentNode = temp;
    }

    // 修改收尾节点指向
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}

export default SinglyLinkedList;
