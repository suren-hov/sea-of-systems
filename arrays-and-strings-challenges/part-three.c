#include <stdlib.h>
#include <stdio.h>

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

int naturalNumber(int number)
{
    return number > 0;
}

int some(int* arr, int length, int (*function)(int))
{
    for (size_t i = 0; i < length; i++)
    {
        if (function(arr[i])) {
            return 1;
        }
    }
    return 0;
}

void testSome(int* arr, int length)
{
    printArray(arr, length);
    int result = some(arr, length, naturalNumber);
    if (result) {
        printf("true\n");
    } else {
        printf("false\n");
    }
}

int every(int* arr, int length, int (*function)(int))
{
    for (size_t i = 0; i < length; i++)
    {
        if (!function(arr[i])) {
            return 0;
        }
    }
    return 1;
}

void testEvery(int* arr, int length)
{
    printArray(arr, length);
    int result = every(arr, length, naturalNumber);
    if (result) {
        printf("true\n");
    } else {
        printf("false\n");
    }
}

int* fill(int* arr, int length, int number)
{
    int* tmp = (int*) malloc(sizeof(int) * length);
    for (size_t i = 0; i < length; i++)
    {
        tmp[i] = 0;
    }
    return tmp;
}

void testFill(int* arr, int length, int number)
{
    printArray(arr, length);
    int* tmp = fill(arr, length, number);
    printArray(tmp, length);
}

int main()
{
    int arr[] = {1, 4, 3, 2, 5};
    int length = 5;

    // testSome(arr, length); // true
    // testEvery(arr, length); // true
    // testFill(arr, length, 0); // [0 0 0 0 0]
}