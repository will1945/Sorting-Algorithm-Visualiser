import React, { Component } from 'react'
import arrayBar from './Visualiser.css'
import bubbleSorted from '../Algorithms/BubbleSort.js'
import MergeSort from '../Algorithms/MergeSort.js'
import testArraysEqual from '../Tests/TestArraysEqual.js'
import randomNumberGen from '../HelperFunctions/RandomNumberGen.js'
import javaScriptSortedArray from '../HelperFunctions/JavaScriptSortedArrayGen.js'
import automateSortingAlgorithmsTest from '../Tests/AutomateSortingAlgorithmsTest.js'


class SortingVisualiser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }


    resetArray() {
        const newArray = []
        for (let i = 0; i < 150; i++) {
          newArray.push(randomNumberGen(5,500));
        }
        this.setState({array: newArray})
    }

    
    mergeSort() {

    }


    bubbleSort() {
        const bubbleSortAnimations = bubbleSorted(this.state.array)
        for (let i = 0; i < bubbleSortAnimations.length; i++) {
            const allArrayBars = document.getElementsByClassName('arrayBars')
            const [firstBarIndex, secondBarIndex] = bubbleSortAnimations[i]
            const firstBarStyle = allArrayBars[firstBarIndex].style
            const secondBarStyle = allArrayBars[secondBarIndex].style
            setTimeout(() => {
                firstBarStyle.backgroundColor = 'orange'
                secondBarStyle.backgroundColor = 'orange'
            }, i * 5);
        }
    }



    render() {
        return (
            <div className="container">
            {this.state.array.map((value, index) => (
                <div 
                  className="arrayBars" 
                  style={{height: `${value}px`, width: `${150/this.state.array.length}px`}}
                  key={index}
                  > 
                </div>
            ))}
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => automateSortingAlgorithmsTest()}>Test Sorting Algorithm (For developer use)</button>
            </div>
        )
    }
}




export default SortingVisualiser