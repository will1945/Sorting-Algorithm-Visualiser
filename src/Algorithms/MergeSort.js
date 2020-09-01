import React from 'react'


 const mergeSorted = (array) => {
    const tempArray = array.slice()
    const visualisationsArray = []
    mergeSort(array, visualisationsArray, tempArray, 0, array.length - 1)
    return visualisationsArray
  }
  
  const mergeSort = (array, visualisationsArray, tempArray, leftIdx, rightIdx) => {
      if (leftIdx === rightIdx) {
        return
      }
      if (array.length <= 1) {
        return array
      }
      const midIdx = Math.floor((leftIdx + rightIdx)/2)
      mergeSort(tempArray, visualisationsArray, array, leftIdx, midIdx)
      mergeSort(tempArray, visualisationsArray, array, midIdx + 1, rightIdx)
      merge(array, visualisationsArray, tempArray, leftIdx, midIdx, rightIdx)
    }
    
    
    const merge = (array, visualisationsArray, tempArray, leftIdx, midIdx, rightIdx) => {
      let i = leftIdx
      let j = midIdx + 1
      while (i <= midIdx && j <= rightIdx) {
          visualisationsArray.push(["change colour", i, j, "first colour"])
          visualisationsArray.push(["change colour", i, j, "second colour"])
          if (tempArray[i] <= tempArray[j]) {
              visualisationsArray.push(["change height", leftIdx, tempArray[i]])
              array[leftIdx++] = tempArray[i++]
          } else {
              visualisationsArray.push(["change height", leftIdx, tempArray[j]])
              array[leftIdx++] = tempArray[j++]
          }
      }
      while (i <= midIdx) {
          visualisationsArray.push(["change colour", i, i, "first colour"])
          visualisationsArray.push(["change colour", i, i, "second colour"])
          visualisationsArray.push(["change height", leftIdx, tempArray[i]])
          array[leftIdx++] = tempArray[i++]
      } 
      while (j <= rightIdx) {
          visualisationsArray.push(["change colour", j, j, "first colour"])
          visualisationsArray.push(["change colour", j, j, "second colour"])
          visualisationsArray.push(["change height", leftIdx, tempArray[j]])
          array[leftIdx++] = tempArray[j++]
      } 
    }

  export default mergeSorted