import React from 'react';

//  a == default javaScript sorted array
//  b == my sorted array using each a sorting algorithm 

const testArraysEqual = (a, b) => {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}

export default testArraysEqual