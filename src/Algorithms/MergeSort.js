import React from 'react'


const mergeSorted = (array) => {
    visualisationsArray = []
    if (array.length <= 1) {
      return array
    }
    const middle = Math.floor(array.length/2)
    const left = array.slice(0, middle)
    const right = array.slice(middle, array.length)
    
    return merge(mergeSorted(left), mergeSorted(right))
  }
  
  
  const merge = (l, r) => {
    const result = []

    const visualisationArray = []
  
    while (l.length && r.length) {
        if (l[0] <= r[0]) {
            result.push(l.shift())
        } else {
            result.push(r.shift())
        }
    }
    
    while (l.length) {
        result.push(l.shift())
    } 

    while (r.length) {
        result.push(r.shift())
    } 

    return result 
  }

  export default mergeSorted