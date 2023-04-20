
import { withRouter } from 'react-router-dom';

import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Home(props) {


    return (
        <div className="container">
            <Jumbotron>
            <h2> CRUD Operations in Express - React </h2>
            <p>Developed by group 2</p>
                </Jumbotron>
        </div>
    );

}

export default withRouter(Home);