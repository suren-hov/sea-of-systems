class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add a new node at the end of the list (append)
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // Add a new node at the start of the list (prepend)
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    // Remove the first occurrence of a specific value
    remove(value) {
        if (!this.head) return;

        // Special case: if the value is at the head
        if (this.head.value === value) {
            this.head = this.head.next;
            if (!this.head) this.tail = null; // if list becomes empty
            this.length--;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                if (!current.next) this.tail = current; // if removed node was the last
                this.length--;
                return;
            }
            current = current.next;
        }
    }

    // Remove a node by its position (index)
    removeAt(index) {
        if (index < 0 || index >= this.length) return;

        // Special case: if index is 0
        if (index === 0) {
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            this.length--;
            return;
        }

        let current = this.head;
        let count = 0;
        while (count < index - 1) {
            current = current.next;
            count++;
        }

        current.next = current.next.next;
        if (!current.next) this.tail = current;
        this.length--;
    }

    // Find a node by its value
    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // Insert a new node at a specific index
    insert(value, index) {
        if (index < 0 || index > this.length) return;

        const newNode = new Node(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) this.tail = newNode;
        } else {
            let current = this.head;
            let count = 0;
            while (count < index - 1) {
                current = current.next;
                count++;
            }
            newNode.next = current.next;
            current.next = newNode;
            if (!newNode.next) this.tail = newNode;
        }

        this.length++;
    }

    // Reverse the entire linked list
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        this.tail = this.head;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    // Get the size of the linked list
    size() {
        return this.length;
    }

    // Check if the list is empty
    isEmpty() {
        return this.length === 0;
    }

    // Print all values in the linked list as a string
    toString() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' -> ';
            current = current.next;
        }
        return result + 'null';
    }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.toString()); // Output: "5 -> 10 -> 20 -> null"

console.log(list.size()); // Output: 3

list.remove(10);
console.log(list.toString()); // Output: "5 -> 20 -> null"

list.insert(15, 1); // Insert 15 at index 1
console.log(list.toString()); // Output: "5 -> 15 -> 20 -> null"

list.reverse();
console.log(list.toString()); // Output: "20 -> 15 -> 5 -> null"

console.log(list.search(15)); // Output: Node { value: 15, next: Node { value: 5, next: null } }
console.log(list.search(100)); // Output: null
