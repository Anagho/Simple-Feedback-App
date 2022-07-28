import React from 'react'
// import { useState } from 'react'

const Feedbackitem = ({ item }) => {

    // Set the state
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('This is an example of a feedback item')


    return (
        <div className='card'>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </div>
    )
}

export default Feedbackitem