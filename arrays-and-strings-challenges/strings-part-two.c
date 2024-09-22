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

char* substring(char* string, int start, int end)
{
    char buffer[50];
    int bufferIndex = 0;

    for (size_t i = start; i <= end; i++) {
        buffer[bufferIndex++] = string[i];
    }

    buffer[bufferIndex] = '\0';
    char* result = (char*) malloc(sizeof(char*));
    strcpy(result, buffer);

    return result;   
}

void testSubstring(char* string1, int start, int end)
{
    char* result = substring(string1, start, end);
    printf("%s\n", result);
}

int main()
{
    char string1[] = "Hello world";
    char string2[] = "world";

    // testSlice(string1, 0, 5); // Hello
    // testSplit(string1); // ["Hello", "world"]
    // testSubstring(string1, 0, 5); // Hello

}