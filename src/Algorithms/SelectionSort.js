import React from 'react'

const selectionSorted = (array) => {
    for (let i = 0; i < array.length; i++) {
        let min = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array [j]) {
                min = j
            }
        } 
        if (min != i) {
            let temp = array[i]
            array[i] = array[min]
            array[min] = temp
        }
    } 
    return array
}

export default selectionSorted