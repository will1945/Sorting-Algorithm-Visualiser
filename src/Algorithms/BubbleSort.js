import React from 'react'

const bubbleSorted = (array) => {
    let visualisationArray = []
    let count = 0
    for (let i = 0; i < array.length; i++) {
        for (let j =0; j < array.length-i; j++) {
          if (array[j] > array[j + 1]) {
            visualisationArray.push(["change colour", j, j+1, "first colour"])
            visualisationArray.push(["change colour", j, j+1, "second colour"])

            let temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp

            visualisationArray.push(["change height", j, array[j], j+1, array[j+1]])
            count++
          }   
        }
      }
   console.log(count)
   return visualisationArray
}

export default bubbleSorted