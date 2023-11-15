const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const shuffle = (array, numSwaps) => {
  for (let i = 0; i < numSwaps; i++) {
      const randomIndex1 = Math.floor(Math.random() * array.length);
      const randomIndex2 = Math.floor(Math.random() * array.length);
      swap(array, randomIndex1, randomIndex2);
  }
};

const bubbleSort = (array) => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (array[j] > array[j + 1]) {
              swap(array, j, j + 1);
          }
      }
  }
};

const selectionSort = (array) => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
          if (array[j] < array[minIndex]) {
              minIndex = j;
          }
      }
      swap(array, i, minIndex);
  }
};

const quickSort = (array, low = 0, high = array.length - 1) => {
  if (low < high) {
      const pi = partition(array, low, high);
      quickSort(array, low, pi - 1);
      quickSort(array, pi + 1, high);
  }
};

const partition = (array, low, high) => {
  const pivot = array[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
          i++;
          swap(array, i, j);
      }
  }
  swap(array, i + 1, high);
  return i + 1;
};
