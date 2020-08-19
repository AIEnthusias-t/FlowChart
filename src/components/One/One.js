import React, { Component } from 'react'
import classes from './One.module.css';
import Box from '../Box/Box';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Modal from '../Modal/Modal';
import Two from '../Two/Two';

class One extends Component {
    state = {
        show: false,
        data: null,
    }

    clickHandler = () => {
        console.log("check 1");
        this.setState(prevState => { return { show: !prevState.show } })
    }

    addOneHandler = () => {
        this.setState(prevState => { return { show: !prevState.show } })
        this.setState(prevState => { return { data: (<One data={prevState.data} clicked={this.clickHandler} delete={this.deleteElement} />) } })
    }

    addTwoHandler = () => {
        this.setState(prevState => { return { show: !prevState.show } })
        this.setState({data: (<Two dataLeft={this.state.data} clicked={this.clickHandler} delete={this.deleteElement} />) } )
}

deleteElement = () => {
    this.setState({ data: null })
}

render() {
    return (
        <React.Fragment>
            <Modal show={this.state.show} modalClose={this.clickHandler} addOne={this.addOneHandler} addTwo={this.addTwoHandler} />
            <div className={classes.One} >
                <Box showEle={this.props.delete} />
                <div className={classes.Line}>
                    <div className={classes.Top}>
                    </div>
                    <AddCircleRoundedIcon className={classes.Add} onClick={this.clickHandler} />
                    <div className={classes.Data}>
                        {this.props.data ? this.props.data : this.state.data}
                    </div>

                </div>
            </div >
        </React.Fragment>
    )
}
}
export default One;