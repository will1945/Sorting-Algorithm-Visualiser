import React, { Component } from 'react'
import Banner from './Toolbar.css'


const headerBanner = (props) => {
    console.log(props.getSortRunningState)
    return (
        <div className="Banner">
            <button onClick={props.generateNewArray} disabled={!props.getSortRunningState}>Generate New Array</button>
            <button onClick={props.insertionSort}>Insertion Sort</button>
            <button onClick={props.bubbleSort}>Bubble Sort</button>
            <button onClick={props.selectionSort}>Selection Sort</button>
            <button onClick={props.mergeSort}>Merge Sort</button>
            <button onClick={props.sortArray}>Begin Sorting</button>
        </div>
    )
}

export default headerBanner

