import SinglyLinkedList from '.';

describe('singly-linked-list', () => {
  it('add node', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    expect(singlyLinkedList.head.value).toBe(1);
    expect(singlyLinkedList.tail.value).toBe(2);
  });
});
