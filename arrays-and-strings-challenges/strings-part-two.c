#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void printStringsArray(char** array, int length) {
    printf("[");
    for (int i = 0; i < length; i++) {
        if (i == length - 1) {
            printf("\"%s\"", array[i]);
        } else {
            printf("\"%s\", ", array[i]);
        }
    }
    printf("]\n");
}

char* slice(char* string1, int start, int end)
{
    int zeroPoint = 0;
    char* result = (char*) malloc(sizeof(char) * (end - start));
    for (size_t i = start; i < end; i++)
    {
        result[zeroPoint++] = string1[i];
    }
    return result;
}

void testSlice(char* string1, int start, int end)
{
    char* result = slice(string1, start, end);
    printf("%s\n", result);
}

char** split(char* string, int* length)
{
    char** result = (char**) malloc(sizeof(char*) * 10);
    int indexOfResult = 0;
    char buffer[50];
    int bufferIndex = 0;

    for (size_t i = 0; i <= strlen(string); i++) {
        if (string[i] != ' ' && string[i] != '\0') {
            buffer[bufferIndex++] = string[i];
        } else {
            buffer[bufferIndex] = '\0';
            result[indexOfResult] = (char*) malloc(strlen(buffer) + 1);
            strcpy(result[indexOfResult], buffer);

            indexOfResult++; 
            bufferIndex = 0;
        }
    }

    *length = indexOfResult;
    return result;   
}

void testSplit(char* string1)
{
    int length = 0;
    char** result = split(string1, &length);
    printStringsArray(result, length);
}

char* substr(char* string, int start, int end)
{
    char buffer[50];
    int bufferIndex = 0;

    for (size_t i = start; i < end; i++) {
        buffer[bufferIndex++] = string[i];
    }

    buffer[bufferIndex] = '\0';
    char* result = (char*) malloc(sizeof(char*));
    strcpy(result, buffer);

    return result;   
}

void testSubstr(char* string1, int start, int end)
{
    char* result = substr(string1, start, end);
    printf("%s\n", result);
}

char* substring(char* string, int start, int length)
{
    char buffer[50];
    int bufferIndex = 0;

    for (size_t i = start; i < start + length; i++) {
        buffer[bufferIndex++] = string[i];
    }

    buffer[bufferIndex] = '\0';
    char* result = (char*) malloc(sizeof(char*));
    strcpy(result, buffer);

    return result;   
}

void testSubstring(char* string1, int start, int length)
{
    char* result = substring(string1, start, length);
    printf("%s\n", result);
}

char* toLowerCase(char* string)
{
    for (size_t i = 0; i < strlen(string); i++)
    {
        if (string[i] > 64 && string[i] < 91) {
            string[i] = string[i] + 32;
        }
    }

    return string;
}

void testToLowerCase(char* string)
{
    char* result = toLowerCase(string);
    printf("%s\n", result);
}

char* toUpperCase(char* string)
{
    for (size_t i = 0; i < strlen(string); i++)
    {
        if (string[i] > 96 && string[i] < 123) {
            string[i] = string[i] - 32;
        }
    }

    return string;
}

void testToUpperCase(char* string)
{
    char* result = toUpperCase(string);
    printf("%s\n", result);
}

char* trim(char* string)
{
    char* trimmedString = (char*) malloc(sizeof(char) * strlen(string));
    int index = 0;
    int flag = 0;
    for (size_t i = 0; i < strlen(string); i++)
    {
        if (string[i] == ' ' && (string[i + 1] == '\0' || string[i + 1] == ' ')) { flag = 0; }

        if ((string[i] == ' ' || string[i] == '\0' ) && !flag) {
            continue;
        } else {
            flag = 1;
            trimmedString[index++] = string[i];
        }
    }
    return trimmedString;
}

void testTrim(char* string)
{
    char* result = trim(string);
    printf("%s\n", result);
}

char* trimStart(char* string)
{
    char* trimmedString = (char*) malloc(sizeof(char) * strlen(string));
    int index = 0;
    int flag = 0;
    for (size_t i = 0; i < strlen(string); i++)
    {
        if ((string[i] == ' ' || string[i] == '\0' ) && !flag) {
            continue;
        } else {
            flag = 1;
            trimmedString[index++] = string[i];
        }
    }
    return trimmedString;
}

void testTrimStart(char* string)
{
    char* result = trimStart(string);
    printf("%s", result);
}

char* trimEnd(char* string)
{
    char* trimmedString = (char*) malloc(sizeof(char) * strlen(string));
    int index = 0;
    int flag = 1;
    for (size_t i = 0; i < strlen(string); i++)
    {
        if (string[i] == ' ' && (string[i + 1] == '\0' || string[i + 1] == ' ')) { flag = 0; }

        if ((string[i] == ' ' || string[i] == '\0' ) && !flag) {
            continue;
        } else {
            flag = 1;
            trimmedString[index++] = string[i];
        }
    }
    return trimmedString;
}

void testTrimEnd(char* string)
{
    char* result = trimEnd(string);
    printf("%s\n", result);
}

int main()
{
    char string1[] = "Hello world";
    char string2[] = "world";
    char string3[] = " Hello world ";

    // testSlice(string1, 0, 5); // Hello
    // testSplit(string1); // ["Hello", "world"]
    // testSubstr(string1, 1, 6); // ello
    // testSubstring(string1, 1, 6); // ello w
    // testToLowerCase(string1); // hello world
    // testToUpperCase(string1); // HELLO WORLD
    // testTrim(string3); // "Hello world"
    // testTrimStart(string3); // "Hello world "
    // testTrimEnd(string3); // " Hello world"

}