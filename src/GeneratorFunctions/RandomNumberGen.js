import React from 'react';

const randomNumberGen = (minimum, maximum) => {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
}

export default randomNumberGen