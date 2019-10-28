import React, { Component } from 'react';
import classes from './App.css';
import Events from '../components/Events/Events';
import Cockpit from '../components/Cockpit/Cockpit';
import Register from '../components/Register/Register';

class App extends Component {
  state = {
    events: [
      { id: '111', title: "Vasota Jungle Trek", description: "You're going to enjoy 3 hrs long mesmerizing boat jouney through Koyana backwaters. Also you will have thrilling experience while trek in dense forest.", duration: 1, date: "Saturday 02-Nov-2019", amount: 1500},
      { id: '222', title: "Sandhaan Valley", description: "Also knows as Valley of Showdows. You will have amazing experience going through longest valley in Maharashtra.", duration: 2, date: "Friday 08-Nov-2019", amount: 900},
      { id: '333', title: "Kalasubai", description: "Everest of Maharashtra. Feel the experience of climbing highest peek in Maharashtra", duration: 2, date: "Saturday 09-Nov-2019", amount: 2000}
    ],
    otherState: 'some other value',
    showEvents: true,
    showRegister: false,
    seletedEvent: "null"
  }
  
  nameChangehandler = (event, id) => {

    /* const eventIndex = this.state.events.findIndex(p => {
      return p.id === id;
    });

    const eventCopy = {
      ...this.state.events[eventIndex]
    };

    eventCopy.name = event.target.value;

    const events = [...this.state.events];
    events[eventIndex] = eventCopy;

    this.setState( {events: events}); */
  }

  registerEventHandler = (id) => {
    /* const eventsCopy = [...this.state.events]
    eventsCopy.splice(eventIndex, 1);
    this.setState({events: eventsCopy}); */
    const eventIndex = this.state.events.findIndex(e => {
      return e.id === id;
    });
    const eventCopy = {
      ...this.state.events[eventIndex]
    };

    let title = eventCopy.title;
    this.setState ({seletedEvent: title});
    this.setState ({showEvents: false});
    this.setState ({showRegister: true});
  }

  submitEventHandler = () => {
    //const doesShow = this.state.showEvents;
    this.setState ({showEvents : true});
    this.setState ({showRegister : false});
  }

  render() {
    let events = null;
    let cockpit = null;
    let register = null;

    if(this.state.showEvents) {
      events = <Events
              events={this.state.events}
              clicked={this.registerEventHandler}/>;
    }
  
    if(this.state.showRegister) {
      register = <Register
                  clicked={this.submitEventHandler}
                  title={this.state.seletedEvent}/>;
    }

    cockpit = <Cockpit
              title={this.props.appTitle}
              showEvents={this.state.showEvents}
              events={this.state.events}
              clicked={this.toggleEventsHandler}/>;

    return (
      <div className={classes.App}>
        {cockpit}
        {events} 
        {register} 
      </div>
    );
  }
}

export default App;
