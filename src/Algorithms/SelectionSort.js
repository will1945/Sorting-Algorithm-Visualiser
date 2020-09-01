import React from 'react'


const selectionSorted = (array) => {
    let visualisationsArray = []
    for (let i = 0; i < array.length; i++) {
        let idxOfMin = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[idxOfMin] > array[j]) {
                idxOfMin = j
            }
            visualisationsArray.push(["change colour", idxOfMin, j, "first colour"])
            visualisationsArray.push(["change colour", idxOfMin, j, "second colour"])
        } 
        if (idxOfMin != i) {
            let temp = array[i]
            array[i] = array[idxOfMin]
            array[idxOfMin] = temp
            visualisationsArray.push(["change height", i, array[i], idxOfMin, array[idxOfMin]])
        }
    } 
    return visualisationsArray
}

export default selectionSorted