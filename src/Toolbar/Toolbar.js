import React, { Component } from 'react'
import Banner from './Toolbar.css'

const headerBanner = (props) => {
    return (
        <div className="Banner">
            <button onClick={props.generateNewArray} disabled={!props.sortRunning}>Generate New Array</button>
            <button onClick={props.insertionSort}>Insertion Sort</button>
            <button onClick={props.bubbleSort}>Bubble Sort</button>
            <button onClick={props.selectionSort}>Selection Sort</button>
            <button onClick={props.mergeSort}>Merge Sort</button>
            <button onClick={props.sortArray}>Begin Sort</button>
        </div>
    )
}

export default headerBanner

