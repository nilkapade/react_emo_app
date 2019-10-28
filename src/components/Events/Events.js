import React from 'react';
import Event from "./Event/Event";

const events = (props) => props.events.map((e, index) => {
    return <Event
        clicked={() => props.clicked(e.id)}
        title={e.title}
        description={e.description}
        duration={e.duration}
        date={e.date}
        amount={e.amount}
        key={e.id}/>
    } );
export default events;