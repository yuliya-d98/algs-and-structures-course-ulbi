const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count;

// o(log2n)

// using loop
const binarySearch = (array, item) => {
  count = 0;

  let start = 0;
  let end = array.length;
  let middle;

  let isFound = false;
  let position = -1;

  while (isFound === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);

    if (array[middle] === item) {
      isFound = true;
      position = middle;
    } else if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
};

// console.log(binarySearch(array, 8), count);
// console.log(binarySearch(array, 7), count);
// console.log(binarySearch(array, 15), count);
// console.log(binarySearch(array, 17), count);

// using recursion

count = 0;
const recursiveBinarySearch = (array, item, start, end) => {
  count += 1;
  if (item > array[end]) return -1;
  let middle = Math.floor((start + end) / 2);
  if (item === array[middle]) {
    return middle;
  } else if (item < array[middle]) {
    return recursiveBinarySearch(array, item, start, middle - 1);
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
};

// console.log(recursiveBinarySearch(array, 12, 0, array.length), count);
