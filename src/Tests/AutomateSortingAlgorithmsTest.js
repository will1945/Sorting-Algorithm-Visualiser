import React from 'react';
import RandomNumberGen from '../GeneratorFunctions/RandomNumberGen.js'
import testArraysEqual from './TestArraysEqual.js';
import javaScriptSortedArray from '../GeneratorFunctions/JavaScriptSortedArrayGen.js'
import bubbleSorted from '../SortingAlgorithms/BubbleSort.js'

const automateSortingAlgorithmsTest = () => {
    for (let i = 0; i < 250 ; i++) {
        const array = [];
        for (let j = 0; j < RandomNumberGen(1, 250); j++) {
            array.push(RandomNumberGen(1,1000))
        }
        console.log(testArraysEqual(javaScriptSortedArray(array), bubbleSorted(array))) 
    }
}

export default automateSortingAlgorithmsTest