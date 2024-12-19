class BitSet {
    constructor(size) {
        this.size = size;
        this.bits = new Uint8Array(Math.ceil(size / 8)); // Allocate enough bytes to hold the bits
    }

    setBit(pos, val) {
        if (pos < 0 || pos >= this.size) {
            throw new RangeError("Position out of range");
        }

        const byteIndex = Math.floor(pos / 8); // Determine which byte the bit belongs to
        const bitIndex = pos % 8;             // Determine the bit's position within the byte

        if (val) {
            this.bits[byteIndex] |= (1 << bitIndex); // Set the bit to 1
        } else {
            this.bits[byteIndex] &= ~(1 << bitIndex); // Set the bit to 0
        }
    }

    getBit(pos) {
        if (pos < 0 || pos >= this.size) {
            throw new RangeError("Position out of range");
        }

        const byteIndex = Math.floor(pos / 8); // Determine which byte the bit belongs to
        const bitIndex = pos % 8;             // Determine the bit's position within the byte

        return (this.bits[byteIndex] & (1 << bitIndex)) !== 0; // Return true if the bit is 1, false otherwise
    }
}

// Example Usage:
const bitSet = new BitSet(16); // Create a BitSet with 16 bits
bitSet.setBit(3, 1);          // Set the 3rd bit to 1
console.log(bitSet.getBit(3)); // Output: true
bitSet.setBit(3, 0);          // Set the 3rd bit to 0
console.log(bitSet.getBit(3)); // Output: false
