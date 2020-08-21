import React, { Component } from 'react'
import arrayBars from './Visualiser.css'
import bubbleSorted from '../Algorithms/BubbleSort.js'
import selectionSorted from '../Algorithms/SelectionSort.js'
import MergeSort from '../Algorithms/MergeSort.js'
import testArraysEqual from '../Tests/TestArraysEqual.js'
import randomNumberGen from '../HelperFunctions/RandomNumberGen.js'
import javaScriptSortedArray from '../HelperFunctions/JavaScriptSortedArrayGen.js'
import automateSortingAlgorithmsTest from '../Tests/AutomateSortingAlgorithmsTest.js'



class SortingVisualiser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            array: [],
            animationSpeed: 100,
            arraySize: 20
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

                const firstBarIndex = bubbleSortVisualisations[i][1]
                const secondBarIndex = bubbleSortVisualisations[i][2]
                setTimeout(() => {
                    allArrayBars[firstBarIndex].style.backgroundColor = colour
                    allArrayBars[secondBarIndex].style.backgroundColor = colour
                }, i * this.state.animationSpeed)
            } else {
                setTimeout(() => {
                    const firstBarIndex = bubbleSortVisualisations[i][1]
                    const updateFirstBarHeight = bubbleSortVisualisations[i][2]
                    const secondBarIndex = bubbleSortVisualisations[i][3]
                    const updateSecondBarHeight = bubbleSortVisualisations[i][4]

                    allArrayBars[firstBarIndex].style.height = `${updateFirstBarHeight}px`
                    allArrayBars[secondBarIndex].style.height = `${updateSecondBarHeight}px`
                  }, i * this.state.animationSpeed)
            } 
        }
    }
      

    selectionSort() {
        console.log(this.state.array)
        const selectionSortVisualisations = selectionSorted(this.state.array)
        console.log(selectionSorted(this.state.array))

        for (let i = 0; i < selectionSortVisualisations.length; i++) {
            const allArrayBars = document.getElementsByClassName('arrayBars')
            setTimeout(() => {
              allArrayBars[i].style.height = `${selectionSortVisualisations[i]}px`
              }, i * this.state.animationSpeed)
        }
    }




    mergeSort() {

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
            <button onClick={() => this.selectionSort()}>Selection Sort</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => automateSortingAlgorithmsTest()}>Test Sorting Algorithm (For developer use)</button>
            </div>
        )
    }
}

export default SortingVisualiser