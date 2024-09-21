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

int main()
{
    char string1[] = "Hello";
    char string2[] = "world!";

    testConcat(string1, string2);
}