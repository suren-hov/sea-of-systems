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

void copy(int* source, int* self, int sourceLength) {
    for (int i = 0; i < sourceLength; i++) {
        self[i] = source[i];
    }
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

int* splice(int* data, int length, int start, int deleteCount, int* items, int itemsLength, int* resultArrayLength) {
    int* resultArray = (int*) malloc(length * sizeof(int));
    int resultIndex = 0;
    int stop = length;

    // Handle negative start index
    if (start < 0) {
        start += length;
    }

    // Adjust stop index based on deleteCount
    if (deleteCount > 0) {
        stop = start + deleteCount;
        if (deleteCount < 0)
            stop = 0;
    }

    // Collect elements to be spliced
    for (int i = start; i < stop; i++) {
        resultArray[resultIndex++] = data[i];
    }

    // If no items to add but deleteCount is specified
    if (deleteCount > 0 && itemsLength <= 0) {
        int* deleteArr = (int*) malloc(length * sizeof(int));
        int deleteArrLength = 0;

        // Collect elements before start and after stop
        for (int i = 0; i < length; i++) {
            if (i == start) {
                i = stop - 1;
            } else {
                deleteArr[deleteArrLength++] = data[i];
            }
        }
        // Copy elements back to the data array
        copy(deleteArr, data, deleteArrLength);
        length = deleteArrLength;
        free(deleteArr);
    }

    // If there are items to insert
    if (itemsLength > 0) {
        int* gatherArr = (int*) malloc((length + itemsLength) * sizeof(int));
        int gatherArrLength = 0;

        // Collect elements before start, then items, then elements after stop
        for (int i = 0; i < length; i++) {
            if (i == start) {
                for (int j = 0; j < itemsLength; j++) {
                    gatherArr[gatherArrLength++] = items[j];
                }
                i = stop - 1;
            } else {
                gatherArr[gatherArrLength++] = data[i];
            }
        }
        // Copy gathered elements back to the data array
        copy(gatherArr, data, gatherArrLength);
        length = gatherArrLength;
        free(gatherArr);
    }

    *resultArrayLength = resultIndex;
    return resultArray;
}


void testSplice(int* arr, int length)
{
    int start = 2;
    int deleteCount = 2;
    int items[] = {9, 10};
    int itemsLength = 2;
    int resultArrayLength = 0;
    
    printArray(arr, length);
    int* tmp = splice(arr, length, start, deleteCount, items, itemsLength, &resultArrayLength);
    printArray(arr, length);
    printArray(tmp, resultArrayLength);
}

int indexOf(int* arr, int length, int elem)
{
    for (size_t i = 0; i < length; i++)
    {
        if (arr[i] == elem) return i; 
    }
    return -1;
}

void testIndexOf(int* arr, int length, int elem)
{
    printArray(arr, length);
    int index = indexOf(arr, length, elem);
    printf("%d\n", index);
}

int includes(int* arr, int length, int elem)
{
    for (size_t i = 0; i < length; i++)
    {
        if (arr[i] == elem) return 1; 
    }
    return 0;
}

void testIncludes(int* arr, int length, int elem)
{
    printArray(arr, length);
    int index = indexOf(arr, length, elem);
    printf("%s\n", index != -1 ? "true" : "false");
}


int* reverse(int* arr, int length)
{
    int* tmp = (int*) malloc(sizeof(int) * length);
    int end = length - 1;
    for (size_t i = 0; i < length; i++)
    {
        tmp[i] = arr[end--];
    }
    return tmp;
}

void testReverse(int* arr, int length)
{
    printArray(arr, length);
    int* tmp = reverse(arr, length);
    printArray(tmp, length);
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
    // testSplice(arr, length); // 1 2 9 10 5
    // testIndexOf(arr, length, 2); // 1
    // testIncludes(arr, length, -2); // false
    // testReverse(arr, length); // [5 4 3 2 1]
}