import React, { Component } from 'react'
import arrayBars from './Visualiser.css'
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
        for (let i = 0; i < 30; i++) {
          newArray.push(randomNumberGen(5,100));
        }
        this.setState({array: newArray})
    }

    
    mergeSort() {

    }



/*
    bubbleSort() {
        const animations = bubbleSorted(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('arrayBars');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'green';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 100);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
      }

*/


    bubbleSort() {
        const bubbleSortAnimations = bubbleSorted(this.state.array)
        for (let i = 0; i < bubbleSortAnimations[1].length; i++) {
            const allArrayBars = document.getElementsByClassName('arrayBars')
            const [firstBarIndex, secondBarIndex] = bubbleSortAnimations[0][i]
            const [firstBarHeight, secondBarHeight] = bubbleSortAnimations[1][i]

            setTimeout(() => {
                allArrayBars[firstBarIndex].style.backgroundColor = 'white'
                allArrayBars[secondBarIndex].style.backgroundColor = 'white'
                allArrayBars[firstBarIndex].style.height = `${firstBarHeight}px`        
                allArrayBars[secondBarIndex].style.height = `${secondBarHeight}px`

                allArrayBars[firstBarIndex].style.backgroundColor = 'orange'

            }, i * 50);
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