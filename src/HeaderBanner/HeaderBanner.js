import React, { Component } from 'react'
import Banner from './HeaderBanner.css'

const headerBanner = (props) => {
    return (
        <div className="Banner">
            <button onClick={props.generateNewArray}>Generate New Array</button>
            <button onClick={props.insertionSort}>Insertion Sort</button>
            <button onClick={props.bubbleSort}>Bubble Sort</button>
            <button onClick={props.selectionSort}>Selection Sort</button>
            <button onClick={props.mergeSort}>Merge Sort</button>
            <button>Begin Sort</button>
        </div>
    )
}

export default headerBanner

