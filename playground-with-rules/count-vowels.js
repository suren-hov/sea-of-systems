function testCountVowels()
{
    if (countVowels("hello") === 2) {
        console.log("Test countVowels('hello') success");
    } else {
        console.log("Test countVowels('hello') fail");
    }

    if (countVowels("Academy") === 3) {
        console.log("Test countVowels('Academy') success");
    } else {
        console.log("Test countVowels('Academy') fail");
    }

    if (countVowels(5) === 0) {
        console.log("Test countVowels('Academy') success");
    } else {
        console.log("Test countVowels('Academy') fail");
    }
}

function countVowels(string)
{
    if (typeof string != 'string') {
        return 0;
    }

    let Vowels = "aAeEiIoOuU";
    let vowelsCount = string.split('').filter(char => Vowels.indexOf(char) !== -1).length;

    return vowelsCount;
}

testCountVowels();