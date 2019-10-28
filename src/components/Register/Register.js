import React from 'react';

import classes from './Register.css';

const register = ( props ) => {
    return (
        <div className={classes.Register}>
            <h2>Book Event  "{props.title}"</h2>
            <p>Enter Name: <input type="text"/></p>
            <p>Enter Address: <input type="text"/></p>
            <p>Mobile Number: +91 <input type="text"/></p>
            <p>Seats <input type="text"/></p>
            <button onClick={props.clicked}>Submit</button> 
            {/* <input type="text" onChange={props.changed} value={props.name}/> */}
        </div>
    )
};

export default register;