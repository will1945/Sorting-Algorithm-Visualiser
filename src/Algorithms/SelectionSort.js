import React from 'react'

const selectionSorted = (array) => {
    let visualisationArray = []
    for (let i = 0; i < array.length; i++) {
        let idxOfMin = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[idxOfMin] > array[j]) {
                idxOfMin = j
            }
            visualisationArray.push(["change colour", idxOfMin, j, "first colour"])
            visualisationArray.push(["change colour", idxOfMin, j, "second colour"])
        } 
        if (idxOfMin != i) {
            let temp = array[i]
            array[i] = array[idxOfMin]
            array[idxOfMin] = temp
            visualisationArray.push(["change height", i, array[i], idxOfMin, array[idxOfMin]])
        }
    } 
    //console.log(visualisationArray)
    return visualisationArray
}

export default selectionSorted