import React from 'react';
import Box from './Box';
import Jumbotron from 'react-bootstrap/Jumbotron';

// Define the styles for the grid container
const style = {
  border: '4px solid lightblue',
  borderRadius: '10px',
  width: '320px',
  height: '320px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

/**
 * This component represents the grid layout of boxes.
 * @param {Object} props - The props object containing the boxes and onClick function.
 */
function Layout({ boxes, onClick }) {
  // Map through each box value and create a Box component with the corresponding value
  return (
    <div style={style}>
      {boxes.map((box, i) => (
        <Box key={i} value={box} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Layout;