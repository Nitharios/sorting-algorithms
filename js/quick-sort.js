console.log('Sanity Check: Quick Sort');

var unsorted = [5, 6, 1, 8, 2, 4, 9, 3];

function quickSortStarter(array) { 

  lowNumber = array[0];
  highNumber = array[array.length-1];

  function quickSort(array, lowNumber, highNumber) {
    // base case
    if (array.length <= 1) {
      return array;
    }

    if (lowNumber < highNumber) {
      var pivotIndex = partition(array, lowNumber, highNumber);
      quickSort(array, lowNumber, pivotIndex);
      quickSort(array, pivotIndex+1, highNumber);
    }
  }

  function partition(array, lowNumber, highNumber) {
    var pivot = array.indexOf(lowNumber);
    var i = array.indexOf(lowNumber)-1;
    var j = array.indexOf(highNumber)-1;

    do {
      i = i + 1;
    } while (array[i] < array.indexOf(lowNumber));

    do {
      j = j - 1;
    } while (array[j] > array.indexOf(lowNumber));

    if (i >= j) {
      return j;
    }

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // base case
  // return value?
  return array;
}

var result = quickSortStarter(unsorted);
console.log(result);