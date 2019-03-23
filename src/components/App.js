import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { addRecipe, removeFromCalendar } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
          Hello Prashanth!
      </div>
    );
  }
}

function mapStateToProps(calendar){
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.assign({}, calendar[day])
    })),
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)), 
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
