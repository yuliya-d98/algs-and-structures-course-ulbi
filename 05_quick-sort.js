const array = [
  0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
  3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7,
  -1, -5, 23,
];
let counter = 0;

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i += 1) {
    counter += 1;
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
};

// O(log2n * n)

console.log(quickSort(array), counter);
