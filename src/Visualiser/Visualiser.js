import React, { Component } from 'react'
import arrayBars from './Visualiser.css'
import bubbleSorted from '../Algorithms/BubbleSort.js'
import selectionSorted from '../Algorithms/SelectionSort.js'
import mergeSorted from '../Algorithms/MergeSort.js'
import insertionSorted from '../Algorithms/InsertionSort.js'
import testArraysEqual from '../Tests/TestArraysEqual.js'
import randomNumberGen from '../HelperFunctions/RandomNumberGen.js'
import javaScriptSortedArray from '../HelperFunctions/JavaScriptSortedArrayGen.js'
import automateSortingAlgorithmsTest from '../Tests/AutomateSortingAlgorithmsTest.js'
import HeaderBanner from '../HeaderBanner/HeaderBanner'
import Aux from '../hoc/Auxiliary'



class SortingVisualiser extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            array: [],
            visualisationSpeed: 20,
            arraySize: 80,
            sortingAlgorithm: null,
            sortRunning: null,
        }  
    }

    componentDidMount() {
        this.generateNewArray()
    
    }

    handleChange(e){
        this.setState({arraySize: e.target.value});
        console.log(this.state.arraySize)
        this.componentDidMount()
    }


    generateNewArray() {
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
                }, i * this.state.visualisationSpeed)
            } else {
                setTimeout(() => {
                    const firstBarIdx = bubbleSortVisualisations[i][1]
                    const updateFirstBarHeight = bubbleSortVisualisations[i][2]
                    const secondBarIdx = bubbleSortVisualisations[i][3]
                    const updateSecondBarHeight = bubbleSortVisualisations[i][4]
                    allArrayBars[firstBarIdx].style.height = `${updateFirstBarHeight}px`
                    allArrayBars[secondBarIdx].style.height = `${updateSecondBarHeight}px`
                  }, i * this.state.visualisationSpeed)
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
                }, i * this.state.visualisationSpeed)
            } else {
                setTimeout(() => {
                    const firstBarIdx = selectionSortVisualisations[i][1]
                    const updateFirstBarHeight = selectionSortVisualisations[i][2]
                    const secondBarIdx = selectionSortVisualisations[i][3]
                    const updateSecondBarHeight = selectionSortVisualisations[i][4]
                    allArrayBars[firstBarIdx].style.height = `${updateFirstBarHeight}px`
                    allArrayBars[secondBarIdx].style.height = `${updateSecondBarHeight}px`
                  }, i * this.state.visualisationSpeed)
            } 
        }
    }


    mergeSort() {
        const mergeSortVisualisations = mergeSorted(this.state.array)
        console.log(mergeSortVisualisations)

        for (let i = 0; i < mergeSortVisualisations.length; i++) {
            const allArrayBars = document.getElementsByClassName('arrayBars')
            if (mergeSortVisualisations[i][0] === "change colour") {
                const colour = mergeSortVisualisations[i][3] === "first colour" ? 'green' : 'orange'
                const firstBarIdx = mergeSortVisualisations[i][1]
                const secondBarIdx = mergeSortVisualisations[i][2]
                setTimeout(() => {
                    allArrayBars[firstBarIdx].style.backgroundColor = colour
                    allArrayBars[secondBarIdx].style.backgroundColor = colour
                }, i * this.state.visualisationSpeed)
            } else {
                setTimeout(() => {
                    const firstBarIdx = mergeSortVisualisations[i][1]
                    const updateFirstBarHeight = mergeSortVisualisations[i][2]
                    allArrayBars[firstBarIdx].style.height = `${updateFirstBarHeight}px`
                  }, i * this.state.visualisationSpeed)
            } 
        }
    }


    insertionSort() {
        const selectionSortVisualisations = insertionSorted(this.state.array)
        console.log(this.state.array)
        console.log(selectionSortVisualisations)
        for (let i = 0; i < selectionSortVisualisations.length; i++) {
            const allArrayBars = document.getElementsByClassName('arrayBars')
            if (selectionSortVisualisations[i][0] === "change colour") {
                const colour = selectionSortVisualisations[i][3] === "first colour" ? 'green' : 'orange'
                const firstBarIdx = selectionSortVisualisations[i][1]
                const secondBarIdx = selectionSortVisualisations[i][2]
                setTimeout(() => {
                    allArrayBars[firstBarIdx].style.backgroundColor = colour
                    allArrayBars[secondBarIdx].style.backgroundColor = colour
                }, i * this.state.visualisationSpeed)
            } else {
                setTimeout(() => {
                    const firstBarIdx = selectionSortVisualisations[i][1]
                    const updateFirstBarHeight = selectionSortVisualisations[i][2]
                    const secondBarIdx = selectionSortVisualisations[i][3]
                    const updateSecondBarHeight = selectionSortVisualisations[i][4]
                    allArrayBars[firstBarIdx].style.height = `${updateFirstBarHeight}px`
                    allArrayBars[secondBarIdx].style.height = `${updateSecondBarHeight}px`
                  }, i * this.state.visualisationSpeed)
            } 
        }
    }


    render() {
        return (
            <Aux>
            <HeaderBanner 
                generateNewArray={() => this.generateNewArray()}
                bubbleSort={() => this.bubbleSort()}
                selectionSort={() => this.selectionSort()}
                mergeSort={() => this.mergeSort()}
                insertionSort={() => this.insertionSort()}


            />
            <div className="container">
            {this.state.array.map((value, idx) => (
                <div 
                  className="arrayBars" 
                  style={{height: `${value}px`, width: `${150/this.state.array.length}px`}}
                  key={idx}
                  > 
            </div>
            ))}
            </div>
            <div className="arraySize">
                Change Size Of Array:  
                <input
                type="range"
                min={5}
                max={150}
                value={this.state.arraySize} 
                name="arraySize" 
                onChange={this.handleChange}
                disabled={this.sortRunning ? "disabled" : null}
                />
            </div>
            <div className="visualisationSpeed">
                Change Speed Of Animations:  
                <input
                type="range"
                min={5}
                max={150}
                value={this.state.arraySize} 
                name="arraySize" 
                onChange={this.handleChange}
                disabled={this.sortRunning ? "disabled" : null}
                />
            </div>

            </Aux>
        )
    }
}

export default SortingVisualiser