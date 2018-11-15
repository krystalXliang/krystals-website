import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col } from 'reactstrap';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv('data/projects.csv').then(data => {
            this.setState({
                data: data
            })
        })
    }
    render() {
        console.log(this.state.data)
        return <div className="container">Projects
                 { this.state.data.map((d, i) => {
                       return <Col sm="6" key={ "project" + i }>
                              <Card>
                                <CardBody>
                                  <CardTitle>
                                    { d.title }
                                  </CardTitle>
                                  <CardText>
                                    { d.description }
                                  </CardText>
                                  <a target="_blank" href={ d.link }>
                                    <Button>Link</Button>
                                  </a>
                                </CardBody>
                              </Card>
                              <br/>
                              </Col>
                   
                   }) }
               </div>
    }
}