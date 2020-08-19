import React, { Component } from 'react'
import classes from './Two.module.css';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Box from '../Box/Box';
import One from '../One/One';
import Modal from '../Modal/Modal';

class Two extends Component {
    state = {
        show: false,
        dataLeft: null,
        dataRight: null,
        position: null,
    }

    clickHandler = (location) => {
        console.log("check two");
        this.setState(prevState => { return { show: !prevState.show } })
        this.setState({ position: location })
    }

    addOneHandler = () => {
        this.setState(prevState => { return { show: !prevState.show } })
        console.log(this.state.position === 'left');
        this.state.position === 'left' ?
            this.setState({ dataLeft: (<One data={this.state.dataLeft} clicked={this.clickHandler} delete={this.deleteElement} />) })
            : this.setState(prevState => { return { dataRight: (<One data={prevState.dataRight} clicked={this.clickHandler} delete={this.deleteElement} />) } })

    }

    addTwoHandler = () => {
        this.setState(prevState => { return { show: !prevState.show } })
        this.state.position === 'left' ?
            this.setState({ dataLeft: (<Two dataLeft={this.state.dataLeft} clicked={this.clickHandler} delete={this.deleteElement} />) })
            : this.setState(prevState => { return { dataRight: (<Two dataLeft={prevState.dataRight} clicked={this.clickHandler} delete={this.deleteElement} />) } })
    }

    deleteElement = () => {
        this.setState({ data: null })
    }


    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.show} modalClose={this.clickHandler} addOne={this.addOneHandler} addTwo={this.addTwoHandler} />
                <div className={classes.Two} >
                    <Box showEle={this.props.delete} />
                    <div className={classes.Line}>
                        <div className={classes.Top}>

                        </div>
                        <div className={classes.Horizontal}>

                        </div>
                        <div className={classes.LeftBox}>
                            <div className={classes.Left}>
                            </div>
                            <div className={classes.LeftIcon}>
                                <ThumbUpAltRoundedIcon className={classes.Icon} />
                            </div>
                            <AddCircleRoundedIcon className={classes.AddLeft} onClick={() => this.clickHandler('left')} />
                            <div className={classes.Data}>
                                {this.props.dataLeft && this.state.dataLeft === null ? this.props.dataLeft : this.state.dataLeft}
                            </div>
                        </div>
                        <div className={classes.RightBox}>
                            <div className={classes.Right}>
                            </div>
                            <div className={classes.RightIcon}>
                                <ThumbDownRoundedIcon className={classes.Icon} />
                            </div>
                            <AddCircleRoundedIcon className={classes.AddRight} onClick={() => this.clickHandler('right')} />
                            <div className={classes.Data}>
                                {this.state.dataRight}
                            </div>
                        </div>
                    </div>
                </div >
            </React.Fragment>

        )
    }
}
export default Two;