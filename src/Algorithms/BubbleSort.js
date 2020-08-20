import React from 'react'

const bubbleSorted = (array) => {
    let heightIndexArray = []
    let changeHeightArray = []
    let count = 0
    for (let i = 0; i < array.length; i++) {
        for (let j =0; j < array.length-i; j++) {
          if (array[j] > array[j + 1]) {
            let temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
            heightIndexArray.push([j, j+1])
            changeHeightArray.push([array[j], array[j+1]])
            count++
          }   
        }
      }
   console.log(count)
   return [heightIndexArray, changeHeightArray] 
}

export default bubbleSorted