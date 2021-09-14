import React from 'react';

import './SingleItem.css';
import Card from '../UI/Card';


const SingleItem = (props) => {
    return (
        <Card className="items bg-white">
            <div className="icon-container">
                <img src={props.icon} alt="icon" />
            </div>
            <h4 className="title capitalize">{props.title}</h4>
            <p className="description gray-color">{props.description}</p>
        </Card>
    )
}

export default SingleItem;
