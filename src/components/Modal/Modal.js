import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from './Backdrop/Backdrop'

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClose} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <button onClick={this.props.addOne}>One</button>
                    <button onClick={this.props.addTwo}>Two</button>
                </div>
            </React.Fragment>
        )
    }
}
export default Modal;