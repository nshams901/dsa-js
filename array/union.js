function union() {
    const arr1 = [2, 2, 2, 4, 6, 6];
    const arr2 = [1, 3, 3, 3, 4, 4];
    const result = []
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
            while (i < arr1.length && arr1[i] === arr1[i - 1]) {
                i++;
            }
        }
        else if (arr2[j] < arr1[i]) {
            result.push(arr2[j]);
            j++;
            while (j < arr2.length && arr1[j] === arr1[j - 1]) {
                j++;
            }
        } else {
            result.push(arr1[i]);
            i++;
            j++;
            // Skip over any duplicates of arr1[i] and arr2[j]
            while (i < arr1.length && arr1[i] === arr1[i - 1]) {
                i++;
            }
            while (j < arr2.length && arr2[j] === arr2[j - 1]) {
                j++;
            }
        }
    }

      // Print remaining elements of arr1, if any
  while (i < arr1.length) {
    result.push(arr1[i])
    i++;
    // Skip over any duplicates
    while (i < arr1.length && arr1[i] === arr1[i - 1]) {
      i++;
    }
  }
  
  // Print remaining elements of arr2, if any
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
    // Skip over any duplicates
    while (j < arr2.length && arr2[j] === arr2[j - 1]) {
      j++;
    }
  }

  console.log(result)
}

union()