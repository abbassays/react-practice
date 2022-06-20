// Import components
import React from 'react'

import Button from './Button';
import {useLocation} from 'react-router-dom';

// function definition
function Header(props) {
    const location = useLocation();
    return (
        <header className='header'>
            <h1 style={HeaderStyle} >Task Tracker</h1>
            {   location.pathname === '/' &&
                <Button
                bgcolor={!props.addTask ? '#001128' : '#a70303'}
                text={!props.addTask ? 'Add' : 'Hide'}
                onClick={() => { props.toggleAdd(!props.addTask) }}
            />}
        </header>
    )
}

// style
const HeaderStyle = {
    color: "black",
}


export default Header;
