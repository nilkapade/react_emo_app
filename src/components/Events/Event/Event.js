import React from 'react';

import classes from './Event.css';

const event = ( props ) => {
    return (
        <div className={classes.Event}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>Duration {props.duration} days</p>
            <p>Date {props.date}</p>
            <p>Fees {props.amount}./Rs</p>
            <button onClick={props.clicked}>Register</button> 
            {/* <input type="text" onChange={props.changed} value={props.name}/> */}
            
        </div>
    )
};

export default event;