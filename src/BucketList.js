import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

export class BucketList extends Component {
    render() {
        return (
            <div>
            {/* <header>2019 Bucketlist </header> */}
            <Jumbotron>2019 BucketList</Jumbotron>
            <p>Here are some items</p>
            </div> 
        );
    }
}