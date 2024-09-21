#include <stdio.h>
#include <stdlib.h>
#include <string.h>

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

int main()
{
    char string1[] = "Hello world";
    char string2[] = "world";

    // testSlice(string1, 0, 5); // Hello
    
}