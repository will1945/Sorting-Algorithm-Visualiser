import React from 'react'


const insertionSorted = (array) => {
    let visualisationsArray = []
    for (let i = 1; i < array.length; i++) {
        let j = i - 1
        let current = array[i]
        while (j >= 0 && array[j] > current) {
          visualisationsArray.push(["change colour", j, j + 1, "first colour"])
          visualisationsArray.push(["change colour", j, j + 1, "second colour"])
          let temp = array[j + 1]
          array[j + 1] = array[j]
          array[j] = temp
          visualisationsArray.push(["change height", j, array[j], j+1, array[j+1]])
          j--
        }
        array[j+1] = current
    }  
    return visualisationsArray
}

export default insertionSorted