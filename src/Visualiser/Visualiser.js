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
import HeaderBanner from '../Toolbar/Toolbar.js'
import Aux from '../hoc/Auxiliary.js'


class SortingVisualiser extends Component {
    constructor(props) {
        super(props)
        this.handleChangeSize = this.handleChangeSize.bind(this)
        this.handleChangeSpeed = this.handleChangeSpeed.bind(this)
        this.state = {
            array: [],
            visualisationSpeed: 40,
            arraySize: 80,
            sortingAlgorithm: ' ',
            sortRunning: 'not running',
        }  
    }

    componentDidMount() {
        this.generateNewArray()
    
    }

    handleChangeSize(e){
        this.setState({arraySize: e.target.value})
        this.componentDidMount()
    }

    
    handleChangeSpeed(e){
        this.setState({visualisationSpeed: e.target.value})
    }


    generateNewArray() {
        console.log(this.state.sortRunning)
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
                const colour = bubbleSortVisualisations[i][3] === "first colour" ? '#72FF00' : '#ff7b23'
                const firstBarIdx = bubbleSortVisualisations[i][1]
                const secondBarIdx = bubbleSortVisualisations[i][2]
                setTimeout(() => {
                    allArrayBars[firstBarIdx].style.backgroundColor = colour
                    allArrayBars[secondBarIdx].style.backgroundColor = colour
                }, (i * 2000)/this.state.visualisationSpeed)
            } else {
                setTimeout(() => {
                    const firstBarIdx = bubbleSortVisualisations[i][1]
                    const updateFirstBarHeight = bubbleSortVisualisations[i][2]
                    const secondBarIdx = bubbleSortVisualisations[i][3]
                    const updateSecondBarHeight = bubbleSortVisualisations[i][4]
                    allArrayBars[firstBarIdx].style.height = `${updateFirstBarHeight}px`
                    allArrayBars[secondBarIdx].style.height = `${updateSecondBarHeight}px`
                  }, (i * 2000)/this.state.visualisationSpeed)
            } 
        }
    }
      

    selectionSort() {
        const selectionSortVisualisations = selectionSorted(this.state.array)
        for (let i = 0; i < selectionSortVisualisations.length; i++) {
            const allArrayBars = document.getElementsByClassName('arrayBars')
            if (selectionSortVisualisations[i][0] === "change colour") {
                const colour = selectionSortVisualisations[i][3] === "first colour" ? '#72FF00' : '#ff7b23'
                const firstBarIdx = selectionSortVisualisations[i][1]
                const secondBarIdx = selectionSortVisualisations[i][2]
                setTimeout(() => {
                    allArrayBars[firstBarIdx].style.backgroundColor = colour
                    allArrayBars[secondBarIdx].style.backgroundColor = colour
                }, (i * 2000)/this.state.visualisationSpeed)
            } else {
                setTimeout(() => {
                    const firstBarIdx = selectionSortVisualisations[i][1]
                    const updateFirstBarHeight = selectionSortVisualisations[i][2]
                    const secondBarIdx = selectionSortVisualisations[i][3]
                    const updateSecondBarHeight = selectionSortVisualisations[i][4]
                    allArrayBars[firstBarIdx].style.height = `${updateFirstBarHeight}px`
                    allArrayBars[secondBarIdx].style.height = `${updateSecondBarHeight}px`
                  }, (i * 2000)/this.state.visualisationSpeed)
            } 
        }
    }


    mergeSort() {
        const mergeSortVisualisations = mergeSorted(this.state.array)
        for (let i = 0; i < mergeSortVisualisations.length; i++) {
            const allArrayBars = document.getElementsByClassName('arrayBars')
            if (mergeSortVisualisations[i][0] === "change colour") {
                const colour = mergeSortVisualisations[i][3] === "first colour" ? '#72FF00' : '#ff7b23'
                const firstBarIdx = mergeSortVisualisations[i][1]
                const secondBarIdx = mergeSortVisualisations[i][2]
                setTimeout(() => {
                    allArrayBars[firstBarIdx].style.backgroundColor = colour
                    allArrayBars[secondBarIdx].style.backgroundColor = colour
                }, (i * 2000)/this.state.visualisationSpeed)
            } else {
                setTimeout(() => {
                    const firstBarIdx = mergeSortVisualisations[i][1]
                    const updateFirstBarHeight = mergeSortVisualisations[i][2]
                    allArrayBars[firstBarIdx].style.height = `${updateFirstBarHeight}px`
                  }, (i * 2000)/this.state.visualisationSpeed)
            } 
        }
    }


    insertionSort() {
        const selectionSortVisualisations = insertionSorted(this.state.array)
        for (let i = 0; i < selectionSortVisualisations.length; i++) {
            const allArrayBars = document.getElementsByClassName('arrayBars')
            if (selectionSortVisualisations[i][0] === "change colour") {
                const colour = selectionSortVisualisations[i][3] === "first colour" ? '#72FF00' : '#ff7b23'
                const firstBarIdx = selectionSortVisualisations[i][1]
                const secondBarIdx = selectionSortVisualisations[i][2]
                setTimeout(() => {
                    allArrayBars[firstBarIdx].style.backgroundColor = colour
                    allArrayBars[secondBarIdx].style.backgroundColor = colour
                }, (i * 2000)/this.state.visualisationSpeed)
            } else {
                setTimeout(() => {
                    const firstBarIdx = selectionSortVisualisations[i][1]
                    const updateFirstBarHeight = selectionSortVisualisations[i][2]
                    const secondBarIdx = selectionSortVisualisations[i][3]
                    const updateSecondBarHeight = selectionSortVisualisations[i][4]
                    allArrayBars[firstBarIdx].style.height = `${updateFirstBarHeight}px`
                    allArrayBars[secondBarIdx].style.height = `${updateSecondBarHeight}px`
                  }, (i * 2000)/this.state.visualisationSpeed)
            } 
        }
    }

    sortArray() {
        if(this.state.sortingAlgorithm === 'bubbleSort') {
            this.bubbleSort()
        } else if(this.state.sortingAlgorithm === 'selectionSort') {
            this.selectionSort()
        } else if(this.state.sortingAlgorithm === 'mergeSort') {
            this.mergeSort()
        } else if(this.state.sortingAlgorithm === 'insertionSort') {
            this.insertionSort()
        } else {
            alert("Please select a sorting algorithm!")
        }
        console.log(this.state.sortRunning)
    }


    render() {
        return (
            <Aux>
            <HeaderBanner 
                generateNewArray={() => this.generateNewArray()}
                getSortRunningState={this.state.sortRunning}
                bubbleSort={() => this.setState({sortingAlgorithm: 'bubbleSort'})}
                selectionSort={() => this.setState({sortingAlgorithm: 'selectionSort'})}
                mergeSort={() => this.setState({sortingAlgorithm: 'mergeSort'})}
                insertionSort={() => this.setState({sortingAlgorithm: 'insertionSort'})}

                sortArray={() => this.sortArray()}
            />
            <div className="container">
            {this.state.array.map((value, idx) => (
                <div 
                  className="arrayBars" 
                  style={{height: `${value}px`, width: `${150/this.state.array.length*3}px`}}
                  key={idx}
                  > 
            </div>
            ))}
            </div>
            <div className="arraySize">
                Change Size Of Array:  
                <input
                type="range"
                min={6}
                max={150}
                value={this.state.arraySize} 
                name="arraySize" 
                onChange={this.handleChangeSize}
                disabled={!this.state.sortRunning}
                />
            </div>
            <div className="visualisationSpeed">
                Change Speed Of Animations:  
                <input
                type="range"
                min={8}
                max={160}
                value={this.state.visualisationSpeed} 
                name="visualisationSpeed" 
                onChange={this.handleChangeSpeed}
                disabled={!this.state.sortRunning}
                />
            </div>
            </Aux>
        )
    }
}

export default SortingVisualiser