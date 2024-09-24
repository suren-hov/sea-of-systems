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

function includes(string, word) {
    flag = 0;
    count = word.length;
    wordStartPoint = 0;
    for (let index = 0; index < string.length; index++) {

        if (string[index] != word[wordStartPoint] && flag) {
            if (string.length - index >= word.length) {
                flag = 0;
                wordStartPoint = 0;
                count = word.length;
            } else {
                return false;
            }
        }

        if (string[index] == word[wordStartPoint]) {
            count--;
            wordStartPoint++;
        }
    }
    return count == 0 ? true : false;
}

function endsWith(string, word) {
    flag = 0;
    count = word.length;
    wordStartPoint = 0;
    for (let index = string.length - count; index < string.length; index++) {

        if (string[index] != word[wordStartPoint] && flag) {
            if (string.length - index >= word.length) {
                flag = 0;
                wordStartPoint = 0;
                count = word.length;
            } else {
                return false;
            }
        }

        if (string[index] == word[wordStartPoint]) {
            count--;
            wordStartPoint++;
        }
    }
    return count == 0 ? true : false;
}

function startsWith(string, word) {
    flag = 0;
    count = word.length;
    wordStartPoint = 0;
    for (let index = 0; index < string.length - count; index++) {

        if (string[index] != word[wordStartPoint] && flag) {
            if (string.length - index >= word.length) {
                flag = 0;
                wordStartPoint = 0;
                count = word.length;
            } else {
                return false;
            }
        }

        if (string[index] == word[wordStartPoint]) {
            count--;
            wordStartPoint++;
        }
    }
    return count == 0 ? true : false;
}

function indexOf(string, character) {
    for (let index = 0; index < string.length; index++) {
        if (string[index] == character) {
            return index;
        }
    }
    return -1;
}

function lastIndexOf(string, character) {
    lastIndex = -1;
    for (let index = 0; index < string.length; index++) {
        if (string[index] == character) {
            lastIndex = index;
        }
    }
    return lastIndex;
}

String.prototype.customMatch = function(regex) {
    // Check if the provided regex is a valid regular expression
    if (!(regex instanceof RegExp)) {
        throw new TypeError("Argument must be a RegExp");
    }

    // This array will store the matched results
    let matches = [];
    let match;

    // Use the regex.exec() method in a loop to find all matches
    while ((match = regex.exec(this))) {
        matches.push(match[0]); // Push the matched string into the matches array
        // Move the index to the end of the last match to find subsequent matches
        regex.lastIndex = match.index + match[0].length;
        if (regex.lastIndex >= this.length) break; // Break if no more matches can be found
    }

    // Return the matches found or null if none were found
    return matches.length > 0 ? matches : null;
};

function main() 
{
    // console.log(charAt("hello", "e")); // 1
    // console.log("hello".customCharCodeAt(1)); // 101
    // console.log(concat("hello", "world")); // helloworld
    // console.log(includes("hello world", "world")); // true
    // console.log(endsWith("hello world", "world")); // true
    // console.log(startsWith("hello world", "world")); // false
    // console.log(indexOf("hello world", "l")); // 2
    // console.log(lastIndexOf("hello world", "l")); // 9
    // console.log("hello123 world456".customMatch(/\d+/g)); // ['123', '456']
}

main()