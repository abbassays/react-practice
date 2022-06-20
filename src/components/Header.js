// Import components
import React from 'react'

import Button from './Button';
import {useLocation} from 'react-router-dom';

// function definition
function Header(props) {
    // const location = useLocation();
    return (
        <header className='header'>
            <h1 style={HeaderStyle} >Task Tracker</h1>
            {
                <Button
                bgcolor={!props.addTask ? 'green' : 'red'}
                text={!props.addTask ? 'Add' : 'Hide'}
                onClick={() => { props.toggleAdd(!props.addTask) }}
            />}
        </header>
    )
}

// style
const HeaderStyle = {
    color: "blue",
}


export default Header;
