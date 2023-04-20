// import dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';

// create Home functional component
function Home(props) {
    // return JSX
    return (
        <div className="container">
            <Jumbotron>
                <h2> CRUD Operations in Express - React </h2>
                <p>Developed by group 2</p>
            </Jumbotron>
        </div>
    );
}

// export the component with the withRouter higher order component to have access to the history object
export default withRouter(Home);