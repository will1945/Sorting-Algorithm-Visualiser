import React from 'react'

const bubbleSorted = (array) => {
    animationsArray = []


    for (let i = 0; i < array.length; i++) {
        for (let j =0; j < array.length-i; j++) {
          if (array[j] > array[j + 1]) {
            let temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
            animationsArray.push([j, j+1])
          }
        }
      }
      return array 
}

export default bubbleSorted