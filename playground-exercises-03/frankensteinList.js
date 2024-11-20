class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SortedLinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new number while maintaining sorted order
    add(value) {
        const newNode = new Node(value);

        // If the list is empty or the new value is smaller than the head
        if (!this.head || value < this.head.value) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        // Traverse the list to find the correct position for the new node
        let current = this.head;
        while (current.next && current.next.value < value) {
            current = current.next;
        }

        // Insert the new node at the correct position
        newNode.next = current.next;
        current.next = newNode;
    }

    // Display the list
    display() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

// Example Usage
const list = new SortedLinkedList();
list.add(30);
list.add(10);
list.add(20);
list.add(40);

console.log("Sorted List:", list.display()); // [10, 20, 30, 40]

list.add(25);
console.log("After Adding 25:", list.display()); // [10, 20, 25, 30, 40]

list.add(5);
console.log("After Adding 5:", list.display()); // [5, 10, 20, 25, 30, 40]
