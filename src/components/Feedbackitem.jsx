import React from 'react'
import {FaTimes} from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types';

const Feedbackitem = ({ item, handleDelete }) => {


    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

// PropTypes
Feedbackitem.propTypes = {
    children: PropTypes.object.isRequired,
}

export default Feedbackitem