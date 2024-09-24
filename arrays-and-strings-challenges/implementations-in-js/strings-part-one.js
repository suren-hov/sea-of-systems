function charAt(string, character) {
    for (let index = 0; index < string.length; index++) {
        if (string[index] == character) { return index }
    }
    return -1;
}

String.prototype.customCharCodeAt = function(index) {
    // Check if the index is valid (within bounds of the string)
    if (index < 0 || index >= this.length) {
        return NaN;
    }

    // Encode the string to a UTF-8 byte array
    let utf8Bytes = new TextEncoder().encode(this);

    // Iterate through the UTF-8 byte array to handle multi-byte characters
    let byteIndex = 0;
    let charCount = 0;
    
    // Traverse through the byte array to reach the correct character at index
    while (charCount < index) {
        let byte = utf8Bytes[byteIndex];
        
        // Determine how many bytes the current character uses
        if (byte < 128) {
            // 1-byte character (ASCII)
            byteIndex += 1;
        } else if (byte >= 192 && byte < 224) {
            // 2-byte character
            byteIndex += 2;
        } else if (byte >= 224 && byte < 240) {
            // 3-byte character
            byteIndex += 3;
        } else if (byte >= 240 && byte < 248) {
            // 4-byte character
            byteIndex += 4;
        }
        charCount++;
    }

    // After determining the correct byteIndex, return the code point for that character
    let firstByte = utf8Bytes[byteIndex];

    // Now handle the specific byte size for UTF-8
    if (firstByte < 128) {
        // 1-byte character (ASCII)
        return firstByte;
    } else if (firstByte >= 192 && firstByte < 224) {
        // 2-byte character
        let secondByte = utf8Bytes[byteIndex + 1];
        return ((firstByte & 0x1F) << 6) | (secondByte & 0x3F);
    } else if (firstByte >= 224 && firstByte < 240) {
        // 3-byte character
        let secondByte = utf8Bytes[byteIndex + 1];
        let thirdByte = utf8Bytes[byteIndex + 2];
        return ((firstByte & 0x0F) << 12) | ((secondByte & 0x3F) << 6) | (thirdByte & 0x3F);
    } else if (firstByte >= 240 && firstByte < 248) {
        // 4-byte character
        let secondByte = utf8Bytes[byteIndex + 1];
        let thirdByte = utf8Bytes[byteIndex + 2];
        let fourthByte = utf8Bytes[byteIndex + 3];
        return ((firstByte & 0x07) << 18) | ((secondByte & 0x3F) << 12) | ((thirdByte & 0x3F) << 6) | (fourthByte & 0x3F);
    }

    return NaN; // In case of unexpected input
};

function concat(string1, string2) {
    return string1 + string2;
}

function main() 
{
    // console.log(charAt("hello", "e")); // 1
    // console.log("hello".customCharCodeAt(1)); // 101
    // console.log(concat("hello", "world")); // helloworld
    
}

main()