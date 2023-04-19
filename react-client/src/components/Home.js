
import { withRouter } from 'react-router-dom';

import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Home(props) {


    return (
        <div className="container">
            <Jumbotron>
            <h2> Express - React with CRUD Operations</h2>
            <p>React front-end calls Express REST API to add,
                list, update, or delete a user, create an article, etc.</p>
                </Jumbotron>
        </div>
    );

}

export default withRouter(Home);