import React, { Component } from 'react'
import arrayBar from './SortingVisualiser.css'
import bubbleSorted from '../SortingAlgorithms/BubbleSort.js'
import MergeSort from '../SortingAlgorithms/MergeSort.js'
import testArraysEqual from '../Tests/TestArraysEqual.js'
import randomNumberGen from '../GeneratorFunctions/RandomNumberGen.js'
import javaScriptSortedArray from '../GeneratorFunctions/JavaScriptSortedArrayGen.js'
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
        console.log(testArraysEqual(javaScriptSortedArray(this.state.array), bubbleSorted(this.state.array)))
    }



    render() {
        return (
            <div className="arrayContainer">
            {this.state.array.map((value, index) => (
                <div 
                  className="arrayBar" 
                  key={index}
                  style={{height: `${value}px`, width: `${150/this.state.array.length}px`}}
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