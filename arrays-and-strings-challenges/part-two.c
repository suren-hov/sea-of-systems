#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void printArray(int* arr, int length)
{
    for (int i = 0; i < length; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

void copy(int* source, int* self, int sourceLength) {
    for (int i = 0; i < sourceLength; i++) {
        self[i] = source[i];
    }
}

char* join(int* arr, int length, char* separator)
{
    int estimatedLength = length * 2;
    char* result = (char*) malloc(estimatedLength);

    char buffer[10];
    result[0] = '\0';
    
    for (size_t i = 0; i < length; i++)
    {
        sprintf(buffer, "%d", arr[i]);
        strcat(result, buffer);
        if (i < length - 1) {
            strncat(result, separator, 1);
        }
    }
    return result;
}

void testJoin(int* arr, int length)
{
    printArray(arr, length);
    char separator = '-';
    char* string = join(arr, length, &separator);
    
    if (string != NULL) {
        printf("%s\n", string);
        free(string);
    } else {
        printf("Join failed!\n");
    }
}

int main()
{
    int arr[] = {1, 2, 3, 4, 5};
    int length = 5;

    // testJoin(arr, length); // 1-2-3-4-5
}