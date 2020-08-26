import React from 'react'



/*
const mergeSorted = (array) => {
    const visualisationsArray = []
    mergeSort()
}


function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  */


const mergeSorted = (array) => {
    const visualisationsArray = []
    if (array.length <= 1) {
      return array
    }
    const middle = Math.floor(array.length/2)
    const leftArray = array.slice(0, middle)
    const rightArray = array.slice(middle, array.length)
    
    return (merge(mergeSorted(leftArray), mergeSorted(rightArray)))
  }
  
  
  const merge = (leftArray, rightArray) => {
    const output = []
    const visualisationsArray = []
    let leftIdx = 0
    let rightIdx = 0
    
  
    while (leftIdx < leftArray.length && rightIdx < rightArray.length) {
        visualisationsArray.push(["change colour", leftIdx, rightIdx, "first colour"])
        visualisationsArray.push(["change colour", leftIdx, rightIdx, "second colour"])
        if (leftArray[leftIdx] <= rightArray[rightIdx]) {
            output.push(leftArray[leftIdx])
            leftIdx++
        } else {
            output.push(rightArray[rightIdx])
            rightIdx++
            visualisationsArray.push(["change height", leftIdx, output[leftIdx], rightIdx, output[rightIdx]])
        }
    }
    
    while (leftIdx < leftArray.length) {
        visualisationsArray.push(["change colour", leftIdx, leftIdx, "first colour"])
        output.push(leftArray[leftIdx])
        leftIdx++
    } 

    while (rightIdx < rightArray.length) {
        output.push(rightArray[rightIdx])
        rightIdx++
    } 

    return visualisationsArray
  }

  export default mergeSorted