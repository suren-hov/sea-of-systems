class Node {
  constructor(bit) {
    this.bit = bit; // Should be 0 or 1
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Converts a double number to a 64-bit binary linked list
  static fromDouble(number) {
    const buffer = new ArrayBuffer(8); // 8 bytes for a 64-bit number
    const view = new DataView(buffer);
    view.setFloat64(0, number, false); // Use big-endian representation
    let binaryString = '';
    for (let i = 0; i < 8; i++) {
      binaryString += view.getUint8(i).toString(2).padStart(8, '0');
    }

    const list = new LinkedList();
    for (let bit of binaryString) {
      list.append(Number(bit));
    }
    return list;
  }

  // Converts the binary linked list back to a double-precision floating-point number
  toDouble() {
    let binaryString = this.toBinaryString();
    const buffer = new ArrayBuffer(8); // 8 bytes for a 64-bit number
    const view = new DataView(buffer);

    for (let i = 0; i < 8; i++) {
      const byte = parseInt(binaryString.slice(i * 8, (i + 1) * 8), 2);
      view.setUint8(i, byte);
    }
    return view.getFloat64(0, false); // Convert back to double
  }

  // Adds two linked lists representing 64-bit binary numbers
  static add(listA, listB) {
    const binaryA = listA.toBinaryString();
    const binaryB = listB.toBinaryString();

    let carry = 0;
    let resultBinary = '';
    for (let i = 63; i >= 0; i--) {
      const bitA = Number(binaryA[i] || 0);
      const bitB = Number(binaryB[i] || 0);

      const sum = bitA + bitB + carry;
      resultBinary = (sum % 2) + resultBinary;
      carry = Math.floor(sum / 2);
    }

    const result = new LinkedList();
    for (let bit of resultBinary) {
      result.append(Number(bit));
    }
    return result;
  }

  // Converts the linked list to a binary string
  toBinaryString() {
    let current = this.head;
    let binaryString = '';
    while (current) {
      binaryString += current.bit;
      current = current.next;
    }
    return binaryString;
  }

  // Helper method to append a bit to the linked list
  append(bit) {
    const newNode = new Node(bit);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

// Example Usage:
// Convert two numbers into 64-bit binary linked lists
const listA = LinkedList.fromDouble(3.14);
const listB = LinkedList.fromDouble(2.71);

// Add the two linked lists
const result = LinkedList.add(listA, listB);

// Display the results
console.log("List A (Binary):", listA.toBinaryString());
console.log("List B (Binary):", listB.toBinaryString());
console.log("Result (Binary):", result.toBinaryString());

// Convert the result back to a double
const resultDouble = result.toDouble();
console.log("Result (Double):", resultDouble);

