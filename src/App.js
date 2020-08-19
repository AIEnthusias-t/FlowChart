import React, { Component } from 'react';
import classes from './App.module.css';
import Two from './components/Two/Two';
import One from './components/One/One';
import Modal from './components/Modal/Modal';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

class App extends Component {
  state = {
    show: false,
    data: null,
  }
  
  clickHandler = () => {
    console.log("check app")
    this.setState(prevState => { return { show: !prevState.show } })
  }

  addOneHandler = () => {
    this.setState(prevState => { return { show: !prevState.show } })
    this.setState(prevState => { return { data: (<One data={prevState.data} clicked={this.clickHandler} delete={this.deleteElement} />) } })
  }

  addTwoHandler = () => {
    this.setState(prevState => { return { show: !prevState.show } })
    this.setState(prevState => { return { data: (<Two dataLeft={prevState.data} clicked={this.clickHandler} delete={this.deleteElement} />) } })
  }

  deleteElement = () => {
    this.setState({ data: null })
  }

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Container}>
          <Modal show={this.state.show} modalClose={this.clickHandler} addOne={this.addOneHandler} addTwo={this.addTwoHandler} />
          <div className={classes.InputBox}>
            <h3>Start</h3>
          </div>
          <div className={classes.Line}>
            <div className={classes.Top}>
            </div>
            <AddCircleRoundedIcon className={classes.Add} onClick={this.clickHandler} />
            <div className={classes.Data}>
              {this.state.data}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
