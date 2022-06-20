import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {


    return (
        <div>
            <button onClick = {props.onClick} className='btn' style={{ color: props.color, backgroundColor: props.bgcolor }}> {props.text} </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'white',
    bgcolor: 'black',
    text: 'button',
}

Button.propTypes ={
    color: PropTypes.string,
    bgcolor: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}



export default Button
