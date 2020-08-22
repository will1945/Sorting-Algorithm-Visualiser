import React from 'react';
import RandomNumberGen from '../HelperFunctions/RandomNumberGen.js'
import testArraysEqual from './TestArraysEqual.js';
import javaScriptSortedArray from '../HelperFunctions/JavaScriptSortedArrayGen.js'
import bubbleSorted from '../Algorithms/BubbleSort.js'
import selectionSorted from '../Algorithms/SelectionSort.js'
import mergeSorted from '../Algorithms/MergeSort.js'



const automateSortingAlgorithmsTest = () => {
    for (let i = 0; i < 100 ; i++) {
        const array = [];
        for (let j = 0; j < RandomNumberGen(1, 250); j++) {
            array.push(RandomNumberGen(1,1000))
        }
        console.log(testArraysEqual(javaScriptSortedArray(array), mergeSorted(array)))
    }
}

export default automateSortingAlgorithmsTest