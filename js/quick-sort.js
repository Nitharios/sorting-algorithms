console.log('Sanity Check: Quick Sort');

var unsorted = [3, 6, 1, 8, 2, 4, 9, 5, 7];

// debugger;
function quickSortStarter(array) {

  return quickSort(array, 0, array.length-1);

  function quickSort(array, left, right) {
    // debugger;
    var i = left;
    var j = right;
    var pivot = array[Math.floor((left+right)/2)]; 

    while (i <= j) {
      while (array[i] < pivot) i++;
      while (array[j] > pivot) j--;

      if (i <= j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
      }
    }

    if (left < j) quickSort(array, left, j);
    if (i < right) quickSort(array, i, right);

    return array;
  }
}

var result = quickSortStarter(unsorted);
console.log(result);

// function quickSortStarter(toSort) { 
//   // base case
//   if (toSort.length <= 1) {
//     return toSort;
//   }

//   var lowIndex = 0;
//   var highIndex = toSort.length-1;

//   // debugger;
//   quickSort(toSort, lowIndex, highIndex);

//   function quickSort(toSort, lowIndex, highIndex) {
//     if (lowIndex < highIndex) {
//       var pivotIndex = partition(toSort, lowIndex, highIndex);
//       quickSort(toSort, lowIndex, pivotIndex);
//       quickSort(toSort, pivotIndex+1, highIndex);
//     }
//   }

//   function partition(toSort, lowIndex, highIndex) {
//     var pivot = toSort[lowIndex];
//     var i = lowIndex-1;
//     var j = highIndex+1;

//     while (true) {
//       do {
//         i = i + 1;
//       } while (toSort[i] < pivot);

//       do {
//         j = j - 1;
//       } while (toSort[j] > pivot);

//       if (i >= j) {
//         return j;
//       }
//     }

//     var temp = toSort[i];
//     toSort[i] = toSort[j];
//     toSort[j] = temp;
//   }

//   // base case
//   // return value?
//   return toSort;
// }