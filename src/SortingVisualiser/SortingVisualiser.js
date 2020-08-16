import React, { Component } from 'react'
import arrayBar from './SortingVisualiser.css'

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
        function randomNumberGen(minimum, maximum) {
            return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
        }

        const newArray = []
        for (let i = 0; i < 50; i++) {
          newArray.push(randomNumberGen(5,500));
        }
        this.setState({array: newArray})
    }

    render() {
        return (
            <>
            {this.state.array.map((value, index) => (
                <div className="arrayBar" key={index}>
                    {value}
                </div>
            ))}
            </>
        )
    }
}


export default SortingVisualiser