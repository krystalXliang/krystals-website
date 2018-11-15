import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

export class Homepage extends Component {
    render() {
        return (
            <div>
                <Jumbotron>Hello, my name is Krystal Liang!</Jumbotron>
                <p>About me: blah</p>
            </div>
        );
    }
}