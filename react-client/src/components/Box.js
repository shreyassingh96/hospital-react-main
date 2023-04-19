import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const style = {
    background: '#fff',
    border: '2px solid lightblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}


function Box({ value, onClick }) {
    return (
        <button
            style={style}
            onClick={onClick}>
            {value}
        </button>
    );
}
export default Box;