// import necessary modules and components
import Layout from './Layout';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useHistory } from 'react-router-dom';

// inline styles
const styles = {
  width: '200px',
  margin: '20px auto',
};
const pStyle = {
  color: 'green'
}

// main function component
function Game() {
  // state variables
  const [layout, setLayout] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = checkWinner(layout)

  // function to handle clicks on boxes
  const handleClick = (i) => {
    // make a copy of the layout state array
    const layoutState = [...layout];
    // check if there's already a winner or if the box is already clicked
    if (winner || layoutState[i]) return;
    // mark the box as X or O depending on the turn
    layoutState[i] = xIsNext ? 'X' : 'O';
    // update the state variables
    setLayout(layoutState);
    setXisNext(!xIsNext);
  }

  // get the history object
  const history = useHistory();
  // function to handle clicks on the Back button
  const onBack = e => {
    e.preventDefault();
    // go back to the patient page
    history.push('/patient');
  }

  // JSX code for the Game component
  return (
    <React.Fragment>
      <Layout boxes={layout} onClick={handleClick} />
      <div style={styles}>
        <p style={pStyle}>
          <h2> {winner ? 'Hooray! Winner is: ' + winner : 'Next Player: '
            + (xIsNext ? 'X' : 'O')}</h2>
        </p>

      </div>
      <div className='buttonBack'>
        <Button className='buttonSave' onClick={onBack} variant="primary" type="submit">
          Back
        </Button>

      </div>
    </React.Fragment>
  )
}

// function to check if there's a winner
export function checkWinner(boxes) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [x, y, z] = lines[i];
    if (boxes[x] && boxes[x] === boxes[y] && boxes[x] === boxes[z]) {
      return boxes[x];
    }
  }
  return null;
}

// example boxes for testing
const boxes = [null, null, null, "X", "X", "O", null, null, null];

export default Game;