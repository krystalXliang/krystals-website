import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './BucketList.css';

export class BucketList extends Component {
    render() {
        return (
            <div>
            <Jumbotron>
            <h1 className="display-3">2019 BucketList</h1>
            <p className="lead">Below are a list of things that I hope to achieve by the end of the 2019 year!</p>
            <hr className="my-2" />
            <p>As things are completed, they will be striked and will have a link where you can click to learn more about the finished item.</p>
            </Jumbotron>

            <ul className='bucketlist'>
                <li>Go to Whistler, Canada</li>
                <li>Meet an alpaca</li>
                <li>Bathe an elephant</li>
                <li>Go to Japan- Mario Kart</li>
            </ul>
            </div> 
        );
    }
}