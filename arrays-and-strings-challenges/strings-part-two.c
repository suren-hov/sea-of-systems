#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void printArray(char** arr, int length)
{
    for (int i = 0; i < length; i++)
    {
        printf("%d ", *arr[i]);
    }
    printf("\n");
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
    char** result = (char**) malloc(sizeof(char*));
    int indexOfResult = 0;
    int lastWordIndex = 0;
    for (size_t i = 0; i < strlen(string); i++)
    {
        if (string[i] == ' ') {
            result[indexOfResult] = (char*) malloc(sizeof(char*));
            
        }
    }
    return result;
}

void testSplit(char* string1)
{
    int* length = 0;
    char** result = split(string1, length);
    printArray(result, *length);
}

int main()
{
    char string1[] = "Hello world";
    char string2[] = "world";

    // testSlice(string1, 0, 5); // Hello
    testSplit(string1); // ["Hello", "world"]

}