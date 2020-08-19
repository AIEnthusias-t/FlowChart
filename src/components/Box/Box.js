import React, { useState } from 'react';
import classes from './Box.module.css';
import DeleteIcon from '@material-ui/icons/Delete';

const Box = (props) => {
    const [value, setValue] = useState('');

    return (
        <div className={classes.Text}>
            <div className={classes.TextLine}></div>
            <div className={classes.InputBox}>
                <div className={classes.Delete}>
                    <DeleteIcon className={classes.Icon} onClick={props.showEle} />
                </div>
                <input type="text" placeholder="Enter value" value={value} onChange={event => setValue(event.target.value)} />
            </div>
        </div>
    )
}
export default Box;