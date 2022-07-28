import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types';

const Feedbackitem = ({ item }) => {

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

// PropTypes
Feedbackitem.propTypes = {
    children: PropTypes.object.isRequired,
}

export default Feedbackitem