console.log('Sanity Check: Sorting Algorithms');

var unsorted = [3, 6, 1, 8, 2, 4, 9, 5, 7];

var sortingAlgorithms = (function() {
  // debugger;
  return {
    quickSort : quickSort,
    selectionSort : selectionSort
  };

  function quickSort(array, left, right) {
    // debugger;
    var i = left;
    var j = right;
    // Floor is not necessary...maybe for edge cases...
    var pivot = array[Math.floor((left+right)/2)]; 

    while (i <= j) {
      while (array[i] < pivot) i++;
      while (array[j] > pivot) j--;
      //if the left index is greater than the right index, a smaller number than pivot is on the right of pivot and needs to be swapped with the element at index j
      if (i <= j) { 
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        // increment or decrement to continue search or meet conditional
        i++;
        j--;
      }
    }

    if (left < j) quickSort(array, left, j);
    if (i < right) quickSort(array, i, right);
    // will return if if conditions not met
    return array;
  }

  function selectionSort(array) {
    //debugger;
    for (var j = 0; j < array.length-1; j++) {
      // holds smaller number
      var smallerNumber = array[j];
      // holds index of smaller number
      var smallerNumberIndex = null;

      for (var i = j; i < array.length; i++) {
        // looks for smaller number in array
        // if the smallerNumber is greater than the number at index i, swap the elements
        if (smallerNumber > array[i]) {
          smallerNumber = array[i];
          smallerNumberIndex = i;
          array[smallerNumberIndex] = array[j];
          array[j] = smallerNumber;
        }
      }
    }
    return array;
  }

})();

var result = sortingAlgorithms.quickSort(unsorted, 0, unsorted.length-1);
console.log('quick sort: ', result);
result = sortingAlgorithms.selectionSort(unsorted);
console.log('selection sort: ', result);
