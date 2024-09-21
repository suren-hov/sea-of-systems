#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>

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

int* sort(int* arr, int length) 
{
    int* tmp = (int*) malloc(sizeof(int) * length);
    copy(arr, tmp, length);

    for (size_t i = 0; i < length - 1; i++)
    {
        for (size_t j = i + 1; j < length; j++)
        {
            if (tmp[i] > tmp[j]) {
                int temprorary =tmp[i]; 
                tmp[i] = tmp[j];
                tmp[j] = temprorary;
            }
        }
    }
    return tmp;
}

void testSort(int* arr, int length) {
    printArray(arr, length);
    int* tmp = sort(arr, length);
    printArray(tmp, length);
}

void printNumber(int number)
{
    printf("%d ", number);
}

void forEach(int* arr, int length, void (*function)(int))
{
    int* tmp = (int*) malloc(sizeof(int) * length);
    for (size_t i = 0; i < length; i++)
    {
        function(arr[i]);
    }
    printf("\n");
}

int multpleNumber(int number)
{
    return number * 2;
}

int* map(int* arr, int length, int (*function)(int))
{
    int* tmp = (int*) malloc(sizeof(int) * length);
    for (size_t i = 0; i < length; i++)
    {
        tmp[i] = function(arr[i]);
    }
    return tmp;
}

void testMap(int* arr, int length) {
    printArray(arr, length);
    int* tmp = map(arr, length, multpleNumber);
    printArray(tmp, length);
}

int filterOddNumbers(int number) {
    return number % 2 != 0;
}

int* filter(int* arr, int length, int (*function)(int), int* resultLength)
{
    int* tmp = (int*) malloc(sizeof(int) * length);
    int index = 0;
    for (size_t i = 0; i < length; i++)
    {
        if (function(arr[i])) { tmp[index++] = arr[i]; };
    }
    tmp = realloc(tmp, sizeof(int) * index);
    *resultLength = index;
    return tmp;
}

void testFilter(int* arr, int length) {
    printArray(arr, length);
    int resultLength = 0;
    int* tmp = filter(arr, length, filterOddNumbers, &resultLength);
    printArray(tmp, resultLength);
}

int sumWithAcc(int acc, int number)
{
    return acc += number;
}

int reduce(int* arr, int length, int acc)
{
    for (size_t i = 0; i < length; i++)
    {
        acc = sumWithAcc(acc, arr[i]);
    }
    return acc;
}

void testReduce(int* arr, int length, int acc) {
    printArray(arr, length);
    int tmp = reduce(arr, length, acc);
    printf("%d\n", tmp);
}

int find(int* arr, int length, int elem)
{
    for (size_t i = 0; i < length; i++)
    {
        if (arr[i] == elem) { return elem; }
    }
    return INT_MAX;
}

void testFind(int* arr, int length, int elem)
{
    printArray(arr, length);
    int result = find(arr, length, elem);
    if (result != INT_MAX) {
        printf("%d\n", elem);
    } else {
        printf("Element do not found!\n");
    }
}

int findIndex(int* arr, int length, int elem)
{
    for (size_t i = 0; i < length; i++)
    {
        if (arr[i] == elem) { return i; }
    }
    return -1;
}

void testFindIndex(int* arr, int length, int elem)
{
    printArray(arr, length);
    int index = findIndex(arr, length, elem);
    if (index != -1) {
        printf("%d\n", index);
    } else {
        printf("Element do not found!\n");
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

    // testJoin(arr, length); // 1-4-3-2-5
    // testSort(arr, length); // [1 2 3 4 5]
    // forEach(arr, length, printNumber); // [1 2 3 4 5]
    // testMap(arr, length); // [2 8 6 4 10]
    // testFilter(arr, length); // [1 3 5]
    // testReduce(arr, length, 0); // 15
    // testFind(arr, length, 4); // 4
    // testFindIndex(arr, length, 4); // 1
    // testSome(arr, length); // true
    // testEvery(arr, length); // true
    // testFill(arr, length, 0); // [0 0 0 0 0]
}