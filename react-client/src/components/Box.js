// Import necessary dependencies
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

// Define custom style for the button
const style = {
    background: '#fff',
    border: '2px solid lightblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

// Define the Box component
function Box({ value, onClick }) {
    // Render a button with the custom style and onClick event handler
    return (
        <button
            style={style}
            onClick={onClick}>
            {value}
        </button>
    );
}

// Export the Box component
export default Box;