import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class JumboTronComponent extends Component {
    render() {
        return (
            <div>
            <Jumbotron>
            <h1>Hello, World!</h1>
            <p> This is a simple hero unit , a simple jumbotron-style component
             for calling extra attention to featured content o r information.</p>
             <p><Button variant="primary">Learn More</Button></p>
            </Jumbotron>
            </div>
        );
    }
}

export default JumboTronComponent;