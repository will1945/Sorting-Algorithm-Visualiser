import React, { Component } from 'react'
import arrayBars from './Visualiser.css'
import bubbleSorted from '../Algorithms/BubbleSort.js'
import selectionSorted from '../Algorithms/SelectionSort.js'
import mergeSorted from '../Algorithms/MergeSort.js'
import testArraysEqual from '../Tests/TestArraysEqual.js'
import randomNumberGen from '../HelperFunctions/RandomNumberGen.js'
import javaScriptSortedArray from '../HelperFunctions/JavaScriptSortedArrayGen.js'
import automateSortingAlgorithmsTest from '../Tests/AutomateSortingAlgorithmsTest.js'




class SortingVisualiser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            array: [],
            animationSpeed: 500,
            arraySize: 20,
        }  
    }

    componentDidMount() {
        this.resetArray()
    }


    resetArray() {
        const newArray = []
        for (let i = 0; i < this.state.arraySize; i++) {
          newArray.push(randomNumberGen(5,500))
        }
        this.setState({array: newArray})
    }


    bubbleSort() {
        const bubbleSortVisualisations = bubbleSorted(this.state.array)

        for (let i = 0; i < bubbleSortVisualisations.length; i++) {
            const allArrayBars = document.getElementsByClassName('arrayBars')
            if (bubbleSortVisualisations[i][0] === "change colour") {
                const colour = bubbleSortVisualisations[i][3] === "first colour" ? 'green' : 'orange'

                const firstBarIdx = bubbleSortVisualisations[i][1]
                const secondBarIdx = bubbleSortVisualisations[i][2]
                setTimeout(() => {
                    allArrayBars[firstBarIdx].style.backgroundColor = colour
                    allArrayBars[secondBarIdx].style.backgroundColor = colour
                }, i * this.state.animationSpeed)
            } else {
                setTimeout(() => {
                    const firstBarIdx = bubbleSortVisualisations[i][1]
                    const updateFirstBarHeight = bubbleSortVisualisations[i][2]
                    const secondBarIdx = bubbleSortVisualisations[i][3]
                    const updateSecondBarHeight = bubbleSortVisualisations[i][4]

                    allArrayBars[firstBarIdx].style.height = `${updateFirstBarHeight}px`
                    allArrayBars[secondBarIdx].style.height = `${updateSecondBarHeight}px`
                  }, i * this.state.animationSpeed)
            } 
        }
    }
      

    selectionSort() {
        const selectionSortVisualisations = selectionSorted(this.state.array)

        for (let i = 0; i < selectionSortVisualisations.length; i++) {
            const allArrayBars = document.getElementsByClassName('arrayBars')
            if (selectionSortVisualisations[i][0] === "change colour") {
                const colour = selectionSortVisualisations[i][3] === "first colour" ? 'green' : 'orange'

                const firstBarIdx = selectionSortVisualisations[i][1]
                const secondBarIdx = selectionSortVisualisations[i][2]
                setTimeout(() => {
                    allArrayBars[firstBarIdx].style.backgroundColor = colour
                    allArrayBars[secondBarIdx].style.backgroundColor = colour
                }, i * this.state.animationSpeed)
            } else {
                setTimeout(() => {
                    const firstBarIdx = selectionSortVisualisations[i][1]
                    const updateFirstBarHeight = selectionSortVisualisations[i][2]
                    const secondBarIdx = selectionSortVisualisations[i][3]
                    const updateSecondBarHeight = selectionSortVisualisations[i][4]

                    allArrayBars[firstBarIdx].style.height = `${updateFirstBarHeight}px`
                    allArrayBars[secondBarIdx].style.height = `${updateSecondBarHeight}px`
                  }, i * this.state.animationSpeed)
            } 
        }
    }




    mergeSort() {
        const mergeSortVisualisations = mergeSorted(this.state.array)

        for (let i = 0; i < mergeSortVisualisations.length; i++) {
            const allArrayBars = document.getElementsByClassName('arrayBars')
            if (mergeSortVisualisations[i][0] === "change colour") {
                const colour = mergeSortVisualisations[i][3] === "first colour" ? 'green' : 'orange'

                const firstBarIdx = mergeSortVisualisations[i][1]
                const secondBarIdx = mergeSortVisualisations[i][2]
                setTimeout(() => {
                    allArrayBars[firstBarIdx].style.backgroundColor = colour
                    allArrayBars[secondBarIdx].style.backgroundColor = colour
                }, i * this.state.animationSpeed)
            } else {
                setTimeout(() => {
                    const firstBarIdx = mergeSortVisualisations[i][1]
                    const updateFirstBarHeight = mergeSortVisualisations[i][2]
                    const secondBarIdx = mergeSortVisualisations[i][3]
                    const updateSecondBarHeight = mergeSortVisualisations[i][4]

                    allArrayBars[firstBarIdx].style.height = `${updateFirstBarHeight}px`
                    allArrayBars[secondBarIdx].style.height = `${updateSecondBarHeight}px`
                  }, i * this.state.animationSpeed)
            } 
        }
    }


    render() {
        return (
            <div className="container">
            {this.state.array.map((value, idx) => (
                <div 
                  className="arrayBars" 
                  style={{height: `${value}px`, width: `${150/this.state.array.length}px`}}
                  key={idx}
                  > 
                </div>
            ))}
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.selectionSort()}>Selection Sort</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => automateSortingAlgorithmsTest()}>Test Sorting Algorithm (For developer use)</button>
            </div>
        )
    }
}

export default SortingVisualiser