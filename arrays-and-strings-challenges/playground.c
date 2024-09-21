#include <stdio.h>
#include <stdlib.h>

void printArray(int* arr, int length)
{
    for (int i = 0; i < length; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int* push(int* arr, int length, int elem)
{
    int* tmp = (int*) malloc((length + 1)  * sizeof(int));
    for (int i = 0; i < length; i++)
    {
        tmp[i] = arr[i];
    }
    tmp[length] = elem;
    return tmp;
}

void testPush(int* arr, int length, int elem)
{
    printArray(arr, length);
    int* tmp = push(arr, length, elem);
    printArray(tmp, length + 1);
}

int* pop(int* arr, int length)
{
    int* tmp = (int*) malloc((length - 1) * sizeof(int));
    for (size_t i = 0; i < length - 1; i++)
    {
        tmp[i] = arr[i];
    }
    return tmp;
}

void testPop(int* arr, int length)
{
    printArray(arr, length);
    int* tmp = pop(arr, length);
    printArray(tmp, length - 1);
}

int* shift(int* arr, int length)
{
    int* tmp = (int*) malloc((length - 1) * sizeof(int));
    for (size_t i = 0; i < length - 1; i++)
    {
        tmp[i] = arr[i + 1];
    }
    return tmp;
}

void testShift(int* arr, int length)
{
    printArray(arr, length);
    int* tmp = shift(arr, length);
    printArray(tmp, length - 1);
}

int* unshift(int* arr, int length, int elem)
{
    int* tmp = (int*) malloc((length + 1) * sizeof(int));
    tmp[0] = elem;
    for (size_t i = 0; i < length; i++)
    {
        tmp[i + 1] = arr[i];
    }
    return tmp;
}

void testUnshift(int* arr, int length, int elem)
{
    printArray(arr, length);
    int* tmp = unshift(arr, length, elem);
    printArray(tmp, length + 1);
}

int* concat(int* arr1, int* arr2, int lengthArr1, int lengthArr2)
{
    int* tmp = (int*) malloc(sizeof(int) * (lengthArr1 + lengthArr2));
    for (size_t i = 0; i < lengthArr1; i++)
    {
        tmp[i] = arr1[i];
    }
    for (size_t i = 0; i < lengthArr2; i++)
    {
        tmp[lengthArr1 + i] = arr2[i];
    }
    return tmp;
}

void testConcat(int* arr1, int* arr2, int lengthArr1, int lengthArr2)
{
    printArray(arr1, lengthArr1);
    printArray(arr2, lengthArr2);
    int* tmp = concat(arr1, arr2, lengthArr1, lengthArr2);
    printArray(tmp, lengthArr1 + lengthArr2);
}

int* slice(int* arr, int length, int startPoint, int endPoint)
{
    int* tmp = (int*) malloc(sizeof(int) * (endPoint - startPoint));
    for (size_t i = 0; i < endPoint; i++)
    {
        tmp[i] = arr[startPoint + i];
    }
    return tmp;
}

void testSlice(int* arr, int length, int startPoint, int endPoint)
{
    printArray(arr, length);
    int* tmp = slice(arr, length, startPoint, endPoint);
    printArray(tmp, endPoint - startPoint);
}

int main()
{
    int arr[] = {1, 2, 3, 4, 5};
    int arr2[] = {6, 7, 8, 9, 10};
    int length = 5;

    // testPush(arr, length, 6); // [1 2 3 4 5 6]
    // testPop(arr, length); // [1 2 3 4]
    // testShift(arr, length); // [2 3 4 5]
    // testUnshift(arr, length, 8); // [8 1 2 3 4 5]
    // testConcat(arr, arr2, length, length); // [1 2 3 4 5 6 7 8 9 10]
    // testSlice(arr, length, 1, 3); // [2 3]
}