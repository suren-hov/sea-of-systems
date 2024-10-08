#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* concat(char* string1, char* string2)
{
    int length1 = strlen(string1);
    int length2 = strlen(string2);
    int concatedLength = length1 + length2 + 1;

    char* concatedString = (char*) malloc(sizeof(char) * concatedLength);
    concatedString[concatedLength] = '\0';

    int secondStartPoint = 0;
    for (size_t i = 0; i < concatedLength; i++)
    {
        if (i < length1) {
            concatedString[i] = string1[i];
        } else if (i == length1) {
            concatedString[i] = ' ';
        } else {
            concatedString[i] = string2[secondStartPoint++];
        }
    }

    return concatedString;
}

void testConcat(char* string1, char* string2)
{
    char* concatedString = concat(string1, string2);
    printf("%s\n", concatedString);
}

int includes(char* string1, char* string2)
{
    int indexString2 = 0;
    int flag = 0;
    int count = strlen(string2);

    for (size_t i = 0; i < strlen(string1); i++)
    {
        if (flag && string1[i] != string2[indexString2]) {
            if (strlen(string1) - i >= strlen(string2)) {
                flag = 0;
                count = strlen(string2);
                indexString2 = 0;
            } else {
                return 0;
            }
        }

        if (string1[i] == string2[indexString2]){
            count--;
            indexString2++;
            flag = 1;
        }

    }
    return count == 0 ? 1 : 0; 
}

void testIncludes(char* string1, char* string2)
{
    int result = includes(string1, string2);
    result ? printf("true\n") : printf("false\n");
}

int endsWith(char* string1, char* string2)
{
    int length1 = strlen(string1);
    int length2 = strlen(string2);
    int startPoint1 = length1 - length2;
    int startPoint2 = 0;

    for (size_t i = startPoint1; i < length1; i++)
    {
        if (string1[i] != string2[startPoint2++]) {
            return 0;
        }
    }
    return 1;
}

void testEndsWith(char* string1, char* string2)
{
    int result = endsWith(string1, string2);
    result ? printf("true\n") : printf("false\n");
}

int startsWith(char* string1, char* string2)
{
    int length2 = strlen(string2);

    for (size_t i = 0; i < length2; i++)
    {
        if (string1[i] != string2[i]) {
            return 0;
        }
    }
    return 1;
}

void testStartsWith(char* string1, char* string2)
{
    int result = startsWith(string1, string2);
    result ? printf("true\n") : printf("false\n");
}

int indexOf(char* string1, char* character)
{
    for (size_t i = 0; i < strlen(string1); i++)
    {
        if(string1[i] == *character) {
            return i;
        }
    }
    return -1;
}

void testIndexOf(char* string1, char* character)
{
    int result = indexOf(string1, character);
    result != -1 ? printf("%d\n", result) : printf("false\n");
}

int lastIndexOf(char* string1, char* character)
{
    int index = -1;
    for (size_t i = 0; i < strlen(string1); i++)
    {
        if(string1[i] == *character) {
            index = i;
        }
    }
    return index;
}

void testLastIndexOf(char* string1, char* character)
{
    int result = lastIndexOf(string1, character);
    result != -1 ? printf("%d\n", result) : printf("false\n");
}

int findIndex(char* string1, char* string2)
{
    int indexString2 = 0;
    int flag = 0;
    int index = 0;
    int count = strlen(string2);

    for (size_t i = 0; i < strlen(string1); i++)
    {
        if (flag && string1[i] != string2[indexString2]) {
            if (!count) { return index; };
            if (strlen(string1) - i >= strlen(string2)) {
                flag = 0;
                count = strlen(string2);
                indexString2 = 0;
            } else {
                return 0;
            }
        }

        if (string1[i] == string2[indexString2]){
            if (!flag) { index = i; }
            count--;
            indexString2++;
            flag = 1;
        }

    }
    return count == 0 ? index : -1; 
}

char* replace(char* string1, char* string2, char* string3)
{
    int index = findIndex(string1, string2);
    int startPointIndex3 = 0;
    for (size_t i = index; i < index + strlen(string3); i++)
    {
        string1[i] = string3[startPointIndex3++];
    }
    return string1;
}

void testReplace(char* string1, char* string2, char* string3)
{
    char* result = replace(string1, string2, string3);
    printf("%s\n", result);
}

char* replaceAll(char* string1, char* string2, char* string3)
{
    int index = findIndex(string1, string2);
    int startPointIndex3 = 0;
    for (size_t i = index; i < index + strlen(string3); i++)
    {
        string1[i] = string3[startPointIndex3++];
    }
    return string1;
}

void testReplaceAll(char* string1, char* string2, char* string3)
{
    char* result = replaceAll(string1, string2, string3);
    printf("%s\n", result);
}

void testSearch(char* string1, char* string2)
{
    int index = findIndex(string1, string2);
    index != -1 ? printf("%d\n", index) : printf("Not Found\n");
}

int main()
{
    char string1[] = "Hello world";
    char string2[] = "world";
    char string3[] = "there";
    char string4[] = "ll";
    char string5[] = "II";
    char character = 'l';

    // testConcat(string1, string2); // Hello world world
    // testIncludes(string1, string2); // true
    // testEndsWith(string1, string2); // true
    // testStartsWith(string1, string2); // false
    // testIndexOf(string1, &character); // 2
    // testLastIndexOf(string1, &character); // 9
    // testReplace(string1, string2, string3); // Hello there
    // testReplaceAll(string1, string4, string5); // Hello there
    // testSearch(string1, string2); // 6
}